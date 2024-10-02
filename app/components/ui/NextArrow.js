import React from 'react'

const NextArrow = ({ className, style, onClick }) => {
    return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "#4CAF50", right: "-25px" }}
          onClick={onClick}
        />
      );
}

export default NextArrow