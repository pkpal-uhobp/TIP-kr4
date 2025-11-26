import AnimalCard from './AnimalCard';
import './AnimalList.css';

function AnimalList({ animals, onCardClick }) {
  if (animals.length === 0) {
    return (
      <div className="no-results">
        <div className="no-results-icon">🔍</div>
        <h3>Ничего не найдено</h3>
        <p>Попробуйте изменить поисковый запрос</p>
      </div>
    );
  }

  return (
    <div className="animal-list">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          onClick={onCardClick}
        />
      ))}
    </div>
  );
}

export default AnimalList;
