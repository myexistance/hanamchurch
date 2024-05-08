import React from 'react';

export function Footer() {
  return (
    <footer style={{ textAlign: 'right',paddingRight: "20px" }}>
      <p style={{ fontSize: "16px" }}>&copy; {new Date().getFullYear()} Joon. All rights reserved.</p>
    </footer>
  );
}

