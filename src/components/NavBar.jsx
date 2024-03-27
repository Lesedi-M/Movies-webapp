import React from 'react'
import NavBarItem from './NavBarItem'

export default function NavBar() {
  return (
    <div className='flex bg-orange-200 dark:bg-slate-600 p-4 lg:text-lg justify-center gap-6'>
        <NavBarItem title="Trending" param="fetchTrending" />
        <NavBarItem title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
