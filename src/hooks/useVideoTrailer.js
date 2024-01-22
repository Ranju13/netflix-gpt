import { useDispatch } from "react-redux";
import { FETCH_OPTIONS } from "../component/utils/constants";
import { addTrailerVideo } from "../component/utils/movieSlice";
import { useEffect } from "react";

const useVideoTrailer = (id) => {

    const dispatch = useDispatch();
  
    const getVideoDetails = async() => {
      const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, FETCH_OPTIONS);
      const json = await data.json();
  
      const filteredData = json.results.filter((video)=> video.type === "Trailer") ;
      const trailer = filteredData.length ? filteredData[0] : json?.results[0]
      dispatch(addTrailerVideo(trailer));
    }
  
    useEffect(()=>{
      getVideoDetails();
    })

}

export default useVideoTrailer;