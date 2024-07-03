import React, { useState } from 'react';
const QuizTaker = ({ quizzes }) => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const handleQuizSelect = (event) => {
    const selectedQuiz = quizzes[event.target.value];
    setCurrentQuiz(selectedQuiz);
    setAnswers({});
    setScore(null);
  };

  const handleAnswerChange = (index, event) => {
    const newAnswers = { ...answers, [index]: event.target.value };
    setAnswers(newAnswers);
  };

  const calculateScore = (event) => {
    event.preventDefault();
    let newScore = 0;
    currentQuiz.forEach((q, index) => {
      if (q.correctAnswer === answers[index]) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div>
      <h2>Take Quiz</h2>
      <select onChange={handleQuizSelect}>
        <option value="">Select a quiz</option>
        {quizzes.map((quiz, index) => (
          <option key={index} value={index}>Quiz {index + 1}</option>
        ))}
      </select>
      {currentQuiz && (
        <form onSubmit={calculateScore}>
          {currentQuiz.map((q, index) => (
            <div key={index}>
              <p>{q.question}</p>
              {q.options.map((option, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={(event) => handleAnswerChange(index, event)}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button type="submit">Submit Quiz</button>
        </form>
      )}
      {score !== null && <h3>Your score: {score}/{currentQuiz.length}</h3>}
    </div>
  );
};

export default QuizTaker;
