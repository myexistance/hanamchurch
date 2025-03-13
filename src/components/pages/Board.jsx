import React from "react";
import BoardImage from '../../asset/Board.png';

export const Board = () => {
  return (
    <>
      <div
  style={{
    textAlign: "center",
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
      width: "100%", 
      height: "auto", // Keeps aspect ratio
      display: "block",
    }}
    alt="Board"
  />
</div>

    </>
  );
};
