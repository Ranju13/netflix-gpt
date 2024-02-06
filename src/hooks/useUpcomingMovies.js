import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../component/utils/movieSlice";
import { useEffect } from "react";
import { FETCH_OPTIONS } from "../component/utils/constants";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcoming = useSelector(store => store.upcoming)

    const nowUpcomingMoviesAPI = async () => {
      try{
        const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', FETCH_OPTIONS);
        const json = await data.json();
        dispatch(addUpcomingMovies(json.results));
      } catch(err){
        console.log({err})
      }
    }
  
    useEffect(()=>{
        !upcoming && 
        nowUpcomingMoviesAPI()
    }, [])
}

export default useUpcomingMovies;