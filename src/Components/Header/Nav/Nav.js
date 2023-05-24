import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
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
        <div className={styles['right-button']}>wyceń projekt</div>
      </div>
    </Fragment>
  );
};

export default Nav;
