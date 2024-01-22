import React, { useRef } from 'react';
import changeLanguage from '../utils/changeLanguage';
import { useSelector } from 'react-redux';
import openai from '../utils/openai'

const SearchGptSearchBar = () => {
  const lang = useSelector((store) => store.config?.lang);
  const textRef = useRef(null);

  const submitClickHandler = async() =>{
    const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query:" + 
    textRef.current.value 
    + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example: Robot, Endhiran, Ra-One, Don"

    console.log({gptQuery})
    const OpenAPiResponse = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery}],
      model: 'gpt-3.5-turbo',
    });
    console.log(OpenAPiResponse)
  }
  
  return (
    <div className='pt-16'>
        <div className='flex justify-center my-16 '>
        <input 
            className='my-5 mr-3 border px-4 py-2 rounded-md bg-gray-900 text-white w-1/4' 
            type='text' 
            placeholder={changeLanguage[lang].label}
            ref={textRef}
            />
        <button 
          className='bg-red-900 text-white rounded-md my-5 mx-3 px-4'
          onClick={()=>submitClickHandler()}
          >{changeLanguage[lang].search}</button>
        </div>
        
    </div>
  )
}

export default SearchGptSearchBar