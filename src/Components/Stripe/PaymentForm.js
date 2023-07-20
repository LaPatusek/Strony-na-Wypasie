import {
  AddressElement,
  CardElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import axios from 'axios';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import GoBackButton from '../Elements/GoBackButton';
import styles from './PaymentForm.module.css';

const ADDRESS_OPTIONS = {
  mode: 'billing',
  fields: {
    phone: 'always',
  },
  validation: {
    phone: {
      required: 'always',
    },
  },
};

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
      fontSize: '16px',
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
  const emailRef = useRef();
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),

      billing_details: {
        address: {
          city: 'Niebylec',
          country: 'PL',
          line1: 'Jawornik',
          line2: '328',
          postal_code: '38-114',
        },
        name: 'Dawid',
        email: emailRef?.current.value,
        phone: '+48 312 123 312',
      },
    });

    console.log();

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
        <form onSubmit={handleSubmit} className={styles['payment-form']}>
          <input ref={emailRef}></input>
          <fieldset className={styles['FormGroup']}>
            <div className='FormRow'>
              <AddressElement options={ADDRESS_OPTIONS} />
              <CardElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <button>zapłać</button>
        </form>
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
