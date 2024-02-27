import { HambergerMenu } from 'iconsax-react';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../Assets/logo3.webp';
import styles from './Nav.module.css';

const Nav: React.FC = () => {
  const [menuState, setMenuState] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

    if (menuState) {
      const menu = menuRef.current!;
      setTimeout(() => {
        menu.classList.toggle(styles.active);
      });
    }
  }, [menuState]);

  return (
    <Fragment>
      <div className={`${styles.navbar} grid`}>
        <div className={`${styles.logo} grid`}>
          <Link to='/' aria-label='Strona Główna'>
            <img src={logo} alt='Strony Internetowe Rzeszów' />
          </Link>
        </div>

        <div className={`${styles.nav} grid relative`}>
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
              <span>wyceń projekt</span>
            </div>
          </Link>
        </div>
      </div>

      <div className={`${styles['navbar-800']}`}>
        <div className={styles.logo}>
          <img
            src={logo}
            alt='Strony Internetowe Rzeszów'
            width={'126px'}
            height={'150px'}
          />
        </div>

        <div className={styles['ham-menu']}>
          {!menuState && <HambergerMenu size='40' onClick={menuHandler} />}
          {menuState && (
            <svg
              fill='#000000'
              height='30px'
              width='30px'
              viewBox='0 0 492 492'
              onClick={menuHandler}
            >
              <path
                d='M300.188,246L484.14,62.04c5.06-5.064,7.852-11.82,7.86-19.024c0-7.208-2.792-13.972-7.86-19.028L468.02,7.872
			c-5.068-5.076-11.824-7.856-19.036-7.856c-7.2,0-13.956,2.78-19.024,7.856L246.008,191.82L62.048,7.872
			c-5.06-5.076-11.82-7.856-19.028-7.856c-7.2,0-13.96,2.78-19.02,7.856L7.872,23.988c-10.496,10.496-10.496,27.568,0,38.052
			L191.828,246L7.872,429.952c-5.064,5.072-7.852,11.828-7.852,19.032c0,7.204,2.788,13.96,7.852,19.028l16.124,16.116
			c5.06,5.072,11.824,7.856,19.02,7.856c7.208,0,13.968-2.784,19.028-7.856l183.96-183.952l183.952,183.952
			c5.068,5.072,11.824,7.856,19.024,7.856h0.008c7.204,0,13.96-2.784,19.028-7.856l16.12-16.116
			c5.06-5.064,7.852-11.824,7.852-19.028c0-7.204-2.792-13.96-7.852-19.028L300.188,246z'
              />
            </svg>
          )}
        </div>
        {menuState && (
          <Fragment>
            <div className={`${styles.nav}`} ref={menuRef}>
              <div className={`${styles['link-container']}`}>
                <img
                  src={logo}
                  height='70px'
                  alt='Strony Internetowe Rzeszów'
                />
              </div>
              <div className={styles['link-container']}>
                <NavLink
                  to='/'
                  className={styles['nav-link']}
                  activeClassName={styles['active-nav-link']}
                  onClick={menuHandler}
                >
                  Strona główna
                </NavLink>
              </div>
              <div className={`${styles['link-container']} ${styles.second}`}>
                <NavLink
                  to='/projekty'
                  className={styles['nav-link']}
                  activeClassName={styles['active-nav-link']}
                  onClick={menuHandler}
                >
                  Projekty
                </NavLink>
              </div>
              <div className={`${styles['link-container']} ${styles.third}`}>
                <NavLink
                  to='/kontakt'
                  className={styles['nav-link']}
                  activeClassName={styles['active-nav-link']}
                  onClick={menuHandler}
                >
                  Kontakt
                </NavLink>
              </div>
              <div className={`${styles['link-container']} ${styles.forth}`}>
                <NavLink
                  to='/oferta'
                  className={styles['nav-link']}
                  activeClassName={styles['active-nav-link']}
                  onClick={menuHandler}
                >
                  Oferta
                </NavLink>
              </div>
              <div className={`${styles['link-container']} ${styles.fifth}`}>
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
                <div className={`${styles['right-button']}`}>
                  <Link to='/formularz-kontaktowy' onClick={menuHandler}>
                    wyceń projekt
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
