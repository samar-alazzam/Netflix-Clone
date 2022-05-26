
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {useState} from 'react';
import ModalMovie from './ModalMovie';


export default function CardMovie(props){
  const [show, setShow] = useState(false);
  const [chosenMovie , setChosenMovie]=useState();

  const handleClose = () => setShow(false);
  const handleShow = (movie) => {
    setChosenMovie(movie);
        setShow(true);
  }
    


    return (
    <>
   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
  <Card.Body>
    <Card.Title>{props.movie.title || ' null '}</Card.Title>
    <Card.Text>
    {props.movie.overview}
    </Card.Text>
    <Card.Text>
            {props.movie.release_date || 'There is no release date'}
    </Card.Text>
    <Button variant="danger" onClick={() => handleShow(props.movie)}>Add To Favorite</Button>
  </Card.Body>
</Card>
{
  chosenMovie && <ModalMovie show={show} handleClose={handleClose}  chosenMovie={chosenMovie}/>

}


    

    
    
    </>
    )
}