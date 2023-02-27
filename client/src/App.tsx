import React, { ChangeEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Header, ImageSection, InputSection } from './components';
import { getRandomPrompt } from './utils';

export const App: React.FC = () => {
  const notify = () =>
    toast.error('☠️ Push "Surprise me" button first or type something!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  const [form, setForm] = useState({
    name: '',
    prompt: '',
    photo: '',
  });
  const [generatingImg, setGeneratingImg] = useState(false);

  const generateImage = async () => {
    try {
      setGeneratingImg(true);
      const response = await fetch('http://localhost:8080/api/v1/dalle', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: form.prompt }),
      });
      const data = await response.json();
      setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
    } catch (error) {
      notify();
    } finally {
      setGeneratingImg(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="min-h-[calc(100vh-90px)]">
        <InputSection
          prompt={form.prompt}
          generatingImg={generatingImg}
          handleSurpriseMe={handleSurpriseMe}
          handleChange={handleChange}
          generateImage={generateImage}
        />
        <ImageSection
          photo={form.photo}
          prompt={form.prompt}
          generatingImg={generatingImg}
        />
      </main>
    </>
  );
};
