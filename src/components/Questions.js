import React, { useState, useEffect } from 'react';

import Question from './Question';
const Questions = ({ question,score,setScore }) => {
  return (
    <>
      <Question question={question} setScore={setScore}></Question>
    </>
  );
};

export default Questions;
