import { useState, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import AnimalList from './components/AnimalList';
import AnimalModal from './components/AnimalModal';
import animals from './data/animals';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const filteredAnimals = useMemo(() => {
    if (!searchQuery.trim()) {
      return animals;
    }
    const query = searchQuery.toLowerCase().trim();
    return animals.filter(animal => 
      animal.name.toLowerCase().includes(query) ||
      animal.nameEn.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleCloseModal = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">🦁 Энциклопедия животных</h1>
        <p className="subtitle">
          Узнайте больше о удивительном мире животных
        </p>
      </header>

      <main className="main">
        <SearchBar 
          searchQuery={searchQuery} 
          onSearchChange={setSearchQuery} 
        />
        
        <div className="results-info">
          {searchQuery && (
            <span>Найдено: {filteredAnimals.length} животных</span>
          )}
        </div>

        <AnimalList 
          animals={filteredAnimals} 
          onCardClick={handleCardClick} 
        />
      </main>

      <footer className="footer">
        <p>© 2024 Энциклопедия животных. Контрольная работа по React.</p>
      </footer>

      {selectedAnimal && (
        <AnimalModal 
          animal={selectedAnimal} 
          onClose={handleCloseModal} 
        />
      )}
    </div>
  );
}

export default App;
