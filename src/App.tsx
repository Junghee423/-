import { FormEvent, useCallback, useEffect, useState } from 'react';
import './App.css';
import { useDebounce } from './hook/useDebounce';

import { Product, searchProducts } from './api/products';

const LOCAL_STORAGE_KEY = "search_values";

function App() {
  const [query, setQuery] = useState(() => LocalStorage.get(LOCAL_STORAGE_KEY)?.pop() ?? "");
  const { debouncedValue, debouncing } = useDebounce(query, "", 300);
  const [products, setProducts] = useState<Product[]>([]);
  useState();
  const [loading, setLoading] = useState(false);
  const [selectIdx, setSelectIdx] = useState(0);
  const [open, setOpen] = useState(true);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    search();
  }, [debouncedValue]);

  const search = async () => {
    try {
      setLoading(true);
      const products = await searchProducts(debouncedValue);
      console.log(`search result : `, products);
      setProducts(products);
      setOpen(products.length > 0);
    } catch (e) {
      console.error("products search error", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    search();
  }, [debouncedValue])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.code === "ArrowUp") {
        setSelectIdx(prev => Math.max(0, prev - 1));
      } else if (e.code === "ArrowDown") {
        setSelectIdx(prev => Math.min(prev + 1, 4));
      } else if (e.code === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    }
  }, []);

  return (
    <div className="app">
      <h1>상품 검색</h1>

      <form className="search-container" onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="상품을 검색하세요"
          className="search-input"
        />
        <button
          className="search-button"
          disabled={debouncing || loading}
        >검색</button>
      </form>

      {
        products.length === 0 && <div>결과 없음</div>
      }

      {
        open && (
          <ul className='autocomplete-list'>
            {
              products.map((product, idx) => (
                <li
                  key={product.id}
                  className={`autocomplete-item ${idx === selectIdx && "selected"}`}
                >
                  <div>{product.category}</div>
                  <div>{product.name}</div>
                </li>
              ))
            }
          </ul>
        )
      }

      {/* TODO: 최근 검색어 구현 */}
    </div>
  );
}

export default App;
