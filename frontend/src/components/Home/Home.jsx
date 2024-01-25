import React from 'react';
import {
  Box,
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import study from '../../assets/images/study.jpg';
import { FaGoogle, FaYoutube } from 'react-icons/fa';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import video from '../../assets/videos/video.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack width={'full'} alignItems={['center', 'flex-end']} gap={'20px'}>
            <Heading children="LEARN FROM THE EXPERTS" size={'2xl'} />
            <Text textAlign={['center', 'left']} children="Find Valuable Content At Reasonable Price" />
            <Link to="/">
              <Button size={'lg'} colorScheme="yellow">
                Explore Now
              </Button>
            </Link>
          </VStack>

          <Image
            className="graphics"
            boxSize={'md'}
            src={study}
            objectFit={'contain'}
            borderRadius={'30px'}
          />
        </Stack>
      </div>

      <Box padding={'8'} bg={'blackAlpha.900'}>
        <Heading textAlign={'Center'} fontFamily={'body'} color={'yellow.700'}>
          OUR BRANDS
        </Heading>
        <HStack
          className="banner"
          justifyContent={'space-evenly'}
          marginTop={5}
        >
          <FaGoogle />
          <FaYoutube />
          <SiCoursera />
          <SiUdemy />
          <FaAws />
        </HStack>
      </Box>

      <div className="container2">
        <video
          src={video}
          autoPlay
          controls
          controlsList="nodownload nofullscreen"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
      </div>
    </section>
  );
};

export default Home;
