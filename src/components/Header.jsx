import React from 'react';
import MenuItem from './MenuItem';
import {AiFillHome} from 'react-icons/ai'
import {BsFillInfoCircleFill} from 'react-icons/bs'
import Link from 'next/link';


export default function Heade() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <div className='flex gap-4'>
            <MenuItem title="home" address="/"  Icon={AiFillHome} />
            <MenuItem title="about" address="/about"  Icon={BsFillInfoCircleFill} />
        </div>

        <Link href={'/'} className='flex item-center'>
            <span className='text-2xl font-bold bg-teal-500 py-1 px-2 rounded-lg text-white'>NEXT</span>
            <span className='text-2xl font-thin text-teal-600 py-1 px-2'>MOVIES</span>
        </Link>
    </div>
  );
}
