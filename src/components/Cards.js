
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  CardMovie from './Card';


export default function Cards(props){
    console.log("2, inside cards component ", props);
    return (
        <>
        {
            props.movies.map((movie)=>{
                return (
                    <>
                    <CardMovie movie={movie}/>
                    </>
                )
    
            })
        }
    
        
    
        
        
        </>
    )  
    
    
}

