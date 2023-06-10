import { HambergerMenu } from 'iconsax-react';
import { Fragment, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo.webp';
import styles from './Nav.module.css';

const Nav = () => {
  const [menuState, setMenuState] = useState(false);

  const menuHandler = () => {
    setMenuState((s) => !s);
  };

  useEffect(() => {
    if (menuState) {
      document.body.style.overflowY = 'hidden';
    }
    if (!menuState) {
      document.body.style.overflowY = 'scroll';
    }
  }, [menuState]);

  return (
    <Fragment>
      <div className={`${styles.navbar} grid`}>
        <div className={styles.logo}>
          <Link to='/main'>
            <img src={logo} alt='' width='100%' height='' />
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

      <div className={`${styles['navbar-800']}`}>
        <div className={styles.logo}>
          <img src={logo} alt='' width='100%' height='' />
        </div>

        <div className={styles['ham-menu']}>
          <HambergerMenu size='40' onClick={menuHandler} />
        </div>
        {menuState && (
          <Fragment>
            <div className={`${styles.nav}`}>
            <div className={styles['link-container']} />
              <div className={styles['link-container']}>
                <NavLink
                  to='/main'
                  className={styles['nav-link']}
                  activeClassName={styles['active-nav-link']}
                  onClick={menuHandler}
                >
                  Strona główna
                </NavLink>
              </div>
              <div className={styles['link-container']}>
                <NavLink
                  to='/oferta'
                  className={styles['nav-link']}
                  activeClassName={styles['active-nav-link']}
                  onClick={menuHandler}
                >
                  Oferta
                </NavLink>
              </div>
              <div className={styles['link-container']}>
                <NavLink
                  to='/projekty'
                  className={styles['nav-link']}
                  activeClassName={styles['active-nav-link']}
                  onClick={menuHandler}
                >
                  Projekty
                </NavLink>
              </div>
              <div className={styles['link-container']}>
                <NavLink
                  to='/o-nas'
                  className={styles['nav-link']}
                  activeClassName={styles['active-nav-link']}
                  onClick={menuHandler}
                >
                  O nas
                </NavLink>
              </div>
              <div className={styles['link-container']}>
                <NavLink
                  to='/kontakt'
                  className={styles['nav-link']}
                  activeClassName={styles['active-nav-link']}
                  onClick={menuHandler}
                >
                  Kontakt
                </NavLink>
              </div>
              <div className={styles['link-container']}>
                <div className={`${styles['right-button']}`}>
                  <Link to='/formularz-kontaktowy' onClick={menuHandler}>
                    <span> wyceń projekt </span>
                  </Link>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};

export default Nav;
