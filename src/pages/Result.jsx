import { useNavigate } from 'react-router-dom';
import ResultCard from '../components/ResultCard';

export default function Result({
  totalQuestions,
  correctAnswers,
  incorrectAnswers,
  percentage,
  onResetQuiz,
}) {
  const navigate = useNavigate();

  const handleRetake = () => {
    onResetQuiz();
    navigate('/quiz');
  };

  const handleHome = () => {
    onResetQuiz();
    navigate('/');
  };

  return (
    <main className="page result-page">
      <div className="card result-card">
        <ResultCard
          totalQuestions={totalQuestions}
          correctAnswers={correctAnswers}
          incorrectAnswers={incorrectAnswers}
          percentage={percentage}
        />

        <div className="result-actions">
          <button type="button" className="btn-primary" onClick={handleRetake}>
            Retake Quiz
          </button>
          <button type="button" className="btn-secondary" onClick={handleHome}>
            Return Home
          </button>
        </div>
      </div>
    </main>
  );
}