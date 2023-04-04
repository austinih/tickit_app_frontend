import { useEffect, useState } from "react";
import axios from "axios";
import '../styles/main.css';
import { Link } from "react-router-dom";

export default function Main() {
  const [events, setEvents] = useState([]);
  const [search, setSearch] = useState({
    searchBar: "",
    formInput: "",
    isSubmitted: false,
  });

  useEffect(() => {
    const renderEvents = async () => {
      const response = await axios.get(`http://localhost:8000/events`);
      setEvents(response.data);
    };
    renderEvents();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch({
      ...search,
      [e.target.id]: e.target.value,
      formInput: e.target.value,
      isSubmitted: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch({ ...search, isSubmitted: true });
  };

  const filteredEvents = search.isSubmitted
    ? events.filter((event) =>
        event.title.toLowerCase().includes(search.formInput.toLowerCase())
      )
    : events;

  if (events.length === 0) {
    return <h1>Loading, please wait</h1>;
  }

  return (
    <div className="event-list">
      {filteredEvents.map((event) => (
        <Link to={`/tickets/${event.id}`} key={events.id}>
        <div
          key={event.id}
          className="event-card"
          style={{ backgroundImage: `url('${event.image_url}')` }}
        >
          <h2 className="event-title">{event.title}</h2>
          <p className="event-artist">{event.artist}</p>
          <p className="event-genre">{event.genre}</p>
          <p className="event-date">{event.date}</p>
        </div>
        </Link>
      ))}
      <div className="search-box">
        <input
          type="text"
          id="searchBar"
          placeholder="Event search....."
          value={search.formInput}
          onChange={handleChange}
        />

        <button type="button" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
    
  );
}
