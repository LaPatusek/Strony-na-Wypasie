import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.webp';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <div className={`${styles.navbar} grid`}>
      <div className={styles.logo}>
        <Link to='/main'>
          {/* <span className={styles['first-piece-logo']}>Strony </span>
          <br />
          <span className={styles['second-piece-logo']}> na wypasie</span> */}
          <img src={logo} alt='' width='100%' height=''/>
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
          <div className={styles['right-button']}>
            <span> wyceń projekt </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
