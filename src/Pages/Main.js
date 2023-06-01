import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import codingImg from '../Assets/coding.jpg';
import Header from '../Components/Header/Header';
import styles from './Main.module.css';

const Main = () => {
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
                <h4>Oferta</h4>
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

        <section className={`${styles['offer-section']} grid`}>
          <div></div>
          {/* Przykładowa strona */}
          <div></div>
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
