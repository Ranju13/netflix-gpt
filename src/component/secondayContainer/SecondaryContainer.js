import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=' bg-black'>
      <div className='-mt-60 relative z-30'>
      <MovieList title={'Now Playing'} movies={movies?.nowPlaying}/>
      <MovieList title={'Popular'} movies={movies?.popular}/>
      <MovieList title={'Top Rated'} movies={movies?.topRated}/>
      <MovieList title={'Upcoming'} movies={movies?.upcoming}/>
      </div>
    </div>
  )
}

export default SecondaryContainer