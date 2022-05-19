import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function favList(){
    return (
        <>
        {/* <nav>
            <Link to="/" > Home </Link>
            <Link to="/favList" > Favorite list </Link>

        </nav> */}

<Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">movie</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/favList">Fav list</Nav.Link>
      
    </Nav>
    </Container>
  </Navbar>
        </>
    )
}
export default favList;


