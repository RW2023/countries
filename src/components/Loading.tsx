// src/components/Loading.tsx
import React from 'react';

const Loading = ({ text }: { text: string }) => (
  <>
    <p className="text-headline">Loading {text}...🚀</p>
    <span className="loading loading-bars loading-lg"></span>
  </>
);

export default Loading;
