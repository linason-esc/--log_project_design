import React from 'react';

export default function Diary() {
  return (
    <div className="w-4/12 h-screen border-2 border-black absolute right-40">
      <span className="text-9xl text-black font-serif relative left-40 top-32">
        {' '}
        V-log{' '}
      </span>
      <span className="text-3xl text-black font-serif flex-col absolute bottom-40 left-64">
        {' '}
        Write{' '}
      </span>
      <span className="text-3xl text-black font-serif flex-col absolute bottom-28 left-40">
        your own unique diary
      </span>
      <span className="text-3xl text-black font-serif flex-col absolute bottom-16 left-48">
        {' '}
        with just 5 words
      </span>
      <button
        type="button"
        className="p-0.5 border-2 border-black rounded-lg
       bg-black hover:bg-gray-300 hover:text-black text-white lg:text-lg absolute bottom-4 right-4"
      >
        Click to Write
      </button>
    </div>
  );
}
