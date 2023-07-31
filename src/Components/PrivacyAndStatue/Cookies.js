import { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Cookies.module.css';

const Cookies = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  const essentialCookies = () => {
    setCookiesAccepted(true);
  };

  const allCookies = () => {
    setCookiesAccepted(true);
  };

  useEffect(() => {
    const data = window.localStorage.getItem('COOKIES_STATE');
    if (data !== null) setCookiesAccepted(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      'COOKIES_STATE',
      JSON.stringify(cookiesAccepted),
    );
  }, [cookiesAccepted]);

  return (
    <Fragment>
      {!cookiesAccepted && (
        <div className={styles.cookies}>
          <h2>Polityka prywatności</h2>
          <p>
            Chcemy zagwarantować Ci, że Twoje dane osobowe są u nas bezpieczne,
            dlatego przed przeglądaniem naszej strony, prosimy o udzielenie
            zgody na przetwarzanie Twoich danych osobowych oraz akceptację
            plików cookies.
            <br /> Oto{' '}
            <Link to='polityka-prywatnosci'>nasza polityka prywatności.</Link>
          </p>
          <div className={styles.buttons}>
            <button onClick={essentialCookies}>
              Zaakceptuj tylko wymagane
            </button>
            <button onClick={allCookies}>Zaakceptuj wszystkie</button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Cookies;
