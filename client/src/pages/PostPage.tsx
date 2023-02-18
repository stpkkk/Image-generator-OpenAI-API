import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { preview } from '../assets/icons';
import { getRandomPrompt } from '../utils';
import { FormField, Loader } from '../components';

export const PostPage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generateImg, setGenerateImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const generateImage = () => {};
  const handleSubmit = () => {};
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  return (
    <>
      <section className="bg-[#181818] min-h-54 py-[50px] px-[10px]">
        <div className=" max-w-[1200px] mx-auto ">
          <h1 className="font-bold text-[32px] ">Create</h1>
          <p className="mt-2 text-[20px] max-w-[1000px] text-[#babec4]">
            Create imaginative and visually stunning images generated through
            DALL-E AI and share them with the community
          </p>
          <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5 mb-6">
              <FormField
                labelName="Your Name"
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                handleChange={handleChange}
              />
              <FormField
                labelName="Prompt"
                type="text"
                name="name"
                placeholder="A comic book cover of a superhero wearing headphones"
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handleSurpriseMe={handleSurpriseMe}
              />
            </div>
            <div className="relative max-w-[200px] mb-8">
              {form.photo ? (
                <img
                  src={form.photo}
                  alt={form.prompt}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={preview}
                  alt="preview"
                  className="object-contain opacity-20"
                />
              )}
              {generateImg && (
                <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.3)]">
                  <Loader />
                </div>
              )}
            </div>
            <div className="w-full">
              <button
                type="button"
                onClick={generateImage}
                className="bg-[#37A051] mb-4 rounded-md hover:bg-[#babec4] font-medium w-full sm:w-auto px-5 py-3 text-center"
              >
                {generateImg ? 'Generating...' : 'Generate'}
              </button>
              <div className="w-full">
                <p className="mb-4 text-[20px] max-w-[1000px] text-[#babec4]">
                  Once you have created the image you want, you can share it
                  with others in the community
                </p>
                <button
                  type="submit"
                  onClick={generateImage}
                  className="bg-[#8237a0] rounded-md hover:bg-[#babec4] font-medium w-full sm:w-auto px-5 py-3 text-center"
                >
                  {loading ? 'Sharing...' : 'Share with the community'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <div>test</div>
      </section>
    </>
  );
};
