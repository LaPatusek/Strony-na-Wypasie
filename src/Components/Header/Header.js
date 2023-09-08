import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import laptop from '../../Assets/Laptop.mp4';
import minature from '../../Assets/LaptopMiniaturka.webp';
import styles from './Header.module.css';

const Header = () => {
  const videoRef = useRef();
  useEffect(() => {
    const video = videoRef?.current;

    const handleCanPlayThrough = () => {
      video.preload = 'auto';
    };

    video.addEventListener('canplaythrough', handleCanPlayThrough);

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
    };
  }, []);

  return (
    <div className={`${styles.header} grid font-center`}>
      <video
        ref={videoRef}
        src={laptop}
        poster={minature}
        muted
        loop
        autoPlay
      />
      <h1>
        Tworzymy strony, <br /> które przyciągają wzrok <br /> i przyciągają
        klientów
      </h1>
      <Link to='/kontakt'>Skontaktuj się z nami</Link>
    </div>
  );
};

export default Header;
