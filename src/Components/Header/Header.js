import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import styles from './Header.module.css';
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to='/main'>
          {/* <img src={logo} alt='logo' /> */}
          <span className={styles['first-piece-logo']}>Strony </span>
          <br /> <span className={styles['second-piece-logo']}> na wypasie</span>
        </Link>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
