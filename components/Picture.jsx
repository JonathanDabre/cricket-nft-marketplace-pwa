// Picture.jsx

import React from 'react';

function Picture({ picture }) {
  return (
    <img src={picture.url} alt={picture.title} className="w-full rounded-xl h-48 object-cover" />
  );
}

export default Picture;
