import React from 'react';
import { Input } from './Input';

type Props = {
  generateImage: () => void;
  handleChange: any;
  handleSurpriseMe: () => void;
  prompt: string;
  generatingImg: boolean;
};

export const InputSection: React.FC<Props> = ({
  prompt,
  generatingImg,
  generateImage,
  handleChange,
  handleSurpriseMe,
}) => (
  <section className="bg-gradient-to-r from-indigo-900  to-pink-500 py-[30px] px-[10px]">
    <div className=" max-w-[1200px] mx-auto ">
      <h1 className="font-bold text-[32px] ">Generate an image</h1>
      <p className="mt-2 text-[20px] max-w-[1000px] text-[#babec4]">
        Create imaginative and visually stunning images generated through&nbsp;
        <a href="https://openai.com/" className="underline">
          OpenAI API
        </a>
      </p>
      <div className="mt-10">
        <Input
          type="text"
          name="prompt"
          placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
          value={prompt}
          handleChange={handleChange}
          handleSurpriseMe={handleSurpriseMe}
        />
      </div>
      <button
        type="button"
        onClick={generateImage}
        className="text-white bg-gradient-to-r from-purple-700 to-red-500 hover:from-pink-500 hover:to-yellow-500 rounded-md text-base w-full mt-5 sm:w-auto px-5 py-2.5 text-center"
      >
        {generatingImg ? 'Generating...' : 'Generate'}
      </button>
    </div>
  </section>
);
