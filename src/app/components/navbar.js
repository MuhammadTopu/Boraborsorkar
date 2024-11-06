import React from 'react'
import Link from 'next/link';

export const Navbar =()=>{
    return(
        <nav className='mx-2 justify-center flex gap-5'>
     <Link href="/">Home</Link>
     <Link href="/post">Post</Link>
     <Link href="/about">About</Link>
        </nav>
    
    );
};


