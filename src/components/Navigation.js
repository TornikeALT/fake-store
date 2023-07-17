import styles from '../styles/Navigation.module.css';
import { BsCart4 } from 'react-icons/bs';
import fakelogo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cart-context';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Modal from './Modal';

function Navigation() {
  const { items } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => {
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
  };

  const calculateTotalItems = () => {
    let total = 0;
    items.forEach(item => {
      return (total += item.quantity);
    });

    return total;
  };

  return (
    <header>
      <div className={styles.container}>
        <nav className={styles.navigation}>
          <Link to="/">
            <img src={fakelogo} alt="fakelogo" className={styles.fake_logo} />
          </Link>
          <div className={styles.nav_links_box}>
            <div className={styles.nav_links}>
              <Link to="categories/all">CATEGORIES</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/contact">CONTACT</Link>
            </div>

            <Link to="/cart">
              <div className={styles.cart}>
                <BsCart4
                  size={30}
                  className={styles.cart_image}
                  color="black"
                />

                {items.length > 0 && (
                  <span className={styles.cart_badge}>
                    {calculateTotalItems()}
                  </span>
                )}
              </div>
            </Link>
            <div className={styles.hamburger}>
              <GiHamburgerMenu onClick={handleModalShow} size={30} />
            </div>
          </div>
        </nav>
      </div>
      {showModal && (
        <Modal
          onClose={handleModalClose}
          isOpen={showModal}
          onClick={handleModalShow}
        />
      )}
    </header>
  );
}

export default Navigation;
