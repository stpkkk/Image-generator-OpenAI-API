import React from 'react';

type Props = {
  labelName?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  handleChange?: () => void;
  isSurpriseMe?: boolean;
  handleSurpriseMe?: () => void;
};

export const FormField: React.FC<Props> = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => (
  <div className="max-w-xl">
    <label className="block mb-2" htmlFor="label-name ">
      <div className="mb-2">
        <span className="mr-2">{labelName}</span>
        {isSurpriseMe && (
          <button
            className="bg-[#37A051] rounded-sm px-2 hover:bg-[#babec4]"
            onClick={handleSurpriseMe}
            type="button"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        className="block placeholder:italic placeholder:text-slate-400 bg-[#F0FFFF] w-full border border-slate-300 rounded-md py-2 px-3 mt-1 shadow-sm focus:outline-none focus:border-[#37A051] focus:ring-[#37A051] focus:ring-1 sm:text-md text-[#080808]"
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </label>
  </div>
);
