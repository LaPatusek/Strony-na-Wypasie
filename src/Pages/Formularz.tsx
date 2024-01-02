import emailjs from '@emailjs/browser';
import { ArrowUp2, TickCircle } from 'iconsax-react';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import Card from '../Components/UI/Card';
import useInput from '../Components/hooks/useInput';
import styles from './Formularz.module.css';

declare var process: {
  env: {
    REACT_APP_SMTP_ID: string;
    REACT_APP_FORM_TEMPLATE_ID: string;
    REACT_APP_PUBLIC_KEY: string;
  };
};

const Formularz: React.FC = () => {
  const [optionsVis, setOptionsVis] = useState<boolean>(false);
  const [enteredType, setEnteredType] = useState('');
  const [enteredSites, setEnteredSites] = useState('');
  const [enteredNumLang, setEnteredNumLang] = useState('');
  const [enteredGraphs, setEnteredGraphs] = useState('');
  const [enteredBudget, setEnteredBudget] = useState('');
  const [enteredFind, setEnteredFind] = useState('');
  const [formIsSent, setFormIsSent] = useState<boolean>(false);
  const iconRef = useRef<SVGSVGElement>(null);
  const formRef = useRef(null);

  const typeChangeFunction = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredType(e.target.defaultValue);
  };

  const sitesChangeFunction = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredSites(e.target.defaultValue);
  };

  const numLangChangeFunction = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredNumLang(e.target.defaultValue);
  };

  const graphsChangeFunction = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredGraphs(e.target.defaultValue);
  };

  const budgetChangeFunction = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredBudget(e.target.defaultValue);
  };

  const findChangeFunction = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredFind(e.target.defaultValue);
  };

  useEffect(() => {
    const icon = iconRef?.current!;
    icon.classList.toggle(styles.active);
  }, [optionsVis]);

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
        process.env.REACT_APP_FORM_TEMPLATE_ID,
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
    setEnteredBudget('');
    setEnteredFind('');
    setEnteredGraphs('');
    setEnteredNumLang('');
    setEnteredSites('');
    setEnteredType('');
    setOptionsVis(false);
  };

  const resetHandler = (e: React.FormEvent) => {
    e.preventDefault();

    nameReset();
    topicReset();
    mailReset();
    messageReset();
    setEnteredBudget('');
    setEnteredFind('');
    setEnteredGraphs('');
    setEnteredNumLang('');
    setEnteredSites('');
    setEnteredType('');
  };

  const optionsHandler = () => {
    setOptionsVis((e) => !e);
  };

  return (
    <Card className={`${styles.wrap} grid`}>
      <Helmet>
        <link
          rel='canonical'
          href='https://www.stronynawypasie.pl/#/formularz-kontaktowy'
        />
        <meta name='robots' content='index, follow' />
      </Helmet>
      <section className={styles['left-section']}>
        <form onSubmit={formHandler} ref={formRef}>
          <div className={styles.group}>
            <input
              required
              name='user_name'
              type='text'
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
              autoComplete='false'
              value={enteredMessage}
              className={styles.input}
              rows={6}
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
            />
            <span className={styles.bar}></span>
            <label htmlFor='message'>Twoja wiadomość</label>
            {messageHasError && <p>Wprowadź wiadomość</p>}
          </div>

          <h3 onClick={optionsHandler}>
            {!optionsVis ? 'Pokaż ' : 'Ukryj '}
            dodatkowe pytania <ArrowUp2 variant='Bold' ref={iconRef} />
          </h3>

          {optionsVis && (
            <div className={`${styles.options} grid`}>
              <h4>1. Czym będzie Twoja strona?</h4>
              <div className={styles['radio-container']}>
                <label>
                  <input
                    type='radio'
                    name='web_type'
                    value='Wizytówka'
                    checked={enteredType === 'Wizytówka'}
                    onChange={typeChangeFunction}
                  />
                  <span>Wizytówka</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='web_type'
                    value='Sklep ecommerce'
                    checked={enteredType === 'Sklep ecommerce'}
                    onChange={typeChangeFunction}
                  />
                  <span>Sklep ecommerce</span>
                </label>
              </div>
              <h4>2. Ile podstron będzie posiadać Twoja strona?</h4>
              <div className={styles['radio-container']}>
                <label>
                  <input
                    type='radio'
                    name='sites_amount'
                    value='Do 5'
                    checked={enteredSites === 'Do 5'}
                    onChange={sitesChangeFunction}
                  />
                  <span>Do 5</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='sites_amount'
                    value='Do 10'
                    checked={enteredSites === 'Do 10'}
                    onChange={sitesChangeFunction}
                  />
                  <span>Do 10</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='sites_amount'
                    value='Do 15'
                    checked={enteredSites === 'Do 15'}
                    onChange={sitesChangeFunction}
                  />
                  <span>Do 20</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='sites_amount'
                    value='Więcej niż 20'
                    checked={enteredSites === 'Więcej niż 20'}
                    onChange={sitesChangeFunction}
                  />
                  <span>Więcej niż 20</span>
                </label>
              </div>
              <h4>3. W ilu językach będzie Twoja strona?</h4>
              <div className={styles['radio-container']}>
                <label>
                  <input
                    type='radio'
                    name='leanguage_amount'
                    value='1'
                    checked={enteredNumLang === '1'}
                    onChange={numLangChangeFunction}
                  />
                  <span>1</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='leanguage_amount'
                    value='2'
                    checked={enteredNumLang === '2'}
                    onChange={numLangChangeFunction}
                  />
                  <span>2</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='leanguage_amount'
                    value='3'
                    checked={enteredNumLang === '3'}
                    onChange={numLangChangeFunction}
                  />
                  <span>3</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='leanguage_amount'
                    value='Więcej niż 3'
                    checked={enteredNumLang === 'Więcej niż 3'}
                    onChange={numLangChangeFunction}
                  />
                  <span>Więcej niż 3</span>
                </label>
              </div>
              <h4>
                4. Czy posiadasz materiały graficzne na swoją stronę <br />
                <span> (Zdjęcia, filmy, grafiki, loga) </span>
              </h4>
              <div className={styles['radio-container']}>
                <label>
                  <input
                    type='radio'
                    name='user_graphics'
                    value='Tak'
                    checked={enteredGraphs === 'Tak'}
                    onChange={graphsChangeFunction}
                  />
                  <span>Tak</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='user_graphics'
                    value='Nie'
                    checked={enteredGraphs === 'Nie'}
                    onChange={graphsChangeFunction}
                  />
                  <span>Nie</span>
                </label>
              </div>
              <h4>5. Jaki jest Twój budżet?</h4>
              <div className={styles['radio-container']}>
                <label>
                  <input
                    type='radio'
                    name='user_budget'
                    value='Mniej niż 1000 zł'
                    checked={enteredBudget === 'Mniej niż 1000 zł'}
                    onChange={budgetChangeFunction}
                  />
                  <span>Mniej niż 1000 zł</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='user_budget'
                    value='1000 - 2000 zł'
                    checked={enteredBudget === '1000 - 2000 zł'}
                    onChange={budgetChangeFunction}
                  />
                  <span>1000 - 2000 zł</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='user_budget'
                    value='2000 - 5000 zł'
                    checked={enteredBudget === '2000 - 5000 zł'}
                    onChange={budgetChangeFunction}
                  />
                  <span>2000 - 5000 zł</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='user_budget'
                    value='Więcej niż 5000 zł'
                    checked={enteredBudget === 'Więcej niż 5000 zł'}
                    onChange={budgetChangeFunction}
                  />
                  <span>Więcej niż 5000 zł</span>
                </label>
              </div>

              <h4>6. Jak nas znalazłeś?</h4>
              <div className={styles['radio-container']}>
                <label>
                  <input
                    type='radio'
                    name='user_found'
                    value='Wyszukiwarka online'
                    checked={enteredFind === 'Wyszukiwarka online'}
                    onChange={findChangeFunction}
                  />
                  <span>Wyszukiwarka online</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='user_found'
                    value='Media społecznościowe'
                    checked={enteredFind === 'Media społecznościowe'}
                    onChange={findChangeFunction}
                  />
                  <span>Media społecznościowe</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='user_found'
                    value='Polecenie od znajomego'
                    checked={enteredFind === 'Polecenie od znajomego'}
                    onChange={findChangeFunction}
                  />
                  <span>Polecenie od znajomego</span>
                </label>
              </div>
            </div>
          )}

          <div className={styles.buttons}>
            <button
              type='reset'
              className={styles['reset-button']}
              onClick={resetHandler}
            >
              Reset
            </button>
            <button
              type='submit'
              value='Send'
              className={styles['submit-button']}
            >
              Wyślij
            </button>
          </div>
          {formIsSent && (
            <div className={styles['mess-after-form']}>
              <TickCircle variant='Bold' size='32' />
              <p>Dziękujemy za kontakt!</p>
            </div>
          )}
        </form>
      </section>

      <section className={styles['right-section']}>
        <h2>Skontaktuj się z nami!</h2>
        <h3>
          Tworzymy strony internetowe z myślą o Tobie i Twoim biznesie. Opowiedz
          nam o swoim projekcie, a my przygotujemy wycenę dla Ciebie.
        </h3>
      </section>
    </Card>
  );
};

export default Formularz;
