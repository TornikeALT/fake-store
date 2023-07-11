import All from '../pages/All';
import styles from '../styles/Categories.module.css';

function Categories() {
  return (
    <div>
      <h2>Category Title</h2>
      <div className={styles.container}>
        <All />
      </div>
    </div>
  );
}

export default Categories;
