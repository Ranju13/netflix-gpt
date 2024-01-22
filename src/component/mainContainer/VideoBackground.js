import { useSelector } from 'react-redux';
import useVideoTrailer from '../../hooks/useVideoTrailer';

const VideoBackground = ({movie}) => {
  const trailerKey = useSelector((store) => store.movies?.trailerVideo?.key);

  useVideoTrailer(movie.id)

  return (
    <div className='w-screen'>
      <iframe
        className='w-screen aspect-video'
        src={"https://www.youtube.com/embed/"+ trailerKey + "?autoplay=1&mute=1"}
        frameBorder='0'
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      >
      </iframe>
    </div>
  )
}

export default VideoBackground