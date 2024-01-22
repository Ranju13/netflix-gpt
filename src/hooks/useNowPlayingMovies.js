import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../component/utils/movieSlice";
import { useEffect } from "react";
import { FETCH_OPTIONS } from "../component/utils/constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMoviesAPI = async () => {
      try{
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', FETCH_OPTIONS);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
      } catch(err){
        console.log({err})
      }
    }
  
    useEffect(()=>{
      nowPlayingMoviesAPI()
    }, [])
}

export default useNowPlayingMovies;