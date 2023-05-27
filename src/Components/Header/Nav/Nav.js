import { Fragment } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Nav.module.css';

const Nav = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};

export default Nav;
