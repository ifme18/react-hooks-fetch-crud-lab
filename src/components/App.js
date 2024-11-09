import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  // Fetch questions when the component mounts
  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  function handleAddQuestion(newQuestion) {
    setQuestions([...questions, newQuestion]); // Update state with the new question
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onAddQuestion={handleAddQuestion} />
      ) : (
        <QuestionList questions={questions} />
      )}
    </main>
  );
}

export default App;
