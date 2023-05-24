import { ArrowRight3, Copyright } from 'iconsax-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles['upper-footer']}>
        <div className={styles.strony}>
          <h3> Strony </h3>
          <Link to='/main'>Strona główna</Link>
          <Link to='/oferta'>Oferta</Link>
          <Link to='/projekty'>Projekty</Link>
          <Link to='/o-nas'>O nas</Link>
          <Link to='/kontakt'>Kontakt</Link>
        </div>

        <div className={styles.faq}>
          <h3>FAQ </h3>
          <ul>
            <li><ArrowRight3 variant='Broken' size='22'/>Co to jest hosting?</li>
            <li><ArrowRight3 variant='Broken' size='22'/>Na czym polega utrzymanie strony?</li>
            <li><ArrowRight3 variant='Broken' size='22'/>Czym jest domena?</li>
            <li><ArrowRight3 variant='Broken' size='22'/>Regulamin</li>
          </ul>
        </div>

        <div>
          <h3>Social media</h3>
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
