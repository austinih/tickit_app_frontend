import { useEffect, useState, useContext } from "react";
import axios from "axios";
import '../styles/venueDetails.css'

export default function VenueDetails() {
    
    const [venues, setVenues] = useState({})

    useEffect(() => {
        const renderVenue = async () => {
          const response = await axios.get(`http://localhost:8000/venues/1`);
          setVenues(response.data);
          console.log(response.data)
         
        };
        renderVenue()
    }, [])
    
   
    if (!venues) {
        return <h1> loading please wait</h1>
        
    } else {
    
    
    
        return (
            <div>
                
                <img className="venue-image" src={venues.image_url} alt='Venue Image' style={{width: '500px'}}/>
                <h1>Upcoming Events at {venues.name} </h1> 
                <div className="event-list">
                    {venues.events ? venues.events.map((event) => (
                        
                        <div className="events-card">
                            <h2 >{event.date}</h2>
                            <h2 >{event.artist}</h2>
                            <h2 className="event-name">{event.title}</h2>
                            <h2 >{event.price}</h2>
                            <h2 >{event.genre}</h2>

                        </div>
                    )):null}
                </div>
            
        </div>
        )
    }
}

