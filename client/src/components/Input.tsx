import React from 'react';

type Props = {
  type?: string;
  name?: string;
  placeholder?: string;
  handleChange?: () => void;
  value?: string;
  handleSurpriseMe?: () => void;
};

export const Input: React.FC<Props> = ({
  type,
  name,
  placeholder,
  value,
  handleChange,
  handleSurpriseMe,
}) => (
  <div className="max-w-xl">
    <button
      className="mb-3 bg-[#a32262] rounded-md px-3 hover:bg-[#312e81]"
      onClick={handleSurpriseMe}
      type="button"
    >
      Surprise me
    </button>
    <input
      className="block placeholder:italic placeholder:text-slate-400 bg-[#F0FFFF] w-full border border-slate-300 rounded-md py-2 px-3 mt-1 shadow-sm focus:outline-none focus:border-[#ec4899] focus:ring-[#ec4899] focus:ring-1 sm:text-md text-[#080808]"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  </div>
);
