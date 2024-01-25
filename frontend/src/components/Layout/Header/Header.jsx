import React from 'react';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { RiMenu5Fill } from 'react-icons/ri';
import { IoIosLogOut } from 'react-icons/io';
import { MdDashboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link to={url} onClick={onClose}>
    <Button>{title}</Button>
  </Link>
);

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isAuthenticated = false;
  const user = {
    role: 'admin',
  };
  const LogoutHandler = () =>{
    console.log("Logout")
    onClose();
  }

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width={'12'}
        height={'12'}
        rounded={'full'}
        position={'fixed'}
        top={'6'}
        left={'6'}
      >
        <RiMenu5Fill />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth={'1px'}>Course Bundler</DrawerHeader>
          <DrawerBody>
            <VStack spacing={'4'} alignItems={'flex-start'}>
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton onClose={onClose} url="/courses" title="Browse All Courses" />
              <LinkButton onClose={onClose} url="/request" title="Request For Course" />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />
            </VStack>

            <HStack
              justifyContent={'space-evenly'}
              width={'80%'}
              bottom={'2rem'}
              position={'absolute'}
            >
              {isAuthenticated ? (
                <>
                  <VStack>
                    <HStack>
                      <Link to="/profile" onClick={onClose}>
                        <Button colorScheme="yellow" variant={'ghost'}>
                          Profile
                        </Button>
                      </Link>
                      <Button
                        variant={'ghost'}
                        gap={'3px'}
                        onClick={LogoutHandler}
                      >
                        Logout
                        <IoIosLogOut />
                      </Button>
                    </HStack>
                    <HStack>
                      {user && user.role === 'admin' && (
                        <Link to="/admin/dashboard" onClick={onClose}>
                          <Button colorScheme="purple" variant={'ghost'} gap={'3px'} >
                            <MdDashboard />
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </HStack>
                  </VStack>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button onClick={onClose} colorScheme="yellow">Login</Button>
                  </Link>
                  <p>OR</p>
                  <Link to="/register">
                    <Button onClick={onClose} colorScheme="yellow">Sign Up</Button>
                  </Link>
                </>
              )}
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
