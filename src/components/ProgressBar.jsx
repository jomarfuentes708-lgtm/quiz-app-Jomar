export default function ProgressBar({ progress }) {
  return (
    <div className="progress-wrapper" aria-label="Quiz progress">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
}