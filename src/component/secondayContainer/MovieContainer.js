import React from 'react'
import { MOVIE_POSTER } from '../utils/constants'

const MovieContainer = ({movie}) => {
  return (
    <div className='w-48 pr-4'>
        <img
            
            alt='movie poster' 
            src={MOVIE_POSTER + movie?.poster_path} 
            />
    </div>
  )
}

export default MovieContainer