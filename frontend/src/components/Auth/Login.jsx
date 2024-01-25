import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <Container height={'95vh'}>
        <VStack height={'full'} justifyContent={'center'} spacing={'16'}>
          <Heading children={'Welcome to CourseBundler'} />

          <form style={{ width: '100%' }}>
            <Box marginY={'4'}>
              <FormLabel htmlFor="email" children={'Email address -'} />
              <Input
                required
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="xyz@gmail.com"
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box marginY={'4'}>
              <FormLabel htmlFor="password" children={'Password -'} />
              <Input
                required
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter Password"
                focusBorderColor="yellow.500"
              />
            </Box>
            <Box>
              <Link to={'/forgetpassword'}>
                <Button colorScheme="yellow" variant={'link'} fontSize={'sm'}>
                  Forget Password
                </Button>
              </Link>
            </Box>

            <Button colorScheme="yellow" type="submit" marginY={4}>
              Login
            </Button>

            <Box>
              <Link to="/register">
                New User ?{' '}
                <Button colorScheme="yellow" variant={'link'}>
                  Sign Up
                </Button>{' '}
                here
              </Link>
            </Box>
          </form>
        </VStack>
      </Container>
    </>
  );
};

export default Login;
