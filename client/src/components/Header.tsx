import React from 'react';
import { logo } from '../assets/icons';

export const Header: React.FC = () => (
  <header className="w-full sm:px-10 px-5 py-5 border-b border-b-[#383636] bg-[url('./assets/images/hero-pattern.jpg')] bg-cover">
    <a href="/">
      <img className="w-32 object-contain" src={logo} alt="logo" />
    </a>
  </header>
);
