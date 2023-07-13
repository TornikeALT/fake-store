import { useState } from 'react';
import styles from '../styles/Categories.module.css';
import { NavLink } from 'react-router-dom';

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
            <NavLink
              to="all"
              onClick={handleTitleChange}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? 'purple' : '',
                  color: isActive ? 'white' : 'black',
                };
              }}
            >
              All
            </NavLink>
            <NavLink
              to="womencloth"
              onClick={handleTitleChange}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? 'purple' : '',
                  color: isActive ? 'white' : 'black',
                };
              }}
            >
              Women Cloth
            </NavLink>
            <NavLink
              to="mencloth"
              onClick={handleTitleChange}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? 'purple' : '',
                  color: isActive ? 'white' : 'black',
                };
              }}
            >
              Men Cloth
            </NavLink>
            <NavLink
              to="electronics"
              onClick={handleTitleChange}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? 'purple' : '',
                  color: isActive ? 'white' : 'black',
                };
              }}
            >
              Electronics
            </NavLink>
            <NavLink
              to="jewelery"
              onClick={handleTitleChange}
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? 'purple' : '',
                  color: isActive ? 'white' : 'black',
                };
              }}
            >
              Jewelery
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Categories;
