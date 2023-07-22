import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';
import macwithcart from '../images/mac&cart.jpg';
import Slider from '../components/Slider';
import keyboardwithcart from '../images/second-image.jpg';
import ImageNavigation from '../components/ImageNavigation';

function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <ImageNavigation />
        <div className={styles.banner}>
          <div className={styles.banner_text}>
            <h2>Save money. Live better</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              enim, itaque cupiditate ratione quam maiores adipisci illo.
            </p>
            <Link to="categories/all">
              <button className={styles.shop_btn}>SHOP NOW</button>
            </Link>
          </div>
          <div>
            <img src={macwithcart} alt="mac and cart" />
          </div>
        </div>
        <Slider />
        <div className={styles.second_banner}>
          <div className={styles.second_banner_text}>
            <h2>Shop smarter, not harder</h2>
            <p>
              Commerce will make you feel better. Commerce is better than
              chocolate. Make the world a better place with Commerce
            </p>
            <Link to="categories/all">
              <button className={styles.shop_btn}>SHOP NOW</button>
            </Link>
          </div>
          <div>
            <img src={keyboardwithcart} alt="keyboard with cart" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
