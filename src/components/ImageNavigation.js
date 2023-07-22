import { Link } from 'react-router-dom';
import mencloth from '../images/mencloth.jpg';
import womencloth from '../images/womencloth.jpg';
import electronics from '../images/electronics.jpg';
import jewelery from '../images/jewelery.jpg';
import styles from '../styles/ImageNavigation.module.css';

function ImageNavigation() {
  return (
    <>
      <div>
        <div className={styles.grid_container}>
          <div className={styles.grid_item}>
            <Link to="/categories/mencloth">
              <div className={styles.overlay}></div>
              <img src={mencloth} alt="men clothes" />
              <p>Mens Cloth</p>
            </Link>
          </div>
          <div className={styles.grid_item}>
            <Link to="/categories/womencloth">
              <div className={styles.overlay}></div>
              <img src={womencloth} alt="women clothes" />
              <p>Women Cloth</p>
            </Link>
          </div>
          <div className={styles.grid_item}>
            <Link to="/categories/electronics">
              <div className={styles.overlay}></div>
              <img src={electronics} alt="electronics" />
              <p>Electronics</p>
            </Link>
          </div>
          <div className={styles.grid_item}>
            <Link to="/categories/jewelery">
              <div className={styles.overlay}></div>
              <img src={jewelery} alt="jewelery" />
              <p>Jewelery</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageNavigation;
