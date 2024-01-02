import { Milk } from 'iconsax-react';
import React, { Fragment, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import stonks from '../Assets/TrendUp-Bulk.svg';
import codingImg from '../Assets/coding.webp';
import bronzeCow from '../Assets/cow-bronze.webp';
import colorCow from '../Assets/cow-colors.webp';
import goldCow from '../Assets/cow-gold.webp';
import silverCow from '../Assets/cow-silver.webp';
import Header from '../Components/Header/Header';
import useObserver from '../Components/hooks/useObserver';
import styles from './Main.module.css';

const Main: React.FC = () => {
  const circleRef = useRef<HTMLDivElement>(null);
  const iconSize = 20;

  const isVisible = useObserver(circleRef);

  return (
    <Fragment>
      <Helmet>
        <link rel='canonical' href='https://www.stronynawypasie.pl/' />
        <meta name='robots' content='index, follow' />
      </Helmet>
      <Header />
      <div className={styles.main}>
        <section className={`${styles['main-offer']} grid`}>
          <div className={`${styles['left-main-offer']} grid`}>
            <h2>Co możemy dla Ciebie zrobić?</h2>
            <h3 className='font-center'>
              Stwórz z nami skuteczną stronę internetową <br /> z myślą o Tobie
              i o Twoim biznesie
            </h3>
            <div className={`${styles['button-container']} grid`}>
              <Link
                to='/oferta#pakiety'
                className={`${styles['learn-more-button']} relative`}
              >
                <span className={styles.circle} aria-hidden='true'>
                  <span className={`${styles.icon} ${styles.arrow}`}></span>
                </span>
                <span className={styles['button-text']}>
                  Zobacz pełną ofertę
                </span>
              </Link>
            </div>
          </div>
          <div className={`${styles['right-main-offer']} relative`}>
            <div className={`${styles['offers-container']} grid`}>
              <div className={styles.container}>
                <div className={`${styles['container-title']} grid`}>
                  <img
                    src={bronzeCow}
                    alt='Opcja ekonomiczna'
                    width='32px'
                    height='32px'
                  />
                  <h4>MAŁA KRÓWKA</h4>
                </div>

                <ol>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Do 4 podstron
                  </li>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Poprawki w cenie
                  </li>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Hosting 6 miesięcy
                  </li>
                </ol>
              </div>
              <div className={styles.container}>
                <div className={`${styles['container-title']} grid`}>
                  <img
                    src={silverCow}
                    alt='Opcja rekomendowana'
                    width='32px'
                    height='32px'
                  />
                  <h4>DOBRA KROWA</h4>
                </div>
                <ol>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Do 6 podstron
                  </li>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Poprawki w cenie
                  </li>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Roczny hosting
                  </li>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Logo w cenie
                  </li>
                </ol>
              </div>
              <div className={styles.container}>
                <div className={`${styles['container-title']} grid`}>
                  <img
                    src={goldCow}
                    alt='Opcja premium'
                    width='32px'
                    height='32px'
                  />
                  <h4>BYK NA WYPASIE</h4>
                </div>
                <ol>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Do 10 podstron
                  </li>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Poprawki w cenie
                  </li>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Dwuletni hosting
                  </li>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Logo w cenie
                  </li>
                  <li>
                    <Milk size={iconSize} color='#1a1a1a' variant='TwoTone' />{' '}
                    Personalizowane grafiki
                  </li>
                </ol>
              </div>
              <div className={styles.container}>
                <div className={`${styles['container-title']} grid`}>
                  <img
                    src={colorCow}
                    alt='Opcja niestandardowa'
                    width='32px'
                    height='32px'
                  />
                  <h4>wypasiona</h4>
                </div>
                <p>
                  Kompletnie spersonalizowana strona, która usatysfakcjonuje
                  każdego klienta!
                </p>
                <div className={styles['three-bottles-in-row']}>
                  <Milk size='30px' color='#1a1a1a' variant='TwoTone' />
                  <Milk size='30px' color='#1a1a1a' variant='TwoTone' />
                  <Milk size='30px' color='#1a1a1a' variant='TwoTone' />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['offer-section-right']}>
          <div className={`${styles['seo-title']} relative`}>
            <img src={stonks} alt='Skuteczne strony internetowe' width='66px' />
            <h3>Tworzymy skuteczne strony</h3>
            <hr />
            <h4>Zoptymalizujemy Twoją stronę pod każdym względem!</h4>
          </div>

          <div className={`${styles['speed-circles']} grid`} ref={circleRef}>
            <div
              className={`${styles['circle-container']} ${
                isVisible ? styles['active-circle'] : null
              } grid`}
            >
              <span
                className={`${styles.spin} ${styles['speed-circle']} 
                ${isVisible ? styles['active-spin'] : null}`}
              >
                <div className={styles.number} />
              </span>
              <h5>Wydajność</h5>
            </div>

            <div
              className={`${styles['circle-container']} ${
                isVisible ? styles['active-circle'] : null
              } grid`}
            >
              <span
                className={`${styles.spin} ${styles['speed-circle']} 
                ${isVisible ? styles['active-spin'] : null}`}
              >
                <div className={styles.number} />
              </span>
              <h5>
                Ułatwienia <br /> dostępu
              </h5>
            </div>

            <div
              className={`${styles['circle-container']} ${
                isVisible ? styles['active-circle'] : null
              } grid`}
            >
              <span
                className={`${styles.spin} ${styles['speed-circle']} 
                ${isVisible ? styles['active-spin'] : null}`}
              >
                <div className={styles.number} />
              </span>
              <h5>
                Sprawdzone <br /> metody
              </h5>
            </div>

            <div
              className={`${styles['circle-container']} ${
                isVisible ? styles['active-circle'] : null
              } grid`}
            >
              <span
                className={`${styles.spin} ${styles['speed-circle']} 
                ${isVisible ? styles['active-spin'] : null}`}
              >
                <div className={styles.number} />
              </span>
              <h5>SEO</h5>
            </div>
          </div>
          <div className={`${styles['seo-link']} grid`}>
            <Link to='/oferta#seo'>Zobacz więcej</Link>
          </div>
        </section>

        <section className={`${styles['o-nas']} grid`}>
          <img src={codingImg} alt='Strona internetowa' width='100%' />
          <div className={styles.wrap}>
            <h3>O nas</h3>
            <p>
              Jesteśmy młodym i kre&shy;atywnym zespołem programistów oraz
              grafików. Wierzymy, że dzięki współpracy stworzymy coś
              wartościowego.
              <br /> Razem możemy więcej!
            </p>
            <Link to='/o-nas'>Więcej o nas</Link>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Main;
