
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  CardMovie from './Card';


export default function Cards(props){
    console.log("2, inside cards component ", props);
    return (
        <>
          <container fluid className="main-container">
            <div className="d-flex flex-wrap
            justify-content-between w-75 ms-auto me-auto">
        {
            props.movies.map((movie)=>{
                return (
                    <>
                    <CardMovie  key={movie.id} movie={movie}/>
                    </>
                )
    
            })
        }
           </div>
        </container>
    
        
    
        
        
        </>
    )  
    
    
}

