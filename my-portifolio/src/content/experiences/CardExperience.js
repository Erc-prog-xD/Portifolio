
function CardExperience({ title, position, duration, children }) {
  return (
    <div className="experience-card">
      <h3>{title}</h3>
      <span className="position">{position}</span>
      <span className="duration">{duration}</span>
      <p>
        {children}
      </p>
    </div>
  );
}
export default CardExperience;