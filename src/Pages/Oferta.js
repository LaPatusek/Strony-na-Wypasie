import { Link21, Milk, PresentionChart } from 'iconsax-react';
import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import bronzeCow from '../Assets/cow-bronze.webp';
import colorCow from '../Assets/cow-colors.webp';
import goldCow from '../Assets/cow-gold.webp';
import silverCow from '../Assets/cow-silver.webp';
import seoIcon from '../Assets/seo-icon.webp';
import targetIcon from '../Assets/target-icon.webp';
import Faquestions from '../Components/FAQ/Faquestions';
import styles from './Oferta.module.css';

const offerOptions = [
  {
    src: bronzeCow,
    title: 'Mała krówka',
    option: 'Opcja ekonomiczna',
    price: 1000,
    opis: ['Do 4 podstron', 'Poprawki w cenie', 'Hosting 6 miesięcy'],
    circlePosition: 'left-circle-shape',
    link: 'https://buy.stripe.com/dR6fZvbFw2jYciAfYY',
  },
  {
    src: silverCow,
    title: 'Dobra krowa',
    option: 'Opcja rekomendowana',
    price: 2500,
    opis: [
      'Do 6 podstron',
      'Poprawki w cenie',
      'Roczny hosting',
      'Logo w cenie',
    ],
    circlePosition: 'left-circle-shape',
    link: 'https://buy.stripe.com/aEUbJf6lc7Ei82kfYZ',
  },
  {
    src: goldCow,
    title: 'Byk na wypasie',
    option: 'Opcja premium',
    price: 4500,
    opis: [
      'Do 10 podstron',
      'Poprawki w cenie',
      'Dwuletni hosting',
      'Logo w cenie',
      'Spersonalizowane grafiki',
    ],
    circlePosition: 'right-circle-shape',
    link: 'https://buy.stripe.com/3cs5kReRI5wa3M4eUW',
  },
];

const Oferta = (props) => {
  const iconSize = 76;
  const milkSize = 20;

  return (
    <Fragment>
      <Helmet>
        <link rel='canonical' href='https://www.stronynawypasie.pl/#/oferta' />
      </Helmet>
      <div className={styles.title}>
        <h1>Tworzymy aplikację frontend</h1>
        <h2>
          Tworzenie aplikacji frontend polega na projektowaniu, implementacji i
          utrzymaniu interfejsu użytkownika dla oprogramowania działającego na
          stronach internetowych lub urządzeniach mobilnych. Aplikacje frontend
          są responsywne, dostosowując się do różnych urządzeń.
        </h2>
      </div>
      <section className={styles['offer-section']} id='pakiety'>
        <h2>Oferowane pakiety</h2>
        <div className={`${styles['offer-wrap']} grid`}>
          {offerOptions.map((option) => {
            const circleClass = option.circlePosition;
            return (
              <div className={styles['offer-box']} key={option.title}>
                <img
                  src={option.src}
                  alt={option.option}
                  width='64px'
                  height='64px'
                />
                <h3>{option.title}</h3>
                <h4>{option.option}</h4>
                <h5>{option.price} PLN</h5>
                <ol>
                  {option.opis.map((liniaOpisu) => {
                    let id =
                      liniaOpisu + 'id' + Math.random().toString(16).slice(2);

                    return (
                      <li key={id}>
                        <Milk
                          size={milkSize}
                          color='#1a1a1a'
                          variant='TwoTone'
                        />{' '}
                        {liniaOpisu}
                      </li>
                    );
                  })}
                </ol>

                <div>
                  <a href={option.link} target='_blank' rel='noreferrer'>
                    Zamów
                  </a>
                </div>

                <div
                  className={`${styles['blur-circle-shape']} ${styles[circleClass]}`}
                />
              </div>
            );
          })}
          <div className={styles['offer-box']}>
            <img
              src={colorCow}
              alt='Opcja niestandardowa'
              width='64px'
              height='64px'
            />
            <h3>Wypasiona</h3>
            <h4>Opcja spersonalizowana</h4>
            <p>
              Kompletnie spersonalizowana strona, która usatysfakcjonuje każdego
              klienta!
            </p>
            <Link to='/formularz-kontaktowy'>Wyceń projekt</Link>
            <div
              className={`${styles['blur-circle-shape']} ${styles['right-circle-shape']}`}
            />
          </div>
        </div>
      </section>
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
              className={`${styles['timeline-circle']} ${styles['timeline-circle-800']} ${styles['second-circle-800']}`}
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
              className={`${styles['timeline-circle']} ${styles['timeline-circle-800']} ${styles['forth-circle-800']}`}
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
          <img
            src={targetIcon}
            width={iconSize}
            height={iconSize}
            alt='Sprawdzone metody'
          />
        </div>

        <div className={styles['seo-container']}>
          <div className={styles['tekst-seo']}>
            <h4>SEO</h4>
            <p>Poprawimy widoczność Twojej strony w wyniakch wyszukiwania</p>
          </div>
          <img src={seoIcon} width={iconSize} height={iconSize} alt='SEO' />
        </div>
      </section>
      <Faquestions id='faq' forwardMessage={props.message} />
    </Fragment>
  );
};

export default Oferta;
