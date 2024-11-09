import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"; // Import QuestionItem component

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  function handleDeleteQuestion(id) {
    setQuestions(questions.filter((question) => question.id !== id)); // Update state to remove the deleted question
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <QuestionItem 
            key={question.id} 
            question={question} 
            onDelete={handleDeleteQuestion} // Pass the callback to handle deletion
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
