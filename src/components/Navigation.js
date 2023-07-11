import styles from '../styles/Navigation.module.css';
import { BsCart4 } from 'react-icons/bs';
import fakelogo from '../images/logo.png';

function Navigation() {
  return (
    <header>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <a href="/">
            <img src={fakelogo} alt="fakelogo" className={styles.fake_logo} />
          </a>
          <div className={styles.nav_links}>
            <a href="/">CATEGORIES</a>
            <a href="/about">ABOUT</a>
            <a href="/contact">CONTACT</a>
            <div className={styles.cart}>
              <BsCart4 size={18} className={styles.cart_image} color="red" />
              <span>CART</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
