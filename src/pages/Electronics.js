import { useEffect, useState } from 'react';
import styles from '../styles/All.module.css';
import { useNavigate } from 'react-router-dom';

function Electronics() {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isloading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllItems = async function () {
      try {
        const response = await fetch(
          'https://fakestoreapi.com/products/category/electronics'
        );
        if (!response.ok) throw new Error('Something went Wrong!');
        const listItems = await response.json();

        setData(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllItems();
  }, []);

  return (
    <>
      <div className={styles.container}>
        {isloading && (
          <p style={{ textAlign: 'center' }}>Items are Loading ...</p>
        )}
        {fetchError && (
          <p
            style={{ color: 'red', textAlign: 'center' }}
          >{`Error: ${fetchError}`}</p>
        )}
        {!fetchError && !isloading && (
          <div className={styles.products}>
            {data.map(item => {
              return (
                <div
                  key={item.id}
                  className={styles.product}
                  onClick={() =>
                    navigate(`/categories/${item.category}/${item.id}`)
                  }
                >
                  <img
                    src={item.image}
                    alt={item.image}
                    className={styles.product_img}
                  />

                  <p>{item.title}</p>
                  <span>${item.price}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
export default Electronics;
