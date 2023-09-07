import { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './Search.module.scss';
import useTodo from '../../../hooks/useTodo';

function Search() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const { searchTodo } = useTodo();
  // ชะลอ การ search 1 วินาที && ค้นหาแค่ 1 ครั้ง

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      console.log('Search');
      if (searchKeyword.trim() !== '') searchTodo(searchKeyword);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchKeyword]);

  const handleChangeInput = (e) => {
    setSearchKeyword(e.target.value);
  };
  return (
    <div className={styles.search}>
      <span className={styles.search__icon}>
        <FaSearch />
      </span>
      <input
        type='text'
        placeholder='search'
        className={styles.search__input}
        value={searchKeyword}
        onChange={handleChangeInput}
      />
    </div>
  );
}

export default Search;
