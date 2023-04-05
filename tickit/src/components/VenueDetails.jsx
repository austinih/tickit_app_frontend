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
            <div className="venue-header">
                <div className="venue-info">
                    <h1 className="venue-details-title">Upcoming Events at  </h1>
                    <break></break>
                    <h1 className="venue-details-title" style={{textDecoration: "underline"}}>{venue.name}</h1>
                    <p className="venue-address">{venue.address}</p>
                </div>
                <img className="venue-image" src={venue.image_url} alt='Venue Image' />
            </div>
            <div className="event-list-one">
                {venue.events ? venue.events.map((event) => (
                    <div className="events-card">
                        <div className="details-box" id="details">
                            <div className="date-time">
                            <h3 className="event-date"style={{width:'15vw'}}>{event.date}</h3>
                            <h4 className="clock">Sun 7:30pm</h4>
                            </div>
                            <div style={{width:'30vw'}}>
                                <h3 className="title-event">{event.title}</h3>
                                <h3 className="event-artist">{event.artist}</h3>
                            </div>
                            {/* <h2 >{event.price}</h2> */}
                            <h5 style={{width:'20vw'}}>{event.genre}</h5>
                        </div>
                            <Link to={`/tickets/${event.id}`} key={events.id} ><button className="ticket-button">See Tickets
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