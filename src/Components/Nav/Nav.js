import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={`${styles.navbar} grid`}>
      <div className={styles.logo}>
        <Link to='/main'>
          {/* <img src={logo} alt='logo' /> */}
          <span className={styles['first-piece-logo']}>Strony </span>
          <br /> <span className={styles['second-piece-logo']}> na wypasie</span>
        </Link>
      </div>

      <div className={styles.nav}>
        <NavLink to='/main'>Strona główna</NavLink>
        <NavLink to='/oferta'>Oferta</NavLink>
        <NavLink to='/projekty'>Projekty</NavLink>
        <NavLink to='/o-nas'>O nas</NavLink>
        <NavLink to='/kontakt'>Kontakt</NavLink>
      </div>
      <div>
        <Link to='/formularz-kontaktowy'>
          <div className={styles['right-button']}>wyceń projekt</div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
