import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {

const movies = useSelector((store) => store.movies?.nowPlaying);

if(!movies) return;

const headerMovie = movies[12];

const { original_title, overview } = headerMovie;

  return (
    <div>
        <VideoTitle  title={original_title} description={overview} />
        <VideoBackground movie={headerMovie}/>
    </div>
  )
}

export default MainContainer