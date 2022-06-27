import { Flex, HStack, Stack, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Questions from '../components/Questions';

const Quiz = ({ name, category, level, score, setScore }) => {
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=multiple`
      );
      const data = await response.json();
      setQuestions(data.results);
    };
    request();
  }, []);
  return (
    <Flex>
      <Stack>
        <HStack>
          <Text>{category}</Text>
          <Text>Score:{score}/10</Text>
        </HStack>
        {questions.map(question => (
          <Questions
            key={question.id}
            question={question}
            score={score}
            setScore={setScore}
          />
        ))}
      </Stack>
    </Flex>
  );
};

export default Quiz;
