import { useNavigate } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';
import ProgressBar from '../components/ProgressBar';
import QuizHeader from '../components/QuizHeader';

export default function Quiz({
  questions,
  currentQuestion,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  score,
}) {
  const navigate = useNavigate();
  const question = questions[currentQuestion];

  if (!question) {
    return null;
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <main className="page quiz-page">
      <div className="card quiz-card">
        <QuizHeader
          currentQuestion={currentQuestion + 1}
          totalQuestions={questions.length}
          score={score}
        />
        <ProgressBar progress={progress} />

        <QuestionCard
          question={question}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
          selectedAnswer={selectedAnswer}
          onSelectAnswer={onAnswerSelect}
          onNext={() => onNext(navigate)}
        />
      </div>
    </main>
  );
}