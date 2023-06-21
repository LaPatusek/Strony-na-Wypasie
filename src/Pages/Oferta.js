import { Fragment } from 'react';
import Faquestions from '../Components/FAQ/Faquestions';
import styles from './Oferta.module.css';

const Oferta = () => {
  return (
    <Fragment>
      <div className={styles.title}>
        <h2>Tworzymy aplikację frontend</h2>
        <h3>
          Tworzenie aplikacji frontend polega na projektowaniu, implementacji i
          utrzymaniu interfejsu użytkownika dla oprogramowania działającego na
          stronach internetowych lub urządzeniach mobilnych. Aplikacje frontend
          są responsywne, dostosowując się do różnych urządzeń.
        </h3>
      </div>
      <div className={styles.heading}>
        <h4> Rozwój strony krok po kroku</h4>
      </div>
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
              <p>
                Przygotowujemy materiały i organizujemy pracę w sposób staranny
                i efektywny, aby zapewnić płynny przebieg procesu tworzenia
                aplikacji frontend.
              </p>
            </div>
          </div>
          <div
            className={`${styles['timeline-component']} ${styles['timeline-content']} ${styles['right']}`}
          >
            <div>
              <h3>Projektowanie graficzne</h3>
              <p>
                Projektujemy grafikę w sposób atrakcyjny, zwracając uwagę na
                kompozycję, kolorystykę, typografię i układ elementów.
              </p>
            </div>
            <div className={styles.number}>
              <span> 02</span>
            </div>
          </div>
          <div className={styles['timeline-middle']}>
            <div
              className={`${styles['timeline-circle']} ${styles['timeline-circle-800']}`}
            />
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
              <p>
                Wdrażamy bezpieczną i wydajną aplikację frontend, dbając o
                zastosowanie odpowiednich protokołów i zabezpieczeń.
              </p>
            </div>
          </div>
          <div
            className={`${styles['timeline-component']} ${styles['timeline-content']} ${styles['right']}`}
          >
            <div>
              <h3>Testy i optymalizacja</h3>
              <p>
                Przegląd i testy wszystkich funkcji na różnych urządzeniach.
                Sprawdzamy jakość kodu, rozwiązujemy błędy, optymalizujemy
                działanie strony.
              </p>
            </div>
            <div className={styles.number}>
              <span> 04</span>
            </div>
          </div>
          <div className={styles['timeline-middle']}>
            <div
              className={`${styles['timeline-circle']} ${styles['timeline-circle-800']}`}
            />
          </div>
          <div className={styles['timeline-empty']} />

          <div className={styles['timeline-empty']} />

          <div
            className={`${styles['timeline-middle']} ${styles['last-child']}`}
          >
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
              <p>
                Zapewniamy użytkownikom dostęp do responsywnego intrefejsu
                użytkownika oraz implementujemy narzędzie analityczne.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Faquestions id='faq' />
    </Fragment>
  );
};

export default Oferta;
