import { Fragment, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import stonks from '../Assets/TrendUp-Bulk.svg';
import codingImg from '../Assets/coding.webp';
import dev from '../Assets/software-developer.webp';
import Header from '../Components/Header/Header';
import hexagones from '../Components/JSON/hexagones.json';
import styles from './Main.module.css';

const Main = () => {
  const hexRef = useRef([]);
  const [hexActive, setHexActive] = useState(null);
  const [hexHelper, setHexHelper] = useState(false);

  const hexagonFunction = (nr) => (e) => {
    const hex = hexRef.current[nr];
    hex.classList.toggle(styles.active);

    setHexActive(nr);
    setHexHelper((s) => !s);

    if (hexHelper) setHexActive(0);
  };

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
          <div className={styles['offer-section-left']}>
            <img src={dev} alt='' width='100%' height='100%'/>
            <h3>
              Tworzymy <span> skuteczne </span> strony{' '}
            </h3>
          </div>
          <div className={styles['offer-section-right']}>
            <div className={styles['seo-title']}>
              <img src={stonks} alt='' width='66px'/>
              <h3>
                Tworzymy strony <br /> zgodnie z SEO
              </h3>
              <hr />
              <h4>
                Poprawimy widoczność Twojej strony w wyniakch wyszukiwania!
              </h4>
            </div>

            <div className={`${styles['seo-hexagones']} grid`}>
              <div className={styles['three-hexagones']}>
                {hexagones.hexagones.FirstRow.map((hex) => {
                  let klucz = hex.id;
                  let styleId = 'hex' + [hex.nr];
                  return (
                    <div
                      className={`${styles.hexagon} ${styles[styleId]}`}
                      onClick={hexagonFunction(hex.nr)}
                      key={klucz}
                      ref={(el) => (hexRef.current[hex.nr] = el)}
                    >
                      {hexActive !== hex.nr && (
                        <div className={styles['hexagon-icon']}>
                          <img
                            src={hex.icon}
                            alt=''
                            width='50px'
                            height='50px'
                          />
                        </div>
                      )}
                      {hexActive === hex.nr && (
                        <div className={styles['hexagon-text']}>
                          {hex.tekst}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className={styles['two-hexagones']}>
                {hexagones.hexagones.SecondRow.map((hex) => {
                  let klucz = hex.id;
                  let styleId = 'hex' + [hex.nr];
                  return (
                    <div
                      className={`${styles.hexagon} ${styles[styleId]}`}
                      onClick={hexagonFunction(hex.nr)}
                      key={klucz}
                      ref={(el) => (hexRef.current[hex.nr] = el)}
                    >
                      {hexActive !== hex.nr && (
                        <div className={styles['hexagon-icon']}>
                          <img
                            src={hex.icon}
                            alt=''
                            width='50px'
                            height='50px'
                          />
                        </div>
                      )}
                      {hexActive === hex.nr && (
                        <div className={styles['hexagon-text']}>
                          {hex.tekst}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
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
