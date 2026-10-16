
export default function AnswerOption({
  option,
  index,
  isSelected,
  onSelect,
}) {
  return (
    <button
      type="button"
      className={`answer-option ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
      aria-pressed={isSelected}
    >
      <span className="option-circle">
        {isSelected && <span className="option-dot" />}
      </span>

      <span className="option-text">{option}</span>
    </button>
  );
}
