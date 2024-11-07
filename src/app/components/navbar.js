import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-4'>
      <div className='logo mb-1'>
        <Image width={150} height={40} src="/logo.png" alt="Logo" />
      </div>
      <ul className='flex gap-4' style={{ marginBottom: "auto" }}>
        <li>
          <Link href="/">
           Home
          </Link>
        </li>
        <li>
          <Link href="/posts">
            Posts
          </Link>
        </li>
        <li>
          <Link href="/login">
           Log in
          </Link>
        </li>
        <li>
          <Link href="/register">
           Register
          </Link>
        </li>
      </ul>
    </div>
  );
};