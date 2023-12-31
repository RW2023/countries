// src/components/Loading.tsx
import React from 'react';

const Loading = ({ text }: { text: string }) => (
  <div className='flex flex-col justify-center items-center min-h-full'>
    <p className="text-2xl">Loading {text}...🚀</p>
    <span className="loading loading-bars loading-lg"></span>
  </div>
);

export default Loading;
