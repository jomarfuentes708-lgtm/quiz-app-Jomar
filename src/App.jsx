import { useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { questions } from './data/questions';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer('');
    setScore(0);
  };

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = (navigate) => {
    const current = questions[currentQuestion];

    if (selectedAnswer) {
      if (selectedAnswer === current.answer) {
        setScore((prevScore) => prevScore + 1);
      }
    }

    if (currentQuestion === questions.length - 1) {
      setSelectedAnswer('');
      navigate('/result');
      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer('');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/quiz"
          element={
            <Quiz
              questions={questions}
              currentQuestion={currentQuestion}
              selectedAnswer={selectedAnswer}
              onAnswerSelect={handleAnswerSelect}
              onNext={handleNextQuestion}
              score={score}
            />
          }
        />
        <Route
          path="/result"
          element={
            <Result
              totalQuestions={questions.length}
              correctAnswers={score}
              incorrectAnswers={questions.length - score}
              percentage={Math.round((score / questions.length) * 100)}
              onResetQuiz={resetQuiz}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;