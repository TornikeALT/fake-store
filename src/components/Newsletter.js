import styles from '../styles/Newsletter.module.css';
function Newsletter() {
  return (
    <>
      <div className={styles.newsletter}>
        <div>
          <div>
            <h2>NEWSLETTER</h2>
          </div>
          <div>
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
