import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { BsFillHandThumbsUpFill } from 'react-icons/bs'

export default function Card({result}) {
    const voteAveragePercentage = (result.vote_average * 10).toFixed(2) + '%';

    const isMovie = result.media_type === 'movie';
    const href = isMovie ? `/movie/${result.id}` : `/tvshow/${result.id}`;
  return (

    <div className='group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg border sm:border sm:border-slate-400 m-2 sm:m-2 transition-shadow duration-200'>
        <Link href={href}>
            <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`}
                width={500}
                height={300}
                className='sm:rounded-t-lg group-hover:opacity-75 rounded-t-lg transition-opacity duration-300'
            ></Image>
            <div className='p-2'>
                <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
                <p className='line-clamp-2'>{result.overview}</p>
                <p className='flex items-center '>
                    {result.release_date || result.first_air_date}
                    <BsFillHandThumbsUpFill className='h-5 mr-1 ml-3'/>
                    {voteAveragePercentage}
                </p>
                <p className='flex items-center capitalize'> {result.media_type}</p>
                
            </div>
        </Link>
    </div>
  )
}
