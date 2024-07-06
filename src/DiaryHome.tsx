import React from 'react';
import { Link } from 'react-router-dom';

export default function DiaryHome() {
  return (
    <div className="w-4/12 h-screen border-2 border-black absolute right-40">
      <span className="text-9xl text-black font-serif relative left-40 top-32">
        V-log
      </span>
      <span className="flex flex-col flex-wrap text-center gap-4 absolute bottom-36 left-32">
        <span className="text-4xl text-black font-serif"> Write </span>
        <span className="text-4xl text-black font-serif">
          your own unique diary
        </span>
        <span className="text-4xl text-black font-serif">
          with just 5 words
        </span>
      </span>
      <Link to="/open">
        <button
          type="button"
          className="p-0.5 border-2 border-black rounded-lg
        bg-black hover:bg-gray-300 hover:text-black text-white lg:text-lg absolute bottom-4 right-4"
        >
          Click to Start
        </button>
      </Link>
    </div>
  );
}
