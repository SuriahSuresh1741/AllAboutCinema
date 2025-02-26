import { useState ,useEffect } from 'react'
import axios from 'axios'
import React from 'react';

import NavBar from './NavBar';

function Home(){
    const [movieData,setMovieData] = useState([]);
    const [movieName,setMovieName] = useState('');
    const unavailableImageURL="https://roadsignsdirect.co.uk/sites/default/files/styles/width600/public/2020-04/image-not-available.png?itok=JbE6zOit";

    function handleSubmit(event){
        event.preventDefault();
        setMovieName(event.target.title.value);
    }

    useEffect(()=>{
        getMovieData(movieName);
    },[movieName]);

    async function getMovieData(movie){
        try{
        const API_KEY=import.meta.env.VITE_API_KEY;
        const API_URL=`https://api.themoviedb.org/3/search/movie?query=${movie}`;

        let response = await axios.get(API_URL,{headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }})
        setMovieData(response.data.results)

        }
        catch(e){
        console.log(e);
        }
    }    

    return (<div>
        <NavBar />
        <div className="body-wrapper">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Name"><img className="brand-logo" src="/assets/watching-a-movie.png" accept=".png" alt="home-logo"/></label>
          <input type="text" id="name" name="title" autoComplete='off'/>
          <button type="submit"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAACZElEQVR4nO1Vy24TMRQ9Csu0NllAkHh8AEXwE4TYhBCbELHhBwqkrfoDs0Wxi2CJQEV8AF2AEB/SFsRT7ArCDkUqog0hQQaiZJzXzCQCJDjSlUaTOfece6+vA4xApnL9GJG6SoV6QoV+QaTeceGe3Tv3m/sG00bmp/BdKlSDSt0eGUI1iFB3MiV9dCris0Kfo1LXxwp7QaT6REsr5YnEiVRXqFStuOLdUC0i9HwicVpaKVOhv/VVJvQ6EerazHl1PJtTaReZ8o05N38i1MaAkTRpSYtY4unizSyR6mM4kf7iOoIgSA0lBkHKmaNS7Xom7Ezl1oHIBohQ931xeqF2OjJf6pxvggi9Grl66p12VxViYlaqBa+IvUhdoEIve+IbI9s+DEGQolJvhs9EbWksjwi9Fl4nXUVC7Bd60cv1YCyJCvW6l5SR6kRiA+XaSW8tXybN9Q/BgL+y4O1uFBKPoI4zp3pzGfA3Y0kWfM0jxV7BDgzYUjgXexTFwLJHWm8j/ho6jgV76hWzOJa4hdxBA97wTFSnUP2eQeFwJLIFv+c53zXIR76KLfJ5Jxg+SyzaVdztAqv3m2DVUeNoo7LPVe6+9bjb73H2EOLAgEkD1gxX8SM2DfILbju2kEu7cM9uvhb82YDvnYGvFvwS4qIONm/AW4OSxo1JTBT9cUQU3P4lOrkJA3bEgN/2t2OwsDt8bPUdilknNjUTHSMfwK8a8McW7LkF37Fgnw3YWwP+0N0h/mGbuokkMGAX+02wZh3scqKESfDfxF/VCTv0YBYS//VP3AkDFvw2cd/EHxHvwCI/1/viOzN7sFXwv3Z0AAAAAElFTkSuQmCC" alt="search" /></button>
        </form>
        <div className="flex-container">
          {movieData.map((item)=>
            <a key={item.id} id={item.id} href={"/"+item.id} ><div className="movie-item image-container d-flex justify-content-start m-3">
              <img src={item.poster_path?`https://image.tmdb.org/t/p/w500/${item.poster_path}`:unavailableImageURL}/>
              <h3 className='img__description'>{item.title}({item.release_date?item.release_date.substring(0,4):'N/A'})</h3>
              <div className='overlay d-flex align-items-center justify-content-center'></div>
            </div>
            </a>
          )}
          </div>
          </div>
        </div>);
}

export default Home;