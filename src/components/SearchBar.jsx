import './SearchBar.css';

function SearchBar({ searchQuery, onSearchChange }) {
  return (
    <div className="search-bar">
      <div className="search-input-container">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Поиск животных по названию..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button 
            className="clear-button"
            onClick={() => onSearchChange('')}
            aria-label="Очистить поиск"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
