import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo3.webp';
import styles from './PageNotFound.module.css';

const PageNotFound = () => {
  return (
    <div className={`${styles.wrap} grid`}>
      <Helmet>
        <link rel='canonical' href='https://www.stronynawypasie.pl/' />
      </Helmet>
      <div className={`${styles['page-not-found']} grid`}>
        <img src={logo} alt='Strony Internetowe' />
        <div className={styles['text-section']}>
          <h1>Strony na wypasie</h1>
          <h2>
            Strony nie znaleziono (
            <span className={styles['error-code']}>404</span>)
          </h2>
          <div className={styles.buttons}>
            <div className={`${styles.link} grid`}>
              <Link to='/main'>Strona główna</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
