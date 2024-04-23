// import React from "react";

// export const Contact = () => {
//   return (
//         <div style={{ display: 'flex' }}>
//             <div style={{ flex: 1 }}>
//                 {/* Map goes here */}
//                 <img src="map.jpg" alt="Map" style={{ width: '100%', height: 'auto' }} />
//             </div>
//             <div style={{ flex: 1, padding: '0 20px' }}>
//                 {/* Paragraph goes here */}
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
//             </div>
//         </div>
//     );
// };

import React from "react";

export const Contact = () => {

  const handleEmailClick = () => {
    window.location.href = 'mailto: ilsun0508@gmail.com';
  };

  return (
    <div style={{ 
      backgroundColor: '#F8F9F9',
      display: 'flex', flexDirection: 'column', maxWidth: '100%', padding: '25px' }}>
      <div style={{ flex: 1 }}>
        <br />
        <h3 style={{ textAlign: "center" }}>MAP: 88 The Parade, Island Bay, Wellington 6023</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4609.779165050718!2d174.77022562713333!3d-41.33224884848255!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38baad534e9011%3A0xfcb0c92cd1b4bb49!2s88%20The%20Parade%2C%20Island%20Bay%2C%20Wellington%206023!5e0!3m2!1sen!2snz!4v1713416854861!5m2!1sen!2snz"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <hr style={{ width: '100%', marginBottom: '20px' }} /> {/* Line */}
      <br />
      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        {/* Paragraph goes here */}
        <h3 style={{ textAlign: "center" }}>OFFERING:</h3> <br />
        <p>ASB Account number:12-3254-0198348-00</p>
      </div>
      <br />
      <hr style={{ width: '100%', marginBottom: '20px' }} /> {/* Line */}
      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        <h3 style={{ textAlign: "center" }}>Drop a message to Church:</h3><br />
        <button onClick={handleEmailClick}
        style={{
              padding: '15px 30px', // Adjust padding for larger button
              fontSize: '18px', // Increase font size
              backgroundColor: '#007bff', // Blue color
              color: 'white', // White text color
              border: 'none', // Remove border
              borderRadius: '8px', // Rounded corners
              cursor: 'pointer', // Change cursor on hover
            }}>
      SEND MESSAGE
        </button>
      </div>

      {/* Media query for responsiveness */}
      <style>
        {`
          @media only screen and (min-width: 600px) {
            .contact-wrapper {
              flex-direction: row;
            }
            .contact-wrapper > div {
              flex: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

//import React from 'react';
//import { loadStripe } from '@stripe/stripe-js';
//import { Elements } from '@stripe/react-stripe-js';
//import CheckoutForm from './CheckoutForm';

//const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

//const App = () => {
    //return (
        //<Elements stripe={stripePromise}>
           // <CheckoutForm />
        //</Elements>
   // );
//};

//export default App;

