import Image from 'next/image';
import React from 'react';
import Head from 'next/head';

export default async function MoviePage({params}) {
    const movieId = params.id;
    const res = await fetch(`https://api.themoviedb.org/3/tv/${movieId}?api_key=${process.env.API_KEY}`);
    const cast = await fetch(`https://api.themoviedb.org/3/tv/${movieId}/credits?api_key=${process.env.API_KEY}`);
    const trailerResponse = await fetch(`https://api.themoviedb.org/3/tv/${movieId}/videos?api_key=${process.env.API_KEY}`);
    const trailerData = await trailerResponse.json();

    // Filter the results to get only the trailer
    const trailer = trailerData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');

    // Extract the trailer key (YouTube video ID)
    const trailerKey = trailer ? trailer.key : null;

    // Construct the YouTube URL for embedding the trailer
    const trailerURL = trailerKey ? `https://www.youtube.com/watch?v=${trailerKey}` : null;

    const movieCast = await cast.json();
    const movie = await res.json();
    const voteAveragePercentage = (movie.vote_average * 10).toFixed(2) + '%';
    const castInfo = movieCast?.cast?.map(member => ({
        name: member.name,
        profilePath: member.profile_path
      })) || [];

    const castImages = castInfo.map(member => `https://image.tmdb.org/t/p/original/${member.profilePath}`);
    console.log(movie);

    const metaTitle = `${movie.title || movie.name} - Next Movies`;

  // Generate dynamic meta description based on the movie details
  const metaDescription = `${movie.title || movie.name}: ${movie.overview}`;

  return (
    <div className='w-full'>
          <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
        <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl max-auto md:space-x-6'>
            <Image
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
                width={500}
                height={300}
                className='rounded-lg hover:opacity-75 transition-opacity duration-300'
                style={{maxWidth: '100%', height: '100%'}}
            ></Image>
            <div className='p-2'>
                <h2 className='text-lg mb-3 font-bold'>{movie.title || movie.name}</h2>
                <p className='text-lg mb-3'>{movie.overview}</p>
                <p className='mb-3'>
                    <span className="font-semibold mr-1">Date Released:</span>
                    {movie.release_date || movie.first_air_date}
                </p>
                <p className='mb-3'>
                <span className="font-semibold mr-1">Rating:</span>
                {voteAveragePercentage}</p>
                <p className='mb-3'>
                <span className="font-semibold mr-1">Genre:</span> {movie.genres ? movie.genres.map(genre => genre.name).join(', ') : ''}</p>
                <p className='mb-3'>
                <span className="font-semibold mr-1">Runtime:</span>
                {movie.runtime}</p>
                <p className='mb-3'>
                <span className="font-semibold mr-1">Production Companies:</span>
                {movie.production_companies ? movie.production_companies.map(production_companies => production_companies.name).join(', ') : ''}</p>
                
               
            </div>
            
        </div>

        <div className='mb-3 p-4 flex flex-wrap gap-4'>
        <p className='font-bold text-xl w-full'>Trailer</p>
        {trailerURL && (
            <iframe
            width="100%"
            height="500"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        )}
        </div>


        <div className='mb-3 p-4 flex flex-wrap gap-4'>
  <p className='font-bold text-xl w-full'>Credits</p>
  {castInfo.slice(0, 5).map((member, index) => (
    <div key={index} className='w-1/5 py-2 '>
      <p>{member.name}</p>
      <Image
        src={castImages[index]}
        alt={`Profile of ${member.name}`}
        width={350}
        height={200}
        className='rounded-lg hover:opacity-75 transition-opacity duration-300'
        style={{maxWidth: '100%', height: '100%'}}
      />
    </div>
  ))}
</div>  
    </div>
  )
}
