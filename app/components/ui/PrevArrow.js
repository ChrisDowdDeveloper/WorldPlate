import React from 'react'

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#4CAF50", left: "-25px", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

export default PrevArrow