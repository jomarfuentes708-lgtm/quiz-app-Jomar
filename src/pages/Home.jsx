import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <div className="home-content">
        <div className="quiz-logo">
          <span>Frontend</span> Quiz
        </div>

        <div className="hero-text">
          <div className="welcome">Welcome to the</div>

          <h1>
            Frontend <span>Quiz!</span>
          </h1>

          <p>
            Test your knowledge about web development
            and React. Answer 10 questions and see
            how much you know!
          </p>

          <button
            className="start-btn"
            onClick={() => navigate('/quiz')}
          >
            ▶ &nbsp; Start Quiz
          </button>
        </div>

        <div className="home-footer">
          &lt;/&gt;
          <span>Learn</span> •
          <span>Build</span> •
          <span>Grow</span>
        </div>
      </div>
    </div>
  );
}