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
        <h3 style={{ textAlign: "center" }}>MAP: Wellington Korean Church
        184 Ohiro Road, Brooklyn, Wellington 6021</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5994.352800988495!2d174.7604113114646!3d-41.3050259711908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38b019d5a12e41%3A0xc01647088737c535!2sWellington%20Korean%20Church!5e0!3m2!1sen!2snz!4v1752143991260!5m2!1sen!2snz"
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
        <p>ASB Account number:<br />12-3254-0198348-00</p>
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

