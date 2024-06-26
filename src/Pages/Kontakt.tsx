import emailjs from '@emailjs/browser';
import { Call, Location, TickCircle } from 'iconsax-react';
import React, { Fragment, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import background from '../Assets/ContactBackground.webp';
import Card from '../Components/UI/Card';
import useInput from '../Components/hooks/useInput';
import styles from './Kontakt.module.css';

declare var process: {
  env: {
    REACT_APP_SMTP_ID: string;
    REACT_APP_TEMPLATE_ID: string;
    REACT_APP_PUBLIC_KEY: string;
  };
};

const Kontakt: React.FC = () => {
  const [formIsSent, setFormIsSent] = useState<boolean>(false);
  const formRef = useRef(null);

  const {
    value: enteredName,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredTopic,
    isValid: topicIsValid,
    valueChangeHandler: topicChangeHandler,
    inputBlurHandler: topicBlurHandler,
    hasError: topicHasError,
    reset: topicReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  const {
    value: enteredMail,
    isValid: mailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    hasError: mailHasError,
    reset: mailReset,
  } = useInput({
    validateValue: (value: string) => value.trim().includes('@'),
  });

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    hasError: messageHasError,
    reset: messageReset,
  } = useInput({
    validateValue: (value: string) => value.trim() !== '',
  });

  let formIsValid = false;

  if (messageIsValid && topicIsValid && nameIsValid && mailIsValid) {
    formIsValid = true;
  }

  const formHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SMTP_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current!,
        process.env.REACT_APP_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );

    setFormIsSent(true);
    nameReset();
    topicReset();
    mailReset();
    messageReset();
  };

  const resetHandler = (e: React.FormEvent) => {
    e.preventDefault();

    nameReset();
    topicReset();
    mailReset();
    messageReset();
  };

  return (
    <Fragment>
      <Helmet>
        <link rel='canonical' href='https://www.stronynawypasie.pl/kontakt' />
      </Helmet>
      <div className={`${styles.title} relative`}>
        <h1>Kontakt</h1>
        <img
            src={background}
            className={styles.background}
            alt='Strony Internetowe Rzeszów - Kontakt'
            height={'100%'}
            width={'100%'}
          />
        <section className={`${styles['first-section']} grid font-center`}>
          <div className={styles.container}>
            <div className={`${styles['label-wrap']} grid`}>
              <Location variant='Bold' size='40px' /> <span>Adres</span>
            </div>
            <p>
              Strony Na Wypasie
              <br /> Selenbit Eryk Trojanowski
              <br /> Jawornik 114A <br />
              38-114 Niebylec
            </p>
          </div>
          <div className={styles.container}>
            <div className={`${styles['label-wrap']} grid`}>
              <Call variant='Bold' size='40px' /> <span>Telefon</span>
            </div>
            <p> +48 531 771 944</p>
          </div>
          <div className={styles.container}>
            <div className={`${styles['label-wrap']} grid`}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                fill='white'
                viewBox='0 0 512 512'
              >
                <path d='M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z' />
              </svg>
              <span>Email</span>
            </div>
            <p>
              <a href='mailto:kontakt@stronynawypasie.pl'>
                kontakt@stronynawypasie.pl
              </a>
              <br />
              <a href='mailto:eryktrojanowski@gmail.com'>
                eryktrojanowski@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
      <Card className={`${styles.kontakt} grid`}>
        <section className={styles['left-section']}>
          <h2>Skontaktuj się z nami!</h2>
          <h3>
            Chcesz aby Twoja strona internetowa była naprawdę efektywna?
            Zapraszamy do kontaktu, napisz czego potrzebujesz! My zajmiemy się
            resztą. Prośby o wy&shy;cenę prosimy kierować{' '}
            <Link to='/formularz-kontaktowy'>tutaj</Link>.
          </h3>
        </section>

        <section className={styles['right-section']}>
          <h4>Formularz kontaktowy</h4>
          <form onSubmit={formHandler} ref={formRef}>
            <div className={styles.group}>
              <input
                required
                type='text'
                name='user_name'
                id='name'
                autoComplete='false'
                value={enteredName}
                className={styles.input}
                onChange={nameChangeHandler}
                onBlur={nameBlurHandler}
              />
              <span className={styles.bar}></span>
              <label htmlFor='name'>Imie i nazwisko </label>
              {nameHasError && <p>Wprowadź imie i nazwisko</p>}
            </div>

            <div className={styles.group}>
              <input
                required
                id='topic'
                name='user_topic'
                type='text'
                autoComplete='false'
                value={enteredTopic}
                className={styles.input}
                onChange={topicChangeHandler}
                onBlur={topicBlurHandler}
              />
              <span className={styles.bar}></span>
              <label htmlFor='topic'>Temat</label>
              {topicHasError && <p>Wprowadź temat</p>}
            </div>

            <div className={styles.group}>
              <input
                required
                id='mail'
                name='user_email'
                value={enteredMail}
                type='text'
                autoComplete='false'
                className={styles.input}
                onChange={mailChangeHandler}
                onBlur={mailBlurHandler}
              />
              <span className={styles.bar}></span>
              <label htmlFor='mail'>Adres email </label>
              {mailHasError && <p>Wprowadź prawidłowy mail</p>}
            </div>

            <div className={styles.group}>
              <textarea
                required
                id='message'
                name='message'
                value={enteredMessage}
                autoComplete='false'
                className={styles.input}
                rows={6}
                onChange={messageChangeHandler}
                onBlur={messageBlurHandler}
              />
              <span className={styles.bar}></span>
              <label htmlFor='message'>Twoja wiadomość</label>
              {messageHasError && <p>Wprowadź wiadomość</p>}
            </div>

            <div className={`${styles.buttons} flex`}>
              <button className={styles['reset-button']} onClick={resetHandler}>
                Reset
              </button>
              <button
                className={styles['submit-button']}
                value='Send'
                type='submit'
              >
                Wyślij
              </button>
            </div>
            {formIsSent && (
              <div className={`${styles['mess-after-form']} font-center`}>
                <TickCircle variant='Bold' size='32' />
                <p>Dziękujemy za kontakt!</p>
              </div>
            )}
          </form>
        </section>
      </Card>
    </Fragment>
  );
};

export default Kontakt;
