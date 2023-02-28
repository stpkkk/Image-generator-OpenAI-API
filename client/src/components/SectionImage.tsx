import React from 'react';
import { preview, download } from '../assets/icons';
import { Loader } from './Loader';
import { downloadImage } from '../utils';

type Props = {
  photo: string;
  prompt: string;
  generatingImg: boolean;
};

export const SectionImage: React.FC<Props> = ({
  photo,
  prompt,
  generatingImg,
}) => (
  <section className="max-w-[1200px] mx-auto">
    <div className=" mt-5 relative bg-gradient-to-r from-indigo-900  to-pink-500 p-3 max-w-[400px] max-h-[400px] rounded-lg">
      {photo ? (
        <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
          <img
            className="w-full h-auto object-cover rounded-xl"
            src={photo}
            alt={prompt}
          />
          <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-900  to-pink-500 m-2 p-4 rounded-md">
            <p className="text-white text-sm overflow-y-auto prompt">
              {prompt}
            </p>
            <button
              type="button"
              onClick={() => downloadImage(photo)}
              className="mt-5 outline-none bg-transparent border-none"
            >
              <img
                src={download}
                alt="download"
                className="w-6 h-6 object-contain invert"
              />
            </button>
          </div>
        </div>
      ) : (
        <img src={preview} alt="preview" />
      )}

      {generatingImg && (
        <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
          <Loader />
        </div>
      )}
    </div>
  </section>
);
