import React from 'react';

export function Footer() {
  return (
    <footer style={{ position: 'fixed',
  bottom: '0',
  right: '0',
  paddingRight: '20px',
  fontSize: '16px'}}>
      <p style={{ fontSize: "16px" }}>&copy; {new Date().getFullYear()} Joon. All rights reserved.</p>
    </footer>
  );
}

