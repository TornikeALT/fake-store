import { useState } from 'react';
import styles from '../styles/Categories.module.css';
import { Link } from 'react-router-dom';

function Categories() {
  const [title, setTitle] = useState('All');
  const handleTitleChange = e => {
    setTitle(e.target.innerText);
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <div>
            <h2>{title}</h2>
          </div>
          <div className={styles.category_list}>
            <Link to="all" onClick={handleTitleChange}>
              All
            </Link>
            <Link to="womencloth" onClick={handleTitleChange}>
              Women Cloth
            </Link>
            <Link to="mencloth" onClick={handleTitleChange}>
              Men Cloth
            </Link>
            <Link to="electronics" onClick={handleTitleChange}>
              Electronics
            </Link>
            <Link to="jewelery" onClick={handleTitleChange}>
              Jewelery
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
