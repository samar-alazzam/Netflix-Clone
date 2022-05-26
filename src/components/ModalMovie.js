
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
export default function ModalMovie(props){
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
    <Form.Control type="text" placeholder="Enter your comment" />
    <Form.Text className="text-muted">
      add your own comment
    </Form.Text>
  </Form.Group>

  
  <Button variant="primary" type="submit">
    Submit
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



