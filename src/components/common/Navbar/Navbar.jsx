import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import NavLinks from "./NavLinks";
import Head from "../header/Head";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>

    <nav className="bg-opacity-70 backdrop-blur-lg fixed w-full h-13 shadow-lg z-50">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50  md:w-auto w-full flex justify-between">
          <img src="https://i.imgur.com/yqawPSs.png" alt="logo" className="md:cursor-pointer h-10" />
          <div className="text-lg md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-2 font-[Poppins]">
          <li>
            <Link to="/" className="py-1 px-3 inline-block text-lg">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-1 px-3 inline-block text-lg">
              Resources
            </Link>
          </li>
          <li>
            <Link to="/" className="py-1 px-3 inline-block text-lg">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="md:block hidden">
          <Button />
        </div>
        <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
