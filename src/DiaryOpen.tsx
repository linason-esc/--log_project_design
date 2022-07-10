import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import home from './images/home.png';
import list from './images/menu.png';
import writeR from './images/write_r.png';
import writeL from './images/write_l.png';

export default function DiaryOpen() {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  function openModalHandler() {
    setOpenModal(true);
  }

  function closeModalHandler() {
    setOpenModal(false);
  }

  return (
    <div className="flex flex-row flex-nowrap justify-center">
      <div className="w-4/12 h-screen border-2 border-black" />
      <div className="w-4/12 h-screen border-2 border-black relative" />
      <span className="flex flex-col flex-wrap text-right gap-3 absolute right-5 bottom-5">
        <span className="text-5xl text-black font-serif"> My </span>
        <span className="text-5xl text-black font-serif"> V-log </span>
        <span className="text-5xl text-black font-serif"> Moments </span>
      </span>
      <button type="button" onClick={openModalHandler}>
        <img
          src={writeR}
          alt="write_right"
          className="w-16 h-16 absolute bottom-5 right-80"
        />
      </button>
      <button type="button" onClick={openModalHandler}>
        <img
          src={writeL}
          alt="write_left"
          className="w-16 h-16 absolute bottom-5 left-80"
        />
      </button>
      {isOpenModal && <Modal />}
      <Link to="/">
        <img
          src={home}
          alt="home"
          className="w-10 h-10 absolute top-2.5 left-20"
        />
      </Link>
      <button type="button">
        <img
          src={list}
          alt="list"
          className="w-10 h-10 absolute top-3 left-5"
        />
      </button>
    </div>
  );
}
