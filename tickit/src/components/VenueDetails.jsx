import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../styles/venueDetails.css";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VenueDetails() {
  const [venue, setVenue] = useState({});
  const { venueId } = useParams();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const renderVenue = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/venues/${venueId}`
        );
        setVenue(response.data);
        setEvents(response.data.events);
      } catch (error) {}
    };
    renderVenue();
  }, [venueId]);

  // change

  if (!venue) {
    return <h1>Loading, please wait</h1>;
  }
  return (
    <div>
      <div className="venue-header">
        <div className="venue-info">
          <h1>Upcoming Events at {venue.name} </h1>
          <h3>{venue.address}</h3>
        </div>
        <img className="venue-image" src={venue.image_url} alt="Venue Image" />
      </div>
      <div className="event-list-one">
        {venue.events ? (
          venue.events.map((event) => (
            <div className="events-card">
              <div className="details-box" id="details">
                <h3 className="event-date" style={{ width: "15vw" }}>
                  {event.date}
                </h3>
                <div style={{ width: "30vw" }}>
                  <h3>{event.title}</h3>
                  <h3 className="event-artist">{event.artist}</h3>
                </div>
                {/* <h2 >{event.price}</h2> */}
                <h5 style={{ width: "20vw" }}>{event.genre}</h5>
              </div>
              <Link to={`/tickets/${event.id}`} key={events.id}>
                <button className="ticket-button">See Tickets</button>
              </Link>
            </div>
          ))
        ) : (
          <h2>No events found</h2>
        )}
      </div>
    </div>
  );
}
