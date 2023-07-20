import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.footer_list}>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Store Locator</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Terms & Conditions</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <h3 className={styles.tornike}>Designed by Tornike Altunashvili</h3>
      </div>
    </>
  );
}

export default Footer;
