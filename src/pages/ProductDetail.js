import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

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

  return (
    <>
      {isLoading && <p style={{ textAlign: 'center' }}>Items is loading...</p>}
      {fetchError && (
        <p style={{ textAlign: 'center', color: 'red' }}>
          Item is not Found...
        </p>
      )}
      {!isLoading && !fetchError && (
        <div>
          <h1>Product Details</h1>
          <p>{productId}</p>
          <img src={product.image} alt="" />
        </div>
      )}
    </>
  );
}

export default ProductDetail;
