import React from 'react'
import NavBar from './NavBar';
import axios from 'axios';
import { useState,useEffect,useRef } from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Routes,
    useParams,
  } from "react-router-dom";

function Details(){
    const { id } = useParams();
    const [movieData,setMovieData] = useState([]);
    const [creditsData,setCreditData] = useState([]);
    const [imageData,setImageData] =useState([]);
    const unavailableImageURL="https://roadsignsdirect.co.uk/sites/default/files/styles/width600/public/2020-04/image-not-available.png?itok=JbE6zOit";

    useEffect(()=>{
        getMovieData();
    },[]);

    useEffect(()=>{
        getCastData();
    },[]);

    useEffect(()=>{
        getImageData();
    },[]);

    async function getImageData(){
        try{
            const API_KEY=import.meta.env.VITE_API_KEY;
            const API_URL=` https://api.themoviedb.org/3/movie/${id}/images`;
    
            let response = await axios.get(API_URL,{headers: {
                accept: 'application/json',
                Authorization: `Bearer ${API_KEY}`
            }})
            setImageData(response.data.backdrops);
            console.log(response.data.backdrops);
            }
            catch(e){
            console.log(e);
            }
    }

    async function getCastData(){
        try{
        const API_KEY=import.meta.env.VITE_API_KEY;
        const API_URL=`https://api.themoviedb.org/3/movie/${id}/credits`;

        let response = await axios.get(API_URL,{headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }})
        setCreditData(response.data.cast)
        }
        catch(e){
        console.log(e);
        }
    }

    async function getMovieData(){
        try{
        const API_KEY=import.meta.env.VITE_API_KEY;
        const API_URL=`https://api.themoviedb.org/3/movie/${id}`;

        let response = await axios.get(API_URL,{headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }})
        setMovieData(response.data)
        }
        catch(e){
        console.log(e);
        }
    }

    return <>
        <NavBar />
        <div className="poster-item poster-container d-flex justify-content-start m-3">
        <img src={movieData.poster_path?`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`:unavailableImageURL} alt="film-poster"/>
        </div>
        <div className="film-details">
            <h1 className="film">{movieData.title}({movieData.release_date?movieData.release_date.substring(0,4):'N/A'})</h1>
            <h2 className="synopsis">Synopsis: <h3 className='overview'>{movieData.overview}</h3></h2>
            <div>
            <img className="rating-star" src="assets/star.png" alt="ratings-star"/>
            <h3 className="score">{(Number(movieData.vote_average)).toFixed(1)}/10</h3>
            <h2 className='cast'>Cast & Crew:</h2>
            <h2 className='images'>Images:</h2>
            </div>
            {creditsData.slice(0,6).map((item)=>
            <div className='credits'>
            <div className="movie-item image-container d-flex justify-content-start m-3">
              <img src={item.profile_path?`https://image.tmdb.org/t/p/w500/${item.profile_path}`:unavailableImageURL}/>
              <h3 className='img__description'>{item.name} as {item.character?item.character:'N/A'}</h3>
            </div>
            </div> 
            )}
            {imageData.slice(0,9).map((item)=>
            <div className='image-album'>
            <div className="image-item movie-item image-container d-flex justify-content-start m-3">
              <img src={item.file_path?`https://image.tmdb.org/t/p/w500${item.file_path}`:unavailableImageURL}/>
            </div>
            </div> 
            )}
            
    </div>        
    </>
}

export default Details;