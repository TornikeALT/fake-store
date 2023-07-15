import styles from '../styles/Navigation.module.css';
import { BsCart4 } from 'react-icons/bs';
import fakelogo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <header>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Link to="/">
            <img src={fakelogo} alt="fakelogo" className={styles.fake_logo} />
          </Link>
          <div className={styles.nav_links}>
            <Link to="categories/all">CATEGORIES</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/cart">
              <div className={styles.cart}>
                <BsCart4 size={18} className={styles.cart_image} color="red" />
                <span>CART</span>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
