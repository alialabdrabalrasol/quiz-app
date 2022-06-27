import { Flex, Stack, Input, Select, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ Categories, Levels, setName, setCategory, setLevel }) => {
  const navigate = useNavigate();

  return (
    <Flex height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <Stack spacing={3}>
        <Input
          placeholder="Name"
          size="lg"
          onChange={e => setName(e.target.value)}
        />
        <Select
          placeholder="Select Category"
          size="lg"
          onChange={e => {
            setCategory(e.target.value);
          }}
        >
          {Categories.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Select>
        <Select
          placeholder="Select Difficulty Level"
          size="lg"
          onChange={e => {
            setLevel(e.target.value);
            console.log(e.target.value);
          }}
        >
          {Levels.map(level => (
            <option key={level.id} value={level.value}>
              {level.name}
            </option>
          ))}
        </Select>
        <Button colorScheme="gray" onClick={() => navigate('/quiz')}>
          Generate Quiz
        </Button>
      </Stack>
    </Flex>
  );
};

export default Home;
