import './AnimalCard.css';

function AnimalCard({ animal, onClick }) {
  return (
    <div className="animal-card" onClick={() => onClick(animal)}>
      <div className="animal-card-image-container">
        <img 
          src={animal.image} 
          alt={animal.name} 
          className="animal-card-image"
          loading="lazy"
        />
      </div>
      <div className="animal-card-content">
        <h3 className="animal-card-title">{animal.name}</h3>
        <span className="animal-card-category">{animal.category}</span>
      </div>
    </div>
  );
}

export default AnimalCard;
