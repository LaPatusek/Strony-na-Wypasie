import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <div className={`${styles.header} relative grid font-center`}>
      <video
        poster={'video/LaptopMiniaturka.webp'}
        muted
        loop
        autoPlay
        preload='auto'
      >
        <source src={'video/Laptop.mp4'} type='video/mp4' />
        <source src={'video/Laptop.webm'} type='video/webm' />
        Your browser does not support the video tag.
      </video>
      <h1>
        Tworzymy strony, <br /> które przyciągają wzrok <br /> i przyciągają
        klientów
      </h1>
      <Link to='/kontakt'>Skontaktuj się z nami</Link>
    </div>
  );
};

export default Header;
