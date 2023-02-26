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

  const generateImage = async () => {
    if (form.prompt) {
      try {
        setGenerateImg(true);
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        const data = await response.json();
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Generating Image Error');
      } finally {
        setGenerateImg(false);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Enter the prompt');
    }
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (form.prompt && form.photo) {
      setLoading(true);
      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: form.prompt }),
        });
        await response.json();
        navigate('/');
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('Share with community Image Error');
      } finally {
        setLoading(false);
      }
    } else {
      // eslint-disable-next-line no-alert
      alert('Enter the prompt or generate an image');
    }
  };
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
            <div className="flex flex-col gap-5">
              <FormField
                labelName="Your Name"
                type="text"
                name="name"
                placeholder="Ex., john doe"
                value={form.name}
                handleChange={handleChange}
              />

              <FormField
                labelName="Prompt"
                type="text"
                name="prompt"
                placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
                value={form.prompt}
                handleChange={handleChange}
                isSurpriseMe
                handleSurpriseMe={handleSurpriseMe}
              />

              <div className="relative bg-[#5e5b5b] text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-80 p-3 h-80 flex justify-center items-center">
                {form.photo ? (
                  <img
                    src={form.photo}
                    alt={form.prompt}
                    className="w-full h-full "
                  />
                ) : (
                  <img
                    src={preview}
                    alt="preview"
                    className="w-9/12 h-9/12 object-contain opacity-40"
                  />
                )}

                {generateImg && (
                  <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                    <Loader />
                  </div>
                )}
              </div>
            </div>

            <div className="mt-5 flex gap-5">
              <button
                type="button"
                onClick={generateImage}
                className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {generateImg ? 'Generating...' : 'Generate'}
              </button>
            </div>

            <div className="mt-10">
              <p className="mt-2 text-[#666e75] text-[14px]">
                ** Once you have created the image you want, you can share it
                with others in the community **
              </p>
              <button
                type="submit"
                className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
              >
                {loading ? 'Sharing...' : 'Share with the Community'}
              </button>
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
