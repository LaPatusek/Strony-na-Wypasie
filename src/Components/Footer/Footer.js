import {
  ArrowRight3,
  Call,
  Copyright,
  Facebook,
  Location,
} from 'iconsax-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['upper-footer']}>
        <div className={styles.kontakt}>
          <h3>Kontakt</h3>
          <div className={styles.container}>
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
          <div className={styles.container}>
            <Call variant='Bold' size='26px' /> <p> +48 531 771 944</p>
          </div>
          <div className={styles.container}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='26'
              height='26'
              fill='white'
              viewBox='0 0 512 512'
            >
              <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
            </svg>
            <a href='mailto:stronynawypasie@gmail.com'>
              stronynawypasie@gmail.com
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
              <Link to='/oferta#faq'>
                <ArrowRight3 variant='Broken' size='22' />
                Co to jest hosting?
              </Link>
            </li>
            <li>
              <Link to='/oferta#faq'>
                <ArrowRight3 variant='Broken' size='22' />
                Na czym polega utrzymanie strony?
              </Link>
            </li>
            <li>
              <Link to='/oferta#faq'>
                <ArrowRight3 variant='Broken' size='22' />
                Czym jest domena?
              </Link>
            </li>
            <li>
              <Link to='/oferta#faq'>
                <ArrowRight3 variant='Broken' size='22' />
                Ile kosztuje utrzymanie strony?
              </Link>
            </li>

            <li>
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
            </li>
          </ul>
        </div>

        <div className={styles.socials}>
          <h3>Social media</h3>
          <a href='asd' className={styles.Facebook}>
            <Facebook size='32' />
          </a>
          <a href='asd' className={styles.Linkedin}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32px'
              height='32px'
              viewBox='0 0 512 512'
            >
              <path d='M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z' />
            </svg>
          </a>
          <a href='asd' className={styles.Twitter}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32px'
              height='32px'
              viewBox='0 0 512 512'
            >
              <path d='M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z' />
            </svg>
          </a>
          <a href='insta' className={styles.Instagram}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='32px'
              height='32px'
              viewBox='0 0 512 512'
            >
              <path d='M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z' />
              <path d='M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z' />
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
