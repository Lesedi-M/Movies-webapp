"use client"

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function NavBarItem({title, param}) {

   const searchParams = useSearchParams();
   const genre = searchParams.get('genre'); 

  return (
    <div>
        <Link className={`hover:text-amber-500 font-semibold dark:hover:text-slate-400 ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-orange-300 dark:decoration-slate-400 rounded-lg' : ''} `}
        href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
