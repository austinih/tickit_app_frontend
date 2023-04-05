import { useEffect, useState, useContext } from "react";
import axios from "axios";
import '../styles/venueDetails.css'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VenueDetails() {
    
    const [venue, setVenue] = useState({});
    const { venueId } = useParams();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const renderVenue = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/venues/${venueId}`);
                setVenue(response.data);
                setEvents(response.data.events);
            } catch (error) {} 
        };
        renderVenue();
    }, [venueId]);

    // change

    if (!venue) {
        return <h1>Loading, please wait</h1>;}
    return (
        <div>
                
            <img className="venue-image" src={venue.image_url} alt='Venue Image' style={{width: '500px'}}/>
            <h1>Upcoming Events at {venue.name} </h1> 
            <div className="event-list">
                {venue.events ? venue.events.map((event) => (
                        
                    <div className="events-card">
                        <h2 >{event.date}</h2>
                        <h2 >{event.artist}</h2>
                        <h2 className="event-name">{event.title}</h2>
                        <h2 >{event.price}</h2>
                        <h2 >{event.genre}</h2>
                        <Link to={`/tickets/${event.id}`} key={events.id}><button>Tickets
                            </button>
                            </Link>
                        
                    </div>
                )): 
                <h2>No events found</h2>
                }
            </div>
            
        </div>
    )
}

