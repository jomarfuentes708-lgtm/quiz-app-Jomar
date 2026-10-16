export default function ResultCard({ totalQuestions, correctAnswers, incorrectAnswers, percentage }) {
  return (
    <div className="result-summary">
      <p className="eyebrow accent">Congratulations!</p>
      <h2>Your Score</h2>
      <div className="final-score">
        {correctAnswers} / {totalQuestions}
      </div>

      <div className="results-grid">
        <div className="result-stat">
          <span className="label">Total Questions</span>
          <strong>{totalQuestions}</strong>
        </div>
        <div className="result-stat">
          <span className="label">Correct</span>
          <strong>{correctAnswers}</strong>
        </div>
        <div className="result-stat">
          <span className="label">Incorrect</span>
          <strong>{incorrectAnswers}</strong>
        </div>
        <div className="result-stat">
          <span className="label">Percentage</span>
          <strong>{percentage}%</strong>
        </div>
      </div>
    </div>
  );
}