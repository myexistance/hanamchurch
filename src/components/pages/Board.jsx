import React from "react";
import BoardImage from '../../asset/Board.png';

export const Board = () => {
  return (
    <div
      style={{
        display: "flex", // Enables flexbox layout
        justifyContent: "center", // Centers content horizontally
        alignItems: "center", // Centers content vertically
        marginTop: "0",
        padding: "0",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        width: "100vw",
        height: "100vh",
        overflow: "auto", // Enables scrolling
      }}
    >
      <img
        src={BoardImage}
        style={{
          width: "80%", // Set width to 80%
          height: "auto", // Keeps aspect ratio
          display: "block", 
          objectFit: "contain", // Ensures the image scales nicely inside the container
        }}
        alt="A visually appealing board" // Descriptive alt text
        loading="lazy" // Lazy loading for better performance
      />
    </div>
  );
};
