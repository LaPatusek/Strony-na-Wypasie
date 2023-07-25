import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Fragment, useEffect, useState } from 'react';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
  'pk_test_51NVChAKd9p0lK7dt78hmz7JGIG3gUt2aksafMiOulmKIlxSwxnMtfeYihWVQudHBSyPyScxGM01C85ButCfMPh8600L8fGHVBx';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = (props) => {
  const options = {
    amount: 10000,
    mode: 'payment',
    currency: 'pln'
  };

  return (
    <Fragment>
      <Elements stripe={stripeTestPromise} options={options}>
        <PaymentForm finalOptionMessage={props.optionMessage} />
      </Elements>
    </Fragment>
  );
};

export default StripeContainer;
