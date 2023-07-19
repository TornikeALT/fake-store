import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css';
import macwithcart from '../images/mac&cart.jpg';
import Slider from '../components/Slider';

function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.banner_text}>
          <h2>Shop smarter, not harder</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            enim, itaque cupiditate ratione quam maiores adipisci illo
            laudantium tempora, id libero deserunt perspiciatis dignissimos
            animi quidem? Neque quisquam illum dolorem?
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
    </div>
  );
}

export default HomePage;
