import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import styles from '../styles/Modal.module.css';

function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <AiOutlineClose
        className={styles.close_modal_btn}
        onClick={onClose}
        size={30}
      />

      <nav className={styles.modal}>
        <ul>
          <li>
            <Link to="/categories/all" onClick={onClose}>
              CATEGORIES
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={onClose}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={onClose}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Modal;
