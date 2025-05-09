import React, { useState } from 'react';

const PaymentMethodSelector = ({ onPaymentMethodSelected }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setSelectedMethod(event.target.value);
    onPaymentMethodSelected(event.target.value); // Passing the selected method to parent
  };

  return (
    <div className="payment-method-selector">
      <h3>Select Payment Method</h3>
      <div className="payment-method-options">
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Card"
            onChange={handlePaymentMethodChange}
          />
          Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="M-PESA"
            onChange={handlePaymentMethodChange}
          />
          M-PESA
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="PayPal"
            onChange={handlePaymentMethodChange}
          />
          PayPal
        </label>
      </div>

      {selectedMethod === 'M-PESA' && (
        <div className="mpesa-info">
          <label htmlFor="mpesaPhone">M-PESA Phone Number:</label>
          <input type="text" id="mpesaPhone" placeholder="Enter your M-PESA number" />
        </div>
      )}

      {selectedMethod === 'Card' && (
        <div className="card-info">
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" placeholder="Enter your card number" />
          <label htmlFor="cardExpiry">Expiry Date:</label>
          <input type="text" id="cardExpiry" placeholder="MM/YY" />
          <label htmlFor="cardCVV">CVV:</label>
          <input type="text" id="cardCVV" placeholder="Enter your CVV" />
        </div>
      )}

      {selectedMethod === 'PayPal' && (
        <div className="paypal-info">
          <label htmlFor="paypalEmail">PayPal Email:</label>
          <input type="email" id="paypalEmail" placeholder="Enter your PayPal email" />
        </div>
      )}
    </div>
  );
};

export default PaymentMethodSelector;
