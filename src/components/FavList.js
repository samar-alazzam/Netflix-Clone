import {useState , useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

 export default function FavList(props){
     const [favMovies , setFavMovies] = useState();

     async function getFavMovies(){
         let url=`${process.env.REACT_APP_SERVER}/getMovies`;
         let response= await fetch(url,{
             method :'GET'
         });
         let receiveData = await response.json();
         setFavMovies(receiveData);
     }

     async function handleDelete(id){
         let url=`${process.env.REACT_APP_SERVER}/deleteMovie?Id=${id}`;
         let response= await fetch(url , {
             method : 'DELETE',
         })
        // let deleteMovie = await response.json();

         if(response.status===204){
             alert("movie deleted successfully");
         }
     }





     useEffect(()=>{
         getFavMovies();

     },[])




    return (
        <>
        <h1>Favorite Movies Page  </h1>
        {
          favMovies && favMovies.map((favMovie)=>{
              return (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${favMovie.image}`} />
                <Card.Body>
                  <Card.Title>{favMovie.title || ' null '}</Card.Title>
                  <Card.Text>
                  {favMovie.overview}
                  </Card.Text>
                  <Card.Text>
                          {favMovie.release_date || 'There is no release date'}
                  </Card.Text>
                  <Card.Text>
                          {favMovie.comment}
                  </Card.Text>
                  <Button varient="primary" onClick={()=>handleDelete(favMovie.id)}>Delete</Button>
                </Card.Body>
              </Card>
              )
          })  
        }
        
        </>
    )
}