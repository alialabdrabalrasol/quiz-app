import React from 'react';
import { Flex, Text, HStack, VStack, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Question = ({ question, score, setScore }) => {
  const navigate = useNavigate();
  const { question: q, correct_answer: ca, incorrect_answers: ia } = question;
  const options = [ca, ...ia];
  const handleShuffle = options => {
    return options.sort(() => Math.random() - 0.5);
  };
  const checkAnswer = e => {
    if (e.target.value === ca) {
      console.log('correct');
      setScore(score + 1);
    } else {
      setScore(score);
    }
  };

  return (
    <Flex height={'100vh'} justifyContent={'center'} alignItems={'center'}>
      <VStack>
        <Text fontSize="6xl">{q}</Text>
        <VStack spacing={3}>
          {options.map(option => (
            <Button size={'lg'} value={option} onClick={checkAnswer}>
              {option}
            </Button>
          ))}
        </VStack>
        {/* <HStack spacing={2}>
          <Button size={'lg'}>{question.correct_answer}</Button>
          <Button size={'lg'}>Hello World</Button>
        </HStack>
        <HStack spacing={2}>
          <Button size={'lg'}>Hello World</Button>
          <Button size={'lg'}>Hello World</Button>
        </HStack> */}
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

export default Question;
