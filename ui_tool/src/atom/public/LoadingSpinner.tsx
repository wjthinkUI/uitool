import React from 'react';
export const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen backdrop-brightness-90">
      <div className="border-8 border-solid rounded-full border-primary-950 w-96 h-96 animate-spin border-t-transparent" />
    </div>
  );
};
