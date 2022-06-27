import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Temp from './components/Temp';

function App() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [level, setLevel] = useState('');
  const [categories, setCategories] = useState([]);
  const Levels = [
    { id: 1, name: 'Easy', value: 'easy' },
    { id: 2, name: 'Medium', value: 'medium' },
    { id: 3, name: 'Hard', value: 'hard' },
  ];
  const [score, setScore] = useState(0);
  useEffect(() => {
    const request = async () => {
      const response = await fetch('https://opentdb.com/api_category.php');
      const data = await response.json();
      setCategories(data.trivia_categories);
    };
    request();
  }, [categories]);
  return (
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                Categories={categories}
                Levels={Levels}
                setName={setName}
                setCategory={setCategory}
                setLevel={setLevel}
              />
            }
          />
          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                category={category}
                level={level}
                score={score}
                setScore={setScore}
              />
            }
          />
          <Route path="/test" element={<Temp />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
