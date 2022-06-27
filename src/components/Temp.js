import React from 'react';
import { VStack, Text, HStack, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const Temp = () => {
  const navigate = useNavigate();
  return (
    <Flex
      height={'100vh'}
      justifyContent={'center'}
      alignItems={'center'}
   
    >
      <VStack>
        <Text fontSize="6xl">Question</Text>
        <HStack spacing={2}>
          <Button size={'lg'}>Hello World</Button>
          <Button size={'lg'}>Hello World</Button>
        </HStack>
        <HStack spacing={2}>
          <Button size={'lg'}>Hello World</Button>
          <Button size={'lg'}>Hello World</Button>
        </HStack>
        <HStack>
          <Button
            size={'xs'}
            onClick={() => {
              navigate('/');
            }}
          >
            Leave
          </Button>
          <Button size={'xs'}>Next </Button>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Temp;
