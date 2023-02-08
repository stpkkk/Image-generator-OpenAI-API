import React from 'react';
import { logo } from './assets/icons';
import { Link, Route, Routes } from 'react-router-dom';
import { HomePage, PostPage } from './pages';

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
      <main className="min-h-[calc(100vh-90px)]">
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/create-post" element={<PostPage />}></Route>
        </Routes>
      </main>
    </>
  );
};
