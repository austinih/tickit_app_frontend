import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/venues.css'
import { Link } from "react-router-dom";


export default function Venues() {
    
    let navigate = useNavigate()
    const [venues, setVenues] = useState([])

    useEffect(() => {
        const renderVenues = async () => {
          const response = await axios.get(`http://localhost:8000/venues`);
          setVenues(response.data);
          console.log(response.data)
         
        };
        renderVenues()
    }, [])
    
   
    if (!venues) {
        return <h1> loading please wait</h1>
        
    } else {

    return (
                
        <div className="venue-list">
            
            {venues.map((venue) => (
                <Link to={`/venues/${venue.id}`} key={venue.id}>
                    <div className="venue-card" style={{backgroundImage:`url('${venue.image_url}')` }} >
                        <div className="img-caption">
                        <h2>{venue.name}</h2> 
                        <p>{venue.address}</p>    
                        </div>                  
                    </div>
                </Link>
                ))}
            
        </div>
        )
    }
}