import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import { ArrowLeft } from 'iconsax-react';
import { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import cowBronze from '../../Assets/cow-bronze.webp';
import GoBackButton from '../Elements/GoBackButton';
import useInput from '../hooks/useInput';
import styles from './PaymentForm.module.css';

const CARD_OPTIONS = {
  hidePostalCode: true,
  disableLink: true,
  iconStyle: 'solid',
  style: {
    base: {
      backgroundColor: '#3db60c',
      iconColor: '#fff',
      color: '#fff',
      fontWeight: 500,
      fontSize: '22px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fff' },
      '::placeholder': { color: '#fff' },
    },
    invalid: {
      iconColor: '#f25555',
      color: '#f25555',
    },
  },
};

const PaymentForm = () => {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const emailRef = useRef();
  const nameRef = useRef();
  const addressFirstRef = useRef();
  const addressSecondRef = useRef();
  const postalCodeRef = useRef();
  const cityRef = useRef();
  const telRef = useRef();
  const history = useHistory();

  const navigationFunction = () => {
    history.goBack();
  };

  const {
    value: enteredName,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    hasError: nameHasError,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredMail,
    isValid: mailIsValid,
    valueChangeHandler: mailChangeHandler,
    inputBlurHandler: mailBlurHandler,
    hasError: mailHasError,
  } = useInput((value) => value.trim().includes('@'));

  const {
    value: enteredFirstAdd,
    isValid: firstAddIsValid,
    valueChangeHandler: firstAddChangeHandler,
    inputBlurHandler: firstAddBlurHandler,
    hasError: firstAddHasError,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredPostal,
    isValid: postalIsValid,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    hasError: postalHasError,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredCity,
    isValid: cityIsValid,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    hasError: cityHasError,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredNumber,
    isValid: numberIsValid,
    valueChangeHandler: numberChangeHandler,
    inputBlurHandler: numberBlurHandler,
    hasError: numberHasError,
  } = useInput((value) => value.trim() !== '');

  let formIsValid = false;

  if (
    nameIsValid &&
    mailIsValid &&
    firstAddIsValid &&
    postalIsValid &&
    cityIsValid &&
    numberIsValid
  ) {
    formIsValid = true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),

      billing_details: {
        address: {
          city: cityRef?.current.value,
          country: 'PL',
          line1: addressFirstRef?.current.value,
          line2: addressSecondRef?.current.value,
          postal_code: postalCodeRef?.current.value,
        },
        name: nameRef?.current.value,
        email: emailRef?.current.value,
        phone: telRef?.current.value,
      },
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post('http://localhost:4000/payment', {
          amount: 45000, //amount to grosze czyli 1000 = 10.00zł
          id,
        });
        if (response.data.success) {
          console.log('Successfull payment');
          setSuccess(true);
        }
      } catch (error) {
        console.log('Error: ', error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <div>
      {!success ? (
        <div className={`${styles['payment-wrap']} grid`}>
          <div className={styles['left-section']}>
            <button onClick={navigationFunction}>
              <ArrowLeft size='18' color='#000000' /> Powrót
            </button>
            <div className={`${styles['product-wrap']} grid`}>
              <img src={cowBronze} alt='Mała Krówka' />
              <div className={styles['product-text']}>
                <h2>Mała krówka</h2>
                <h3>450 PLN</h3>
              </div>
            </div>
          </div>
          <div className={styles['right-section']}>
            <form onSubmit={handleSubmit} className={styles['payment-form']}>
              <div className={`${styles['upper-form']} grid`}>
                <div
                  className={`${styles.group} grid ${
                    nameHasError ? styles.error : ''
                  }`}
                >
                  <label htmlFor='name'>Imię i nazwisko</label>
                  <input
                    type='text'
                    ref={nameRef}
                    value={enteredName}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    id='name'
                    required='Imie i nazwisko'
                    placeholder='Imię i nazwisko'
                    autoComplete='false'
                  />
                </div>

                <div
                  className={`${styles.group} grid ${
                    mailHasError ? styles.error : ''
                  }`}
                >
                  <label htmlFor='mail'>Email</label>
                  <input
                    type='email'
                    ref={emailRef}
                    value={enteredMail}
                    onChange={mailChangeHandler}
                    onBlur={mailBlurHandler}
                    id='mail'
                    required='mail'
                    placeholder='Adres email'
                    autoComplete='false'
                  />
                </div>

                <div
                  className={`${styles.group} grid ${
                    firstAddHasError ? styles.error : ''
                  }`}
                >
                  <label htmlFor='addressFirst'>Wiersz adresu 1</label>
                  <input
                    type='text'
                    ref={addressFirstRef}
                    value={enteredFirstAdd}
                    onChange={firstAddChangeHandler}
                    onBlur={firstAddBlurHandler}
                    id='addressFirst'
                    placeholder='Ulica'
                    required='Wiersz adresu'
                  />
                </div>

                <div className={`${styles.group} grid`}>
                  <label htmlFor='addressSecond'>Wiersz adresu 2*</label>
                  <input
                    type='text'
                    ref={addressSecondRef}
                    id='addressSecond'
                    placeholder='Mieszkanie, numer budynku, itp. (opcjonalnie)'
                  />
                </div>

                <div
                  className={`${styles.group} grid ${
                    postalHasError ? styles.error : ''
                  }`}
                >
                  <label htmlFor='postalCode'>Kod pocztowy</label>
                  <input
                    type='text'
                    ref={postalCodeRef}
                    value={enteredPostal}
                    onChange={postalChangeHandler}
                    onBlur={postalBlurHandler}
                    id='postalCode'
                    required='Kod pocztowy'
                    placeholder='00-000'
                  />
                </div>

                <div
                  className={`${styles.group} grid ${
                    cityHasError ? styles.error : ''
                  }`}
                >
                  <label htmlFor='city'>Miasto</label>
                  <input
                    type='text'
                    ref={cityRef}
                    id='city'
                    required='Miasto'
                    value={enteredCity}
                    onChange={cityChangeHandler}
                    onBlur={cityBlurHandler}
                    placeholder='Miasto'
                  />
                </div>

                <div
                  className={`${styles.group} grid ${
                    numberHasError ? styles.error : ''
                  }`}
                >
                  <label htmlFor='phone'>Numer telefonu</label>
                  <input
                    type='number'
                    ref={telRef}
                    value={enteredNumber}
                    onChange={numberChangeHandler}
                    onBlur={numberBlurHandler}
                    id='phone'
                    required='Telefon'
                    autoComplete='false'
                    placeholder='+48 000 000 000'
                  />
                </div>
              </div>

              <fieldset className={styles.fieldset}>
                <div className={styles['FormGroup']}>
                  <CardElement options={CARD_OPTIONS} />
                </div>
              </fieldset>
              <button>zapłać</button>
            </form>
          </div>
        </div>
      ) : (
        <div className={styles['message-after-payment']}>
          <h2>
            Dziękujemy za zakupienie witryny! <br />W ciągu 48h skontaktujemy
            się z Tobą!
          </h2>
          <div className={`${styles['back-button']} grid`}>
            <Link to='/main'>
              <GoBackButton />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
