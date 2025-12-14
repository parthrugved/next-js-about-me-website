  'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './nav.module.css';

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="text-white-600 body-font">
      <div className="container mx-auto flex p-5 items-center justify-between relative">
        <Link href="/" className="flex title-font font-medium items-center text-gray-900">
          {/* <Image src="/vercel.svg" alt="logo" width={40} height={40} style={{ cursor: 'pointer' }} /> */}
          <Image className={styles.logoImg} src="/img/parth logo dark.png" alt="logo" width={80} height={40} style={{ cursor: 'pointer' }} />
        </Link>
      

        <nav className="hidden md:flex md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-gray-400 flex-wrap items-center text-base justify-center">
          <Link href="" className="mr-5 hover:text-white-700">Home</Link>
          <Link href="" className="mr-5 hover:text-white-700">Projects</Link>
          <Link href="" className="mr-5 hover:text-white-700">About Us</Link>
          <Link href="" className="mr-5 hover:text-white-700">Contact Us</Link>
        
        </nav>

        <div className="md:hidden flex items-center w-full justify-end">
          <Link href="" className="text-blue-600 font-semibold absolute left-1/2 transform -translate-x-1/2">
            Projects
          </Link>

          <button onClick={() => setOpen(true)} aria-label="Open menu" className="text-3xl ml-4">
            ☰
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 shadow-xl pt-20 px-6 transition-transform duration-300 md:hidden z-50 ${
          open ? 'translate-x-0' : 'translate-x-full'
        } ${open ? styles.menuOpen : styles.menuClose}`}
      >
        <button onClick={() => setOpen(false)} aria-label="Close menu" className="absolute top-5 right-5 text-3xl">
          ×
        </button>

        <nav className="mt-6">
          <Link href="" className="block py-3 text-lg" onClick={() => setOpen(false)}>Home</Link>
          <Link href="" className="block py-3 text-lg" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="" className="block py-3 text-lg" onClick={() => setOpen(false)}>Contact Us</Link>
          
        </nav>
      </div>
    </header>
  );
};

export default Nav;
