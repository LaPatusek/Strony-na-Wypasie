import { Link } from 'react-router-dom';
import laptop from '../../Assets/Laptop.mp4';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={`${styles.header} grid font-center`}>
      <video src={laptop} muted loop autoPlay/>
      <h1>
        Tworzymy strony, <br /> które przyciągają wzrok <br /> i przyciągają
        klientów
      </h1>
      <Link to='/kontakt'>Skontaktuj się z nami</Link>
    </div>
  );
};

export default Header;
