import { useEffect, useState, useContext } from "react";
import axios from "axios";
import '../styles/main.css'



export default function Main() {

    const [events, setEvents] = useState([])

    useEffect(() => {
        const renderEvents = async () => {
          const response = await axios.get(`http://localhost:8000/events`);
          setEvents(response.data);
          console.log(response.data)
         
        };
        renderEvents()
    }, [])

    if (!events) {
        return <h1> loading please wait </h1>
        
    } else {





    return(
          <div className="event-list">
            
            {events.map((event) => (
                <div className="event-card" style={{backgroundImage:`url('${event.image_url}')`}}>
                    <h2 className="event-title">{event.title}</h2> 
                    <p className="event-artist">{event.artist}</p>
                    <p className="event-genre">{event.genre}</p>
                    <p className="event-date">{event.date}</p>
                    
                    
                 
                </div>
                ))}
            
        </div>
        )
    }

}   