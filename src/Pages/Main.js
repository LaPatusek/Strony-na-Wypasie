import { Fragment, useRef } from 'react';
import { Link } from 'react-router-dom';
import stonks from '../Assets/TrendUp-Bulk.svg';
import codingImg from '../Assets/coding.webp';
import Header from '../Components/Header/Header';
import useObserver from '../Components/hooks/useObserver';
import styles from './Main.module.css';

const Main = () => {
  const circleRef = useRef();

  const isVisible = useObserver(circleRef);

  return (
    <Fragment>
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
              <Link to='/oferta' className={styles['learn-more-button']}>
                <span className={styles.circle} aria-hidden='true'>
                  <span className={`${styles.icon} ${styles.arrow}`}></span>
                </span>
                <span className={styles['button-text']}>
                  Zobacz pełną ofertę
                </span>
              </Link>
            </div>
          </div>
          <div className={styles['right-main-offer']}>
            <div className={styles.background} />
            <div className={styles['offers-container']}>
              <div className={styles.container}>
                Icon
                <h4>MAŁA KRÓWKA</h4>
                <p>Krótki opis oferty</p>
              </div>
              <div className={styles.container}>
                Icon <h4>DOBRA KROWA</h4>
                <p>Krótki opis oferty</p>
              </div>
              <div className={styles.container}>
                Icon <h4>BYK NA WYPASIE</h4>
                <p>Krótki opis oferty</p>
              </div>
              <div className={styles.container}>
                Icon <h4>Oferta</h4>
                <p>Krótki opis oferty</p>
              </div>
              <div className={styles.container}>
                Icon <h4>Oferta</h4>
                <p>Krótki opis oferty</p>
              </div>
              <div className={styles.container}>
                Icon <h4>Oferta</h4>
                <p>Krótki opis oferty</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles['offer-section-right']}>
          <div className={styles['seo-title']}>
            <img src={stonks} alt='' width='66px' />
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
            <Link to='/oferta'>Zobacz więcej</Link>
          </div>
        </section>

        <section className={`${styles['o-nas']} grid`}>
          <img src={codingImg} alt='' width='100%' />
          <div className={styles.wrap}>
            <p>
              Jesteśmy młodym i kreatywnym zespołem programistów oraz grafików.
              Wierzymy, że dzięki współpracy stworzymy coś wartościowego.
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
