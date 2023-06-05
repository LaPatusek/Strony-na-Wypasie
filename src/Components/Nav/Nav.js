import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={`${styles.navbar} grid`}>
      <div className={styles.logo}>
        <Link to='/main'>
          <span className={styles['first-piece-logo']}>Strony </span>
          <br />
          <span className={styles['second-piece-logo']}> na wypasie</span>
        </Link>
      </div>

      <div className={styles.nav}>
        <NavLink
          to='/oferta'
          className={styles['nav-link']}
          activeClassName={styles['active-nav-link']}
        >
          Oferta
        </NavLink>
        <NavLink
          to='/projekty'
          className={styles['nav-link']}
          activeClassName={styles['active-nav-link']}
        >
          Projekty
        </NavLink>
        <NavLink
          to='/o-nas'
          className={styles['nav-link']}
          activeClassName={styles['active-nav-link']}
        >
          O nas
        </NavLink>
        <NavLink
          to='/kontakt'
          className={styles['nav-link']}
          activeClassName={styles['active-nav-link']}
        >
          Kontakt
        </NavLink>
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
