import { Call, Location } from 'iconsax-react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/UI/Card';
import styles from './Kontakt.module.css';

const Kontakt = () => {
  const formHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className={styles.title}>
        <h2>Kontakt</h2>
        <section className={`${styles['first-section']} grid`}>
          <div className={styles.container}>
            <Location variant='Bold' size='40px' /> <h3>Adres</h3>
            <p>
              Strony Na Wypasie
              <br /> Selenbit Eryk Trojanowski
              <br /> Jawornik 114A <br />
              38-114 Niebylec
            </p>
          </div>
          <div className={styles.container}>
            <Call variant='Bold' size='40px' /> <h3>Telefon</h3>{' '}
            <p> +48 531 771 944</p>
          </div>
          <div className={styles.container}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='40'
              height='40'
              fill='white'
              viewBox='0 0 512 512'
            >
              <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
            </svg>
            <p>
              <h3>eMail</h3>
              <a href='mailto:stronynawypasie@gmail.com'>
                stronynawypasie@gmail.com
              </a>
            </p>
            <p>
              <a href='mailto:eryktrojanowski@gmail.com'>
                eryktrojanowski@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
      <Card>
        <div className={`${styles.kontakt} grid`}>
          <section className={styles['left-section']}>
            <h3>Skontaktuj się z nami!</h3>
            <h4>
              Chcesz aby Twoja strona internetowa była naprawdę efektywna?
              Zapraszamy do kontaktu, napisz czego potrzebujesz! My zajmiemy się
              resztą. Prośby o wycenę prosimy kierować{' '}
              <Link to='/wycena'>Tutaj</Link>
            </h4>
          </section>

          <section className={styles['right-section']}>
            <h4>Formularz kontaktowy</h4>
            <form onSubmit={formHandler}>
              <div className={styles.group}>
                <input
                  required='Imie i nazwisko'
                  type='text'
                  className={styles.input}
                />
                <span className={styles.bar}></span>
                <label>Imie i nazwisko </label>
              </div>

              <div className={styles.group}>
                <input
                  required='Adres email'
                  type='text'
                  className={styles.input}
                />
                <span className={styles.bar}></span>
                <label>Adres email </label>
              </div>

              <div className={styles.group}>
                <input required='Temat' type='text' className={styles.input} />
                <span className={styles.bar}></span>
                <label>Temat</label>
              </div>

              <div className={styles.group}>
                <textarea
                  required='Twoja wiadomość'
                  className={styles.input}
                  rows='6'
                />
                <span className={styles.bar}></span>
                <label>Twoja wiadomość</label>
              </div>

              <div className={styles.buttons}>
                <button className={styles['reset-button']}>Reset</button>
                <button className={styles['submit-button']}>Wyślij</button>
              </div>
            </form>
          </section>
        </div>
      </Card>
    </Fragment>
  );
};

export default Kontakt;
