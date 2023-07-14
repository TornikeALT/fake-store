import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/ProductDetail.module.css';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchSingleItem = async function () {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) throw new Error('Product Not Found');
        const item = await response.json();
        setProduct(item);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchSingleItem();
  }, [productId]);

  const handleQtyInc = () => {
    setQuantity(prev => prev + 1);
  };

  const handleQtyDec = () => {
    if (quantity === 1) return;
    else {
      setQuantity(prev => prev - 1);
    }
  };
  return (
    <>
      {isLoading && <p style={{ textAlign: 'center' }}>Items is loading...</p>}
      {fetchError && (
        <p style={{ textAlign: 'center', color: 'red' }}>
          Item is not Found...
        </p>
      )}
      {!isLoading && !fetchError && (
        <div className={styles.container}>
          <div className={styles.details}>
            <div>
              <img
                src={product.image}
                alt={product.image}
                className={styles.details_img}
              />
            </div>
            <div className={styles.about_box}>
              <h1>{product.title}</h1>
              <span className={styles.price}> $ {product.price}</span>
              <span className={styles.about}>About This item</span>
              <p className={styles.about_description}>{product.description}</p>
              <div className={styles.select_qty}>
                <div>Quantity:</div>
                <div className={styles.qty}>{quantity}</div>
                <div className={styles.buttons}>
                  <div className={styles.increment} onClick={handleQtyInc}>
                    +
                  </div>

                  <div className={styles.decrement} onClick={handleQtyDec}>
                    -
                  </div>
                </div>

                <button className={styles.add_to_cart}>ADD TO CART</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
