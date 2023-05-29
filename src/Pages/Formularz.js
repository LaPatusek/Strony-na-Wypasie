import { ArrowUp2, TickCircle } from 'iconsax-react';
import { useEffect, useRef, useState } from 'react';
import Card from '../Components/UI/Card';
import useInput from '../Components/hooks/useInput';
import styles from './Formularz.module.css';

const Formularz = () => {
  const [optionsVis, setOptionsVis] = useState(false);
  const [enteredType, setEnteredType] = useState('');
  const [enteredSites, setEnteredSites] = useState('');
  const [enteredNumLang, setEnteredNumLang] = useState('');
  const [enteredGraphs, setEnteredGraphs] = useState('');
  const [enteredBudget, setEnteredBudget] = useState('');
  const [enteredFind, setEnteredFind] = useState('');
  const [formIsSent, setFormIsSent] = useState(false);
  const iconRef = useRef();

  const typeChangeFunction = (e) => {
    setEnteredType(e.target.defaultValue);
  };

  const sitesChangeFunction = (e) => {
    setEnteredSites(e.target.defaultValue);
  };

  const numLangChangeFunction = (e) => {
    setEnteredNumLang(e.target.defaultValue);
  };

  const graphsChangeFunction = (e) => {
    setEnteredGraphs(e.target.defaultValue);
  };

  const budgetChangeFunction = (e) => {
    setEnteredBudget(e.target.defaultValue);
  };

  const findChangeFunction = (e) => {
    setEnteredFind(e.target.defaultValue);
  };

  useEffect(() => {
    const icon = iconRef?.current;
    icon.classList.toggle(styles.active);
  }, [optionsVis]);

  const {
    value: enteredName,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
    reset: nameReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredTopic,
    isValid: topicIsValid,
    valueChangeHandler: topicChangeHandler,
    inputBlurHandler: topicBlurHandler,
    hasError: topicHasError,
    reset: topicReset,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredMail,
    isValid: mailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    hasError: mailHasError,
    reset: mailReset,
  } = useInput((value) => value.trim().includes('@'));

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    valueChangeHandler: messageChangeHandler,
    inputBlurHandler: messageBlurHandler,
    hasError: messageHasError,
    reset: messageReset,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;

  if (messageIsValid && topicIsValid && nameIsValid && mailIsValid) {
    formIsValid = true;
  }

  const formHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    setFormIsSent(true);
    nameReset();
    topicReset();
    mailReset();
    messageReset();
  };

  const resetHandler = (e) => {
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
      <section className={styles['left-section']}>
        <form onSubmit={formHandler}>
          <div className={styles.group}>
            <input
              required='Imie i nazwisko'
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
              required='Temat'
              id='topic'
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
              required='Adres email'
              id='mail'
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
              required='Twoja wiadomość'
              id='message'
              autoComplete='false'
              value={enteredMessage}
              className={styles.input}
              rows='6'
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
                    name='rodzajStrony'
                    value='Wizytówka'
                    checked={enteredType === 'Wizytówka'}
                    onChange={typeChangeFunction}
                  />
                  <span>Wizytówka</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='rodzajStrony'
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
                    name='iloscPodstron'
                    value='Do 5'
                    checked={enteredSites === 'Do 5'}
                    onChange={sitesChangeFunction}
                  />
                  <span>Do 5</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='iloscPodstron'
                    value='Do 10'
                    checked={enteredSites === 'Do 10'}
                    onChange={sitesChangeFunction}
                  />
                  <span>Do 10</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='iloscPodstron'
                    value='Do 15'
                    checked={enteredSites === 'Do 15'}
                    onChange={sitesChangeFunction}
                  />
                  <span>Do 20</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='iloscPodstron'
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
                    name='jezykStrony'
                    value='1'
                    checked={enteredNumLang === '1'}
                    onChange={numLangChangeFunction}
                  />
                  <span>1</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='jezykStrony'
                    value='2'
                    checked={enteredNumLang === '2'}
                    onChange={numLangChangeFunction}
                  />
                  <span>2</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='jezykStrony'
                    value='3'
                    checked={enteredNumLang === '3'}
                    onChange={numLangChangeFunction}
                  />
                  <span>3</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='jezykStrony'
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
                    name='materials'
                    value='Tak'
                    checked={enteredGraphs === 'Tak'}
                    onChange={graphsChangeFunction}
                  />
                  <span>Tak</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='materials'
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
                    name='budzet'
                    value='Mniej niż 1000 zł'
                    checked={enteredBudget === 'Mniej niż 1000 zł'}
                    onChange={budgetChangeFunction}
                  />
                  <span>Mniej niż 1000 zł</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='budzet'
                    value='1000 - 2000 zł'
                    checked={enteredBudget === '1000 - 2000 zł'}
                    onChange={budgetChangeFunction}
                  />
                  <span>1000 - 2000 zł</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='budzet'
                    value='2000 - 5000 zł'
                    checked={enteredBudget === '2000 - 5000 zł'}
                    onChange={budgetChangeFunction}
                  />
                  <span>2000 - 5000 zł</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='budzet'
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
                    name='Find'
                    value='Wyszukiwarka online'
                    checked={enteredFind === 'Wyszukiwarka online'}
                    onChange={findChangeFunction}
                  />
                  <span>Wyszukiwarka online</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='Find'
                    value='Media społecznościowe'
                    checked={enteredFind === 'Media społecznościowe'}
                    onChange={findChangeFunction}
                  />
                  <span>Media społecznościowe</span>
                </label>
                <label>
                  <input
                    type='radio'
                    name='Find'
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
            <button type='submit' className={styles['submit-button']}>
              Wyślij
            </button>
          </div>
          {formIsSent && <div className={styles['mess-after-form']}>
            <TickCircle variant='Bold' size='32'/>
             <p>Dziękujemy za kontakt!</p></div>}
        </form>
      </section>

      <section className={styles['right-section']}>
        <h2>Skontaktuj się z nami!</h2>
        <h3>
          Tworzymy strony internetowe z myślą o Tobie i Twoim biznesie. <br />{' '}
          Opowiedz nam o swoim projekcie,
          <br /> a my przygotujemy wycenę dla Ciebie.
        </h3>
      </section>
    </Card>
  );
};

export default Formularz;
