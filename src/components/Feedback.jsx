export default function Feedback({ feedback, total, positivePercentage }) {
  return (
    <div>
      <h2>Feedback Stats</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
