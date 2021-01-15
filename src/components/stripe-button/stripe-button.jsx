import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51I9waBKKhQx0yDrbQrTcst8ARUz45XWyWQj5CK6ERKNIaqGk8D5gdozXjWTTj5y7LtkVwd3DOSj2T3r8CtJJWIOI009sWu8nlX'
  const onToken = (token) => {
    console.log('token', token)
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label={'Pay Now'}
      name={'Papowsky'}
      billingAddress={true}
      shippingAddress={true}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel={'Pay Now'}
      image={'https://sendeyo.com/up/d/f3eb2117da'}
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}
export default StripeCheckoutButton
