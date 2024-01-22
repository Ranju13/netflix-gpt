import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../../hooks/useNowPlayingMovies'
import usePopularMovies from '../../hooks/usePopularMovies';
import useTopRatedMovies from '../../hooks/useTopRatedMovies';
import useUpcomingMovies from '../../hooks/useUpcomingMovies';
import Header from '../login/Header'
import MainContainer from '../mainContainer/MainContainer';
import SearchGPT from '../secondayContainer/SearchGPT';
import SecondaryContainer from '../secondayContainer/SecondaryContainer';

const Browse = () => {
  const gptSwitch = useSelector((store)=> store?.gpt?.gptSwitch);
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();
  return (
    <div>
      <Header />
      { gptSwitch ? <SearchGPT /> : <><MainContainer />
      <SecondaryContainer /></>}

    </div>
  )
}

export default Browse