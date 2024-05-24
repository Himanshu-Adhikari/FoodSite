import React, { useState } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          {questions && questions.length > 0 ? (
            <div className="question-section">
              <div className="question-text">
                {questions[currentQuestionIndex].question}
              </div>
              <div className="answer-section">
                {questions[currentQuestionIndex].options.map(
                  (option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerOptionClick(option)}
                    >
                      {option}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : (
            <div className="no-questions-message">No questions available</div>
          )}
        </>
      )}
    </div>
  );
};

export default Quiz;
