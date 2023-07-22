import styles from '../styles/About.module.css';

function About() {
  return (
    <div>
      <div className={styles.container}>
        <h2>Get tired of Lorem ipsum data?!</h2>
        <h2>Didn't you find any free e-commerce API?!</h2>
        <p>
          fakeStoreApi is a free online REST API that you can use whenever you
          need Pseudo-real data for your e-commerce or shopping website without
          running any server-side code. It's awesome for teaching purposes,
          sample codes, tests, etc.
        </p>
      </div>
    </div>
  );
}

export default About;
