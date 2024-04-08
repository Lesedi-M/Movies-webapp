import React from 'react'
import Results from '@/components/Results';

const API_KEY = process.env.API_KEY;

export default async function Tv({ searchParams }) {
    const genre = searchParams.genre || 'fetchTrending';
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'trending' ? `/trening/tv/week` : `/trending/tv/week`
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const results = data.results;
  
    return (
      <div>
        <Results results={results} />
      </div>
    );
}
