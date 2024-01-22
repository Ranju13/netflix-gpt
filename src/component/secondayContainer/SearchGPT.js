import React from 'react'
import SearchGptSearchBar from './SearchGptSearchBar'
import SearchMovieSuggestion from './SearchMovieSuggestion'
import { BACKGROUND_IMAGE } from '../utils/constants'

const SearchGPT = () => {
  return (
    <div>
       <div className='absolute -z-20'>
            <img
                className=''
                src={BACKGROUND_IMAGE}
                alt = 'login background'
            />
       </div>
      <SearchGptSearchBar/>
      <SearchMovieSuggestion/>
    </div>
  )
}

export default SearchGPT