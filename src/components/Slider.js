import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BsCaretLeftSquareFill,
  BsFillCaretRightSquareFill,
} from 'react-icons/bs';
import styles from '../styles/Slider.module.css';

function Slider() {
  const [slide, setSlide] = useState(0);
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllItems = async function () {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
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

  const handleNextSlide = () => {
    setSlide(prev => (prev + 1) % data.length);
  };

  const handlePrevSlide = () => {
    setSlide(prev => (prev - 1 + data.length) % data.length);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (fetchError) {
    return <div>Error: {fetchError}</div>;
  }

  return (
    <div className={styles.overflow}>
      <div className={styles.trending}>
        <h2>TRENDING NOW</h2>
        <div className={styles.arrows}>
          <BsCaretLeftSquareFill
            onClick={handleNextSlide}
            size={30}
            color="gray"
          />
          <BsFillCaretRightSquareFill
            onClick={handlePrevSlide}
            size={30}
            color="gray"
          />
        </div>
      </div>

      <div className={styles.slider_container}>
        <div
          className={styles.slides_wrapper}
          style={{
            width: `${data.length * 14.5}%`,
            transform: `translateX(-${slide * (100 / data.length)}%)`,
          }}
        >
          {data.map((slide, index) => (
            <div
              key={index}
              className={styles.slide}
              onClick={() =>
                navigate(`/categories/${slide.category}/${slide.id}`)
              }
            >
              <p>{slide.title}</p>
              <img
                src={slide.image}
                alt={slide.title}
                className={styles.slide_image}
              />
              <span>$ {slide.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
