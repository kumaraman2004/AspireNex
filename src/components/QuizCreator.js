import React, { useState } from 'react';

const QuizCreator = ({ addQuiz }) => {
  const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctAnswer: '' }]);

  const handleInputChange = (index, event) => {
    const newQuestions = [...questions];
    if (event.target.name === 'question') {
      newQuestions[index].question = event.target.value;
    } else if (event.target.name === 'correctAnswer') {
      newQuestions[index].correctAnswer = event.target.value;
    } else {
      const optionIndex = parseInt(event.target.name.split('-')[1]);
      newQuestions[index].options[optionIndex] = event.target.value;
    }
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addQuiz(questions);
    setQuestions([{ question: '', options: ['', '', '', ''], correctAnswer: '' }]);
  };

  return (
    <div>
      <h2>Create Quiz</h2>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index}>
            <input
              type="text"
              name="question"
              value={q.question}
              placeholder="Enter question"
              onChange={(event) => handleInputChange(index, event)}
              required
            />
            {q.options.map((option, i) => (
              <input
                key={i}
                type="text"
                name={`option-${i}`}
                value={option}
                placeholder={`Option ${i + 1}`}
                onChange={(event) => handleInputChange(index, event)}
                required
              />
            ))}
            <input
              type="text"
              name="correctAnswer"
              value={q.correctAnswer}
              placeholder="Correct Answer"
              onChange={(event) => handleInputChange(index, event)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addQuestion}>Add Question</button>
        <button type="submit">Create Quiz</button>
      </form>
    </div>
  );
};

export default QuizCreator;
