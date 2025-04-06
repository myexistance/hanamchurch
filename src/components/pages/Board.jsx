// import React from "react";
// import newsimage from '../../asset/april.png';


// export const Board = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "0",
//         padding: "0",
//         backgroundColor: "#fff",
//         borderRadius: "10px",
//         boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//         width: "100vw",
//         height: "100vh",
//         overflow: "auto",
//       }}
//     >
//       <img
//         src={newsimage}
//         style={{
//           width: "90%",
//           height: "auto",
//           display: "block",
//           objectFit: "contain",
//         }}
//         alt="A visually appealing board"
//         loading="lazy"
//       />
//     </div>
//   );
// };

import React from "react";
import newsimage from '../../asset/april.png';

export const Board = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 0,
        padding: 0,
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100vw",
        height: "100%",
       
        overflow: "auto",
      }}
    >
      <img
        src={newsimage}
        alt="April news board"
        style={{
          maxWidth: "90%",
          height: "auto",
          objectFit: "contain",
          borderRadius: "8px",
        }}
        loading="lazy"
      />
    </div>
  );
};
