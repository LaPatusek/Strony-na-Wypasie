import { Fragment } from 'react';
import Faquestions from '../Components/FAQ/Faquestions';
import styles from './Oferta.module.css';

const Oferta = () => {
  //dodać opisy frontendu

  return (
    <Fragment>
      <h1>Oferta</h1>

      <section className={styles['design-section']}>
        <div className={`${styles.timeline} grid`}>
          <div className={styles['timeline-empty']} />

          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']} />
          </div>
          <div
            className={`${styles['timeline-component']} ${styles['timeline-content']}`}
          >
            <div className={styles.number}>
              <span> 01</span>
            </div>
            <div>
              <h3>Przygotowanie</h3>
              <p>Some Text</p>
            </div>
          </div>
          <div
            className={`${styles['timeline-component']} ${styles['timeline-content']} ${styles['right']}`}
          >
            <div>
              <h3>Projektowanie graficzne</h3>
              <p>Some Text.</p>
            </div>
            <div className={styles.number}>
              <span> 02</span>
            </div>
          </div>
          <div className={styles['timeline-middle']}>
            <div className={`${styles['timeline-circle']} ${styles['timeline-circle-800']}`} />
          </div>
          <div className={styles['timeline-empty']} />

          <div className={styles['timeline-empty']} />

          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']} />
          </div>
          <div
            className={`${styles['timeline-component']} ${styles['timeline-content']}`}
          >
            <div className={styles.number}>
              <span> 03</span>
            </div>
            <div>
              <h3>Development</h3>
              <p>Some Text.</p>
            </div>
          </div>
          <div
            className={`${styles['timeline-component']} ${styles['timeline-content']} ${styles['right']}`}
          >
            <div>
              <h3>Testy i optymalizacja</h3>
              <p>Some Text.</p>
            </div>
            <div className={styles.number}>
              <span> 04</span>
            </div>
          </div>
          <div className={styles['timeline-middle']}>
            <div  className={`${styles['timeline-circle']} ${styles['timeline-circle-800']}`} />
          </div>
          <div className={styles['timeline-empty']} />

          <div className={styles['timeline-empty']} />

          <div className={`${styles['timeline-middle']} ${styles['last-child']}`}>
            <div className={styles['timeline-circle']} />
          </div>
          <div
            className={`${styles['timeline-component']} ${styles['timeline-content']}`}
          >
            <div className={styles.number}>
              <span> 05</span>
            </div>
            <div>
              <h3>Publikacja</h3>
              <p>Some Text.</p>
            </div>
          </div>
        </div>
      </section>

      <Faquestions id='faq' />
    </Fragment>
  );
};

export default Oferta;
