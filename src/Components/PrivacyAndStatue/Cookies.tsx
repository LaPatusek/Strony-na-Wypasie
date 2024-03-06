import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styles from './Cookies.module.css';

const Cookies: React.FC = () => {
  const [cookiesAccepted, setCookiesAccepted] = useState<boolean>(false);

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
          <span>Pliki Cookies</span>
          <p>
            Nasza witryna wykorzystuje śledzące pliki cookie, aby zrozumieć, w
            jaki sposób z nią współdziałasz. Zostaną włączone tylko wtedy, gdy
            je zaakceptujesz.
            <br /> Oto{' '}
            <Link to='polityka-prywatnosci'>nasza polityka prywatności.</Link>
          </p>
          <div className={styles.buttons}>
            <button onClick={essentialCookies}>Zaakceptuj wymagane</button>
            <button onClick={allCookies}>Zaakceptuj wszystkie</button>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Cookies;
