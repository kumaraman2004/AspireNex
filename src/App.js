import React, { useState } from 'react';
import QuizCreator from './components/QuizCreator';
import QuizTaker from './components/QuizTaker';
import './App.css';

const App = () => {
  const [quizzes, setQuizzes] = useState([]);

  const addQuiz = (quiz) => {
    setQuizzes([...quizzes, quiz]);
  };

  return (
    <div className="App">
      <h1>Quiz Platform</h1>
      <QuizCreator addQuiz={addQuiz} />
      <QuizTaker quizzes={quizzes} />
    </div>
  );
};

export default App;
