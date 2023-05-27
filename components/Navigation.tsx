import React, { useState } from "react";
import Link from "next/link";
import { VscGithubInverted } from "react-icons/vsc";
import Modal from "./Modal";

const Navigation = () => {
  const [showModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
    <nav
      className={`flex flex-row items-center justify-between px-32 py-5 text-lg font-bold w-full border shadow
    `}
    >
      <div className=" w-1/2 py-3">
        <div>
          <Link
            href="https://github.com/ImPatriciaLofamia"
            passHref={true}
            legacyBehavior
          >
            <a target="_blank">
              <VscGithubInverted size={30} />
            </a>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center  space-x-8 w-1/2">
        <Link href="/">Home</Link>
        <Link href="/about">About me</Link>
        <Link href="/portfolio">Portfolio</Link>
        <button
          onClick={() => {
            setOpenModal(true);
          }}
          className="border shadow rounded-lg  w-auto py-3 px-5 flex justify-center hover:bg-black hover:text-white"
        >
          Curricullum Vitae
        </button>
        </div>
    </nav>
    {showModal && (
      <Modal>
        <div className="flex justify-center">
        <h1 className="text-4xl font-bold">Modal</h1>
        </div>
      </Modal>
    )}
    </>
  );
};

export default Navigation;
