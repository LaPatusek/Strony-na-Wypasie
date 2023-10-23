import {
  ArrowRight3,
  Call,
  Copyright,
  Facebook,
  Location,
} from 'iconsax-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = (props) => {
  const pickIndexFunction = (index) => {
    props.PassFunction(index);
  };

  return (
    <div className={styles.footer}>
      <div className={`${styles['upper-footer']} grid`}>
        <div className={styles.kontakt}>
          <h3>Kontakt</h3>
          <div className={`${styles.container} flex`}>
            <div className={styles['pin-container']}>
              <Location variant='Bold' size='26px' />
            </div>
            <p>
              Strony Na Wypasie
              <br /> Selenbit Eryk Trojanowski
              <br /> Jawornik 114A <br />
              38-114 Niebylec
            </p>
          </div>
          <div className={`${styles.container} flex`}>
            <Call variant='Bold' size='26px' /> <p> +48 531 771 944</p>
          </div>
          <div className={`${styles.container} flex`}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              fill='white'
              viewBox='0 0 512 512'
            >
              <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
            </svg>
            <a href='mailto:kontakt@stronynawypasie.pl'>
              kontakt@stronynawypasie.pl
            </a>
          </div>
        </div>

        <div className={styles.strony}>
          <h3> Strony </h3>
          <ul>
            <li>
              <Link to='/main'>
                <ArrowRight3 variant='Broken' size='20' /> Strona główna{' '}
                <svg
                  viewBox='0 0 13 10'
                  height='10px'
                  width='15px'
                  className={styles['arrow-on-hover']}
                >
                  <path d='M1,5 L11,5'></path>
                  <polyline points='8 1 12 5 8 9'></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to='/oferta'>
                <ArrowRight3 variant='Broken' size='20' /> Oferta{' '}
                <svg
                  viewBox='0 0 13 10'
                  height='10px'
                  width='15px'
                  className={styles['arrow-on-hover']}
                >
                  <path d='M1,5 L11,5'></path>
                  <polyline points='8 1 12 5 8 9'></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to='/projekty'>
                <ArrowRight3 variant='Broken' size='20' /> Projekty{' '}
                <svg
                  viewBox='0 0 13 10'
                  height='10px'
                  width='15px'
                  className={styles['arrow-on-hover']}
                >
                  <path d='M1,5 L11,5'></path>
                  <polyline points='8 1 12 5 8 9'></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to='/o-nas'>
                <ArrowRight3 variant='Broken' size='20' /> O nas{' '}
                <svg
                  viewBox='0 0 13 10'
                  height='10px'
                  width='15px'
                  className={styles['arrow-on-hover']}
                >
                  <path d='M1,5 L11,5'></path>
                  <polyline points='8 1 12 5 8 9'></polyline>
                </svg>
              </Link>
            </li>
            <li>
              <Link to='/kontakt'>
                <ArrowRight3 variant='Broken' size='20' /> Kontakt{' '}
                <svg
                  viewBox='0 0 13 10'
                  height='10px'
                  width='15px'
                  className={styles['arrow-on-hover']}
                >
                  <path d='M1,5 L11,5'></path>
                  <polyline points='8 1 12 5 8 9'></polyline>
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.faq}>
          <h3>FAQ </h3>
          <ul>
            <li>
              <Link to='/oferta#faq' onClick={() => pickIndexFunction(0)}>
                <ArrowRight3 variant='Broken' size='22' />
                Co to jest hosting?
              </Link>
            </li>
            <li>
              <Link to='/oferta#faq' onClick={() => pickIndexFunction(1)}>
                <ArrowRight3 variant='Broken' size='22' />
                Na czym polega utrzymanie strony?
              </Link>
            </li>
            <li>
              <Link to='/oferta#faq' onClick={() => pickIndexFunction(2)}>
                <ArrowRight3 variant='Broken' size='22' />
                Czym jest domena?
              </Link>
            </li>
            <li>
              <Link to='/oferta#faq' onClick={() => pickIndexFunction(3)}>
                <ArrowRight3 variant='Broken' size='22' />
                Ile kosztuje utrzymanie strony?
              </Link>
            </li>

            <li>
              <Link to='/regulamin'>
                <ArrowRight3 variant='Broken' size='22' />
                Regulamin{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className={styles.book}
                  width='22px'
                  height='22px'
                  viewBox='0 0 512 512'
                >
                  <path d='M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 00-17.92 5.33A32 32 0 0016 79.9V366c0 19.34 13.76 33.93 32 33.93 71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 006.94-3V106.82a15.89 15.89 0 00-5.46-12A143 143 0 00202.24 74zM481.92 53.3A31.33 31.33 0 00464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 00-32.31 20.78 15.93 15.93 0 00-5.45 12v337.13a3.93 3.93 0 006.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0032-32v-288a32 32 0 00-14.12-26.61z' />
                </svg>
              </Link>
            </li>
          </ul>
        </div>

        <div className={`${styles.socials} font-center`}>
          <h3>Social media</h3>
          <a
            href='https://www.facebook.com/ErykTrojanowski'
            target='_blank'
            rel='noreferrer'
            className={styles.Facebook}
            aria-label='FaceBook'
          >
            <Facebook size='32' />
          </a>
          <a
            href='https://www.linkedin.com/in/eryk-trojanowski-7678ab120/'
            target='_blank'
            rel='noreferrer'
            className={styles.Linkedin}
            aria-label='Linkedin'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32px'
              height='32px'
              viewBox='0 0 512 512'
            >
              <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />
            </svg>
          </a>
        </div>
      </div>
      <hr />
      <div className={styles['down-footer']}>
        <div className={styles.copyright}>
          <Copyright size='18' className={styles.icon} /> StronyNaWypasie 2023.
          Wszystkie prawa zastrzeżone.{' '}
          <Link to='/polityka-prywatnosci'> Polityka prywatności </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
