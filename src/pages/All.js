import { useEffect, useState } from 'react';
import styles from './All.module.css';

function All() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json));
    console.log(data);
  }, []);

  return (
    <div className={styles.products}>
      {data.map(el => {
        return (
          <div key={el.id} className={styles.product}>
            <img src={el.image} alt={el.image} className={styles.product_img} />
            <p>{el.title}</p>
            <span>${el.price}</span>
          </div>
        );
      })}
    </div>
  );
}
export default All;
