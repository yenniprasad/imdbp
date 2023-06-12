"use client";
import { useEffect, useState } from 'react';
import Results from './components/Results';

const axios = require('axios');
const API_KEY= process.env.API_KEY;


export default async function Home({searchParams}) {
    
  // const [movies,setMovies] = useState([]);
    var movies;
   
    const genre = searchParams.genre || "fetchTrending";
    const options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/${genre==="fetchTopRated" ? "movie/top_rated" :"trending/all/week"}?language=en-US&page=1`,
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjEzMDZhMTcwYTNmZjk5MDc4NjMxNGZiMjZmMWU4ZiIsInN1YiI6IjY0ODFmNTg5ZTI3MjYwMDBhZmMxNDZiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xuiqeZNk7fjQwNBp-9Y1_Gsq3ByR_IUy7PMuymDtlj8'
      }
    };
    const response = await axios.request(options);
   
    movies = response.data.results;
    // console.log(movies)
    // setMovies(response.data);
  return (
      <div>
          <Results results={movies}/>
      </div>
  )
}
