import { useState } from 'react';
import './App.css';

// TODO: API import
// import { searchProducts, Product } from './api/products';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="app">
      <h1>상품 검색</h1>

      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="상품을 검색하세요"
          className="search-input"
        />
        <button className="search-button">검색</button>
      </div>

      {/* TODO: 자동완성 목록 구현 */}
      {/* TODO: 최근 검색어 구현 */}
    </div>
  );
}

export default App;
