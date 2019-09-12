import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
const onToken=token=>{
    console.log(token);
    alert('Payment Successful');
}

const Stripe = ({price}) => {
    const stripePrice=price*100;
    const PublishableKey='pk_test_FDF9WlEsJTPRUKtg1czDneQ300AeG9RDP6';
  return (
    <StripeCheckout
        label='Pay Now'
        name='apny shop'
        billingAddress
        shippingAddress
        description={`Your Total Price is ${price}`}
        amount ={stripePrice}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={PublishableKey}
    />
  )
}

export default Stripe;