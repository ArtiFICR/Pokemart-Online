import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IvTeJCn4bVJ7GvhRJZijeIrKEfsRBbWdI1Q11hvK9aCBy9up8Z8wjdTx9fc10S3JWDv9lrnTfEw0ZdMJ25WUPAZ00iV8S6S1n';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Pokemart Online'
            billingAddress
            shippingAddress
            image='https://image.flaticon.com/icons/png/128/188/188926.png'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;