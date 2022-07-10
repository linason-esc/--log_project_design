import React from 'react';

export default function Modal() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-1">
      <div
        className="flex flex-col flex-nowrap justify-center fixed top-1/2 left-1/2 
      -translate-x-1/2 -translate-y-1/2 w-2/5 h-4/5 bg-slate-100 border-4 border-black p-5 z-2"
      />
    </div>
  );
}
