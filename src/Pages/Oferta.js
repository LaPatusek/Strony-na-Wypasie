import { Fragment } from 'react';
import styles from './Oferta.module.css';

const Oferta = () => {
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
            <h3>HTML</h3>
            <p>Some Text</p>
          </div>
          <div
            className={`${styles['timeline-component']} ${styles['timeline-content']}`}
          >
            <h3>CSS</h3>
            <p>Some Text.</p>
          </div>
          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']} />
          </div>
          <div className={styles['timeline-empty']} />

          <div className={styles['timeline-empty']} />

          <div className={styles['timeline-middle']}>
            <div className={styles['timeline-circle']} />
          </div>
          <div
            className={`${styles['timeline-component']} ${styles['timeline-content']}`}
          >
            <h3>Javascript</h3>
            <p>Some Text.</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Oferta;
