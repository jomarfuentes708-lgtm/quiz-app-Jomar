import AnswerOption from './AnswerOption';

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onSelectAnswer,
  onNext,
}) {
  return (
    <div className="question-card">
      <p className="question-kicker">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h3>{question.question}</h3>

      <div className="answer-list">
        {question.options.map((option, index) => (
          <AnswerOption
            key={option}
            option={option}
            index={index}
            isSelected={selectedAnswer === option}
            onSelect={() => onSelectAnswer(option)}
          />
        ))}
      </div>

      <div className="question-actions">
        <button
          type="button"
          className="btn-primary next-button"
          onClick={onNext}
          disabled={!selectedAnswer}
        >
          {questionNumber === totalQuestions ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
}