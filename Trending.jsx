import NavBar from "./NavBar";
import { useState,useEffect } from "react";
import axios from "axios";

function Trending(){
  const [trendingData,setTrendingData] = useState([]);

  useEffect(()=>{
    getTrendingMovieData();
},[]);

  async function getTrendingMovieData(){
    try{
      const API_KEY="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5OGU1NjdkZGVmODA0MGJmNmExOWQ0ZWJlMmU2YzE0NCIsIm5iZiI6MTczNjk2MDY3My4wNzcsInN1YiI6IjY3ODdlYWExOGQ0OWM0NGZhNWJiMWEyZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZT9xft5JTNwrYLDHgQ-rzMceXO4lBTTmfUBeHClo_fk";
      const API_URL=`https://api.themoviedb.org/3/trending/movie/day`;

      let response = await axios.get(API_URL,{headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }})
    setTrendingData(response.data.results);
    }
    catch(e){
      console.log(e);
      }
  }

    return (<>
      <NavBar />
      <div className="flex-container">
          {trendingData.map((item)=>
          <a key={item.id} id={item.id} href={"/"+item.id}>
            <div className="movie-item image-container d-flex justify-content-start m-3">
              <img src={item.poster_path?`https://image.tmdb.org/t/p/w500/${item.poster_path}`:unavailableImageURL}/>
              <h3 className='img__description'>{item.title}({item.release_date?item.release_date.substring(0,4):'N/A'})</h3>
              <div className='overlay d-flex align-items-center justify-content-center'></div>
            </div>
            </a>
          )}
      </div>
    </>);
}

export default Trending;