import { useEffect, useState, useContext } from "react";
import axios from "axios";
import '../styles/venues.css'


export default function Venues() {
    
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
                <div className="venue-card" style={{backgroundImage:`url('${venue.image_url}')`}}>
                    <h2 className="venue-name">{venue.name}</h2> 
                    <p className="venue-address">{venue.address}</p>
                    {/* <img className="venue-image" src={venue.image_url} alt='Venue Image' /> */}
                                        
                </div>
                ))}
            
        </div>
        )
    }
}