
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React , { useRef } from 'react';




export default function ModalMovie(props){
  let commentRef= useRef();

  function handleComment(e){
    e.preventDefault();
    let userComment= commentRef.current.value;
    console.log({userComment});
    let newMovie={...props.chosenMovie, userComment}
    props.updateMovie(newMovie , props.chosenMovie.id);
  }
async function handleAddFav(e , movie){
    e.preventDefault();
    let url= "https://movie-j-01.herokuapp.com/addMovie";
    let data={
      title:movie.title ,
      overview:movie.overview,
      poster_path:movie.poster_path,
      comment:movie.comment
    }
    let response = await fetch (url,{
      method : 'POST',
      Header:{
        'content - Type': 'application/json'
      },
      body: JSON.stringify(data),
      mode: 'cors'
    })
    let addedMovie= await response.json();
    console.log("addedMovie" , addedMovie);
  }
  

  



    return(
    <>
    
      <Modal show={props.show}  onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.chosenMovie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={`https://image.tmdb.org/t/p/w400/${props.chosenMovie.poster_path}`} alt="Movie poster" />
        {props.chosenMovie.overview}
        <br/>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>comment</Form.Label>
    <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
    <Form.Text className="text-muted">
      add your own comment
    </Form.Text>
  </Form.Group>

  
  <Button variant="primary" type="submit" onClick={(e)=>handleComment(e)}>
    Submit comment
  </Button>

  <Button variant="primary" type="submit" onClick={(e)=>{handleAddFav(e , props.chosenMovie)}}>
    Add to favorites
  </Button>
</Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </>
    )
    

}



