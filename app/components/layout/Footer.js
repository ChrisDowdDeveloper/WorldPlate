import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Recipe App. All Rights Reserved.</p>
    </footer>
  );
};

// Simple styling for footer
const footerStyle = {
  padding: '10px',
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  position: 'fixed',
  width: '100%',
  bottom: '0',
};

export default Footer;
