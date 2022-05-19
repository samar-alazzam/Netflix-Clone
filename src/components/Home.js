import { Button } from 'react-bootstrap';
import {useEffect , useState} from 'react';
import Cards from './Cards';
import axios from 'axios'; 
//import "./style.css"; 
 export default function Home(){
     const [movies , setMovies]=useState([]);

   async function getMovies() {
       // let serverUrl = process.env.REACT_KEY_SERVER;
       let url="https://movie-j-01.herokuapp.com/trending"
        

       axios.get(url).then((result)=>{
        setMovies(result.data)

       }
           
       ).catch()

    //     let response = await fetch(url,{
    //         method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
      
    //   mode: 'nocors'
    //     });
    //     let movieData = await response.json();
    //     setMovies(movieData);
    //     console.log(1,"after updating");
    }

    useEffect(()=>{
        getMovies();
    }, [])





    return (
        <>
        <h1>Home page</h1>
        {/* <button>Old Way </button> */}
        <br/>
        <Button variant="success">Get Movie</Button>
        {
              (movies.length > 0) &&  <Cards movies={movies}/>
        }
       
        
        </>
    )
}