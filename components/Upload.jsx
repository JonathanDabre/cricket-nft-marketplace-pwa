import { IoPaperPlaneOutline } from "react-icons/io5";


import React, { useState } from 'react';

function Upload({ addPicture }) {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPicture = {
      id: Math.random(),
      title,
      url,
      price: parseFloat(price),
    };
    addPicture(newPicture);
    setTitle('');
    setUrl('');
    setPrice('');
  };

  return (
    <div className="max-w-md bg-[#121117] px-10 md:px-0 mx-auto mt-8 h-[100vh]">
      <h2 className="text-3xl text-white font-bold mb-4">Upload Picture</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className=" w-full placeholder-[#8E8E86] text-white font-normal bg-[#191919] rounded-lg px-4 py-3 text-sm"
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="placeholder-[#8E8E86] text-white bg-[#191919] font-normal rounded-lg px-4 py-3 text-sm w-full"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="placeholder-[#8E8E86] font-normal text-white bg-[#191919] rounded-lg px-4 py-3 text-sm w-full"
          required
        />
        <button
          type="submit"
          className="flex space-x-3 rounded-lg bg-gradient-to-br from-[#510EA1] to-[#4528DC] text-white py-2 px-5 mt-2 "
        >
          <div className="">Upload</div>
          <div className="icon text-xl"><IoPaperPlaneOutline/></div>
        </button>
      </form>
    </div>
  );
}

export default Upload;
