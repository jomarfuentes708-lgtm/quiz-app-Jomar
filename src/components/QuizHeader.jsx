export default function QuizHeader({ currentQuestion, totalQuestions, score }) {
  return (
    <header className="quiz-header">
      <div className="quiz-header-copy">
        <span className="quiz-header-title">Frontend Quiz</span>
        <h2 className="quiz-header-question">
          Question {currentQuestion} of {totalQuestions}
        </h2>
      </div>
      <div className="score-badge">Score: {score}</div>
    </header>
  );
}