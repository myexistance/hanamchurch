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
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1 }}>
        <br />
        <h2 style={{ textAlign: "center" }}>MAP: 88 The Parade, Island Bay, Wellington 6023</h2>
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
      <br />
      <br />
      <div style={{ flex: 1, padding: '20px', textAlign: 'center' }}>
        {/* Paragraph goes here */}
        <h2 style={{ textAlign: "center" }}>OFFERING: ASB Account number:</h2>
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
