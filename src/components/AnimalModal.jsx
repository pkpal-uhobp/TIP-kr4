import { useState } from 'react';
import './AnimalModal.css';

function AnimalModal({ animal, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!animal) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === animal.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? animal.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-gallery">
          <img 
            src={animal.images[currentImageIndex]} 
            alt={animal.name}
            className="modal-image"
          />
          {animal.images.length > 1 && (
            <>
              <button className="gallery-nav gallery-prev" onClick={prevImage}>
                ◀
              </button>
              <button className="gallery-nav gallery-next" onClick={nextImage}>
                ▶
              </button>
              <div className="gallery-dots">
                {animal.images.map((_, index) => (
                  <span 
                    key={index}
                    className={`gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="modal-info">
          <div className="modal-header">
            <h2 className="modal-title">{animal.name}</h2>
            <span className="modal-name-en">{animal.nameEn}</span>
          </div>

          <p className="modal-description">{animal.description}</p>

          <div className="modal-details">
            <div className="detail-item">
              <span className="detail-label">🌍 Среда обитания</span>
              <span className="detail-value">{animal.habitat}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">📅 Продолжительность жизни</span>
              <span className="detail-value">{animal.lifespan}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">⚖️ Вес</span>
              <span className="detail-value">{animal.weight}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🍽️ Питание</span>
              <span className="detail-value">{animal.diet}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🏷️ Категория</span>
              <span className="detail-value">{animal.category}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">🔒 Статус сохранения</span>
              <span className="detail-value">{animal.conservation}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimalModal;
