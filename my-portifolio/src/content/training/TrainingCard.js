function TrainingCard({ title, platform, duration, description, imgSrc }) {
  return (
        <div className="training-card">
            <div>
                <h3>{title}</h3>
                <span className="platform">{platform}</span>
                <span className="duration">{duration}</span>
                <p>{description}</p>
            </div>
            <div style={{backgroundImage: `url(${imgSrc})`, backgroundSize: 'cover',
             backgroundPosition: 'center', height: '150px', width: '150px'}} />
        </div>
    );


}

export default TrainingCard;
