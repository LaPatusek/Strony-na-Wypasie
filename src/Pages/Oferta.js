import { Link21, PresentionChart } from 'iconsax-react';
import { Fragment } from 'react';
import seoIcon from '../Assets/seo-icon.webp';
import targetIcon from '../Assets/target-icon.webp';
import Faquestions from '../Components/FAQ/Faquestions';
import styles from './Oferta.module.css';

const Oferta = (props) => {
  
  const iconSize = 76;

  return (
    <Fragment>
      <div className={styles.title}>
        <h1>Tworzymy aplikację frontend</h1>
        <h2>
          Tworzenie aplikacji frontend polega na projektowaniu, implementacji i
          utrzymaniu interfejsu użytkownika dla oprogramowania działającego na
          stronach internetowych lub urządzeniach mobilnych. Aplikacje frontend
          są responsywne, dostosowując się do różnych urządzeń.
        </h2>
      </div>
      <div className={styles.heading}>
        <h3> Rozwój strony krok po kroku</h3>
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
      <section id='seo' className={styles.seo}>
        <h3>Tworzymy skuteczne strony</h3>
        <div className={styles['seo-container']}>
          <div className={styles['tekst-seo']}>
            <h4>Wydajność</h4>
            <p>
              Doskonalimy Twoją stronę, by działała efektywniej niż kiedykolwiek
            </p>
          </div>
          <PresentionChart variant='Bulk' size={iconSize} />
        </div>

        <div className={styles['seo-container']}>
          <div className={styles['tekst-seo']}>
            <h4>Ułatwienia dostępu</h4>
            <p>
              Implementujemy ułatwienia dostępu do Twojej aplikacji internetowej
            </p>
          </div>

          <Link21 size={iconSize} variant='Bold' />
        </div>

        <div className={styles['seo-container']}>
          <div className={styles['tekst-seo']}>
            <h4>Sprawdzone metody</h4>
            <p>
              Korzystamy z sprawdzonych metod, które zapewnią skuteczność Twojej
              strony
            </p>
          </div>
          <img src={targetIcon} width={iconSize} height={iconSize} alt='' />
        </div>

        <div className={styles['seo-container']}>
          <div className={styles['tekst-seo']}>
            <h4>SEO</h4>
            <p>Poprawimy widoczność Twojej strony w wyniakch wyszukiwania</p>
          </div>
          <img src={seoIcon} width={iconSize} height={iconSize} alt='' />
        </div>
      </section>

      <Faquestions id='faq' forwardMessage={props.message}/>
    </Fragment>
  );
};

export default Oferta;
