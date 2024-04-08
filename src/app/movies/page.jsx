import React from 'react'
import Results from '@/components/Results';
import Head from 'next/head';

const API_KEY = process.env.API_KEY;

export default async function Movies({ searchParams }) {
    const genre = searchParams.genre || 'fetchTrending';
    const res = await fetch(
      `https://api.themoviedb.org/3${
        genre === 'popular' ? `/movie/popular` : `/movie/popular`
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    const results = data.results;

    const metaTitle = `Trending movies and shows ${
        results.length > 0 ? `Showing ${results.length} results.` : 'No results found.'
      }`;
      // Set the meta description dynamically based on the fetched data
      const metaDescription = `Discover trending movies from around the world. ${
        results.length > 0 ? `Showing ${results.length} results.` : 'No results found.'
      }`;
  
    return (
      <div>
         <Head>
            
            <meta name="title" content={metaTitle}/>
            <meta name="description" content={metaDescription} />
      </Head>
        <Results results={results} />
      </div>
    );
}
