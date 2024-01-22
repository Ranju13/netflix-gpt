import React from 'react'
import MovieContainer from './MovieContainer'

const MovieList = ({ title, movies }) => {
  return (
    <div className='px-6'>
        <h2 className='text-2xl py-4 text-white'>{title+' >'}</h2>
    <div className='flex  overflow-x-scroll'>
        
        <div  className='flex'>
        {movies?.map((movie) => <MovieContainer key={movie.id} movie={movie}/>)}
        </div>
        </div>
    </div>
  )
}

export default MovieList