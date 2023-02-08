import React from 'react';
import { logo } from './assets/icons';
import { Link } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <header className="w-full flex justify-between items-center sm:px-10 px-5 py-5 border-b border-b-[#383636] bg-[#181818]">
        <Link to={'/'}>
          <img className="w-32 object-contain" src={logo} alt="logo" />
        </Link>
        <Link
          className=" bg-[#37a051] text-white px-8 py-3 rounded-md"
          to={'/create-post'}
        >
          Create
        </Link>
      </header>
      <div className="bg-[#181818] h-72"></div>
    </>
  );
};
