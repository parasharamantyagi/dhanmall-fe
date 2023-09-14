import React, { useState } from 'react';

function PaytmPayment() {
  const [paymentStatus, setPaymentStatus] = useState('');

  const initiatePayment = async () => {
    // Perform the following steps to initiate payment:
    // 1. Create a payment request with necessary parameters.
    // 2. Send the request to Paytm's API to obtain a transaction token.
    // 3. Redirect the user to the Paytm payment gateway for payment.

    try {
      // Step 1: Create a payment request
      const paymentData = {
        MID: 'your-merchant-id',
        ORDER_ID: 'unique-order-id',
        CUST_ID: 'customer-id',
        TXN_AMOUNT: '100.00', // Replace with the actual amount
        INDUSTRY_TYPE_ID: 'Retail',
        CHANNEL_ID: 'WEB',
        WEBSITE: 'WEBSTAGING', // For testing, use 'WEBSTAGING'; for production, use your actual website
        CALLBACK_URL: 'your-callback-url',
        CHECKSUMHASH: 'checksum-generated-on-server', // Replace with the checksum generated on your server
      };

      // Step 2: Send the request to Paytm's API to obtain a transaction token
      const response = await fetch('https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });

      const responseData = await response.json();

      // Step 3: Redirect the user to the Paytm payment gateway for payment
      if (responseData && responseData.body.txnToken) {
        window.location.href = `https://securegw-stage.paytm.in/theia/processTransaction?orderid=${paymentData.ORDER_ID}`;
      } else {
        setPaymentStatus('Payment initiation failed.');
      }
    } catch (error) {
      setPaymentStatus('Error initiating payment.');
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={initiatePayment}>Make Payment</button>
      <p>{paymentStatus}</p>
    </div>
  );
}

export default PaytmPayment;
