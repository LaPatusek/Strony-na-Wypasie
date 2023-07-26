import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Fragment } from 'react';
import PaymentForm from './PaymentForm';

const PUBLIC_KEY =
  'pk_test_51NVChAKd9p0lK7dt78hmz7JGIG3gUt2aksafMiOulmKIlxSwxnMtfeYihWVQudHBSyPyScxGM01C85ButCfMPh8600L8fGHVBx';

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const StripeContainer = () => {
  return (
    <Fragment>
      <Elements stripe={stripeTestPromise}>
        <PaymentForm />
      </Elements>
    </Fragment>
  );
};

export default StripeContainer;
