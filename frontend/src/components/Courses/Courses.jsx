import {
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home/home.css';

const Course = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className="course" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        size={'sm'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={3} children={description} />
      <HStack>
        <Text
          noOfLines={2}
          fontWeight={'bold'}
          textTransform={'uppercase'}
          children={creator}
        />
        <Text
          noOfLines={2}
          fontFamily={'body'}
          textTransform={'uppercase'}
          children={creator}
        />
      </HStack>
      <Heading
        size={'x5'}
        textAlign={'center'}
        textTransform={'uppercase'}
        children={`Views - ${views}`}
      />
      <Heading
        size={'x5'}
        textAlign={'center'}
        textTransform={'uppercase'}
        children={`Lectures - ${lectureCount}`}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="yellow">Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme="yellow"
          onClick={e => addToPlaylistHandler(id)}
        >
          Add to playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const addToPlaylistHandler = () => {
    console.log('Adding to playlist');
  };
  const categories = [
    'Web Development',
    'Artificial Intelligence',
    'Data Structure & Algorithms',
    'App Development',
    'Data Science',
    'Games Development',
  ];
  return (
    <>
      <Container maxH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
        <Heading children="All Courses" margin={'8'} />
        <Input
          placeholder="Search a course..."
          type="text"
          value={keyword}
          focusBorderColor="yellow.500"
          onChange={e => setKeyword(e.target.value)}
        />

        <HStack
          overflow={'auto'}
          paddingY={'8'}
          css={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {categories.map((item, index) => (
            <Button key={index} onClick={e => setCategory(item)} minW={'60'}>
              <Text children={item} />
            </Button>
          ))}
        </HStack>

        <Stack
          direction={['column', 'row']}
          flexWrap={'wrap'}
          justifyContent={['flex-start', 'space-evenly']}
          alignItems={['center', 'flex-start']}
        >
          <Course
            title={'sample'}
            imageSrc={
              'https://img.freepik.com/premium-photo/closeup-drop-water-leaf-flower-reflecting-surrounding-colors-textures_674594-4382.jpg'
            }
            id={'sample'}
            creator={'sample'}
            description={'sample'}
            lectureCount={4}
            views={2}
            addToPlaylistHandler={addToPlaylistHandler}
          />
        </Stack>
      </Container>
    </>
  );
};

export default Courses;
