import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaYoutube, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <Box padding={'4'} bg={'blackAlpha.900'} minH={'9vh'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={['center', 'flex-start']} width={'full'}>
            <Heading
              children={'All Right Reserved'}
              color={'white'}
              size={'lg'}
            />
            <Heading
              children={'@TossebNadaf'}
              color={'yellow.300'}
              fontFamily={'body'}
              size={'sm'}
            />
          </VStack>
          <HStack
            spacing={['2', '10']}
            justifyContent={'center'}
            color={'white'}
            fontSize={'30px'}
          >
            <a href="#" target="_blank">
              {' '}
              <FaYoutube />{' '}
            </a>
            <a href="#" target="_blank">
              {' '}
              <FaGithub />{' '}
            </a>
            <a href="#" target="_blank">
              {' '}
              <FaTwitter />{' '}
            </a>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
