"use client";

import Link from 'next/link';
import React from 'react';

const Header = () => {

  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <a href="/">World Plates</a>
        </div>
        <div className="space-x-4">
          <a href="/" className="text-white hover:text-warm-orange">Home</a>
          <a href="/countries" className="text-white hover:text-warm-orange">Countries</a>
        </div>
      </div>
    </nav>
  
  );
};


export default Header;
