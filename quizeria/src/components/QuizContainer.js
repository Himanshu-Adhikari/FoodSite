import React, { useState } from 'react';
import Card from './Card';
import Quiz from './Quiz';

const QuizContainer = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState([]);

  const categories = ["Permutations and Combinations", "Percentage", "Time and Work"];
  const activities = ["Activity 1", "Activity 2"];

  const handleCardClick = (category) => {
    setSelectedCategory(category);
    setSelectedActivity(null);
    setStartQuiz(false);
  };

  const handleActivityChange = (e) => {
    setSelectedActivity(e.target.value);
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`http://localhost/api/fetch_questions.php?category=${selectedCategory}&activity=${selectedActivity}`);
      if (!response.ok) {
        throw new Error('Failed to fetch questions');
      }
      const data = await response.json();
      setQuestions(data.questions);
      setStartQuiz(true);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleConfirmClick = () => {
    if (selectedCategory && selectedActivity) {
      fetchQuestions();
    } else {
      // window.alert("Select Activity first");
      // Handle case where category or activity is not selected
    }
  };

  return (
    <div className="quiz-container">
      {!startQuiz ? (
        <>
          {categories.map((category, index) => (
            <Card key={index} title={category} onClick={() => handleCardClick(category)} />
          ))}
          {selectedCategory && (
            <div className="options">
              {activities.map((activity, index) => (
                <div key={index}>
                  <input 
                    type="radio" 
                    id={activity} 
                    name="activity" 
                    value={activity}
                    checked={selectedActivity === activity}
                    onChange={handleActivityChange} 
                  />
                  <label htmlFor={activity}>{activity}</label>
                </div>
              ))}
            </div>
          )}
          {selectedCategory && selectedActivity && (
            <div>
              <button onClick={handleConfirmClick}>Confirm Choice</button>
            </div>
          )}
        </>
      ) : (
        <Quiz questions={questions} />
      )}
    </div>
  );
};

export default QuizContainer;
