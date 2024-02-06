import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../component/utils/movieSlice";
import { useEffect } from "react";
import { FETCH_OPTIONS } from "../component/utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRated = useSelector(store => store.topRated)

    const nowTopRatedMoviesAPI = async () => {
      try{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', FETCH_OPTIONS);
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results));
      } catch(err){
        console.log({err})
      }
    }
  
    useEffect(()=>{
        !topRated && 
        nowTopRatedMoviesAPI()
    }, [])
}

export default useTopRatedMovies;