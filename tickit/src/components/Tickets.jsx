import { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
import axios from "axios";
import "../styles/tickets.css";
import Confirmation from "./Confirmation";
import { useParams } from "react-router-dom";

export default function Tickets() {
  const { eventId } = useParams();
  const [concertData, setConcertData] = useState({});
  const [createForm, setCreateForm] = useState([]);
  const [formValues, setFormValues] = useState({
    event_id: `${eventId}`,
    name: "",
    email: "",
    phone_number: "",
    seat_number: "",
    credit_card_number: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      `http://localhost:8000/create-ticket-detail/`,
      formValues
    );
    console.log(response.data);
    setCreateForm(response.data);
  };

  const ConfirmInfo = async () => {
    const response = await axios.get(`http://localhost:8000/events/${eventId}`);
    setConcertData(response.data);
    console.log(response.data, "line 44");
  };

  useEffect(() => {
    ConfirmInfo();
  }, [])
  
return concertData ? (
  
  <div>
    <div className='info-container'>
      <div className='event-display'>
        <div className='event-details-container'>
          <h1>Event Details:</h1>
          <p className="event-details">🎸 The Concert you've chosen:</p> 
            <p>{concertData.artist}'s: {concertData.title}</p>
        </div>
        <div className='event-price-container'>
          <h1>Pricing:</h1>
          <p className="event-price"> 💵 Each ticket to this event will cost: </p>
          <p> ${concertData.price}</p>
        </div>
      </div>
      <p>Please confirm this information before purchasing your tickets below:</p>
    </div> 
      <div className="form-container">
        <div className="card">
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
            </div>
            <div className="input-wrapper">
              <label className="label" htmlFor="name">
                Name
              </label>
              <input
                className="input-field"
                onChange={handleChange}
                name="name"
                type="text"
                placeholder="Name"
                value={formValues.name}
                required
              />
            </div>
            <div className="input-wrapper">
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                className="input-field"
                onChange={handleChange}
                type="email"
                name="email"
                placeholder="Email"
                value={formValues.email}
                required
              />
            </div>
            <div className="input-wrapper">
              <label className="label" htmlFor="phone_number">
                Phone Number
              </label>
              <input
                className="input-field"
                onChange={handleChange}
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                value={formValues.phone_number}
                required
              />
            </div>
            <div className="input-wrapper">
              <label className="label" htmlFor="credit_card_number">
                Credit Card Number
              </label>
              <input
                className="input-field"
                onChange={handleChange}
                type="text"
                name="credit_card_number"
                placeholder="Credit Card Number"
                value={formValues.credit_card_number}
                required
              />
            </div>
            <div className="input-wrapper">
              <label className="label" htmlFor="seat_number">
                Seat Number
              </label>
              <input
                className="input-field"
                onChange={handleChange}
                type="text"
                name="seat_number"
                placeholder="Seat Number"
                value={formValues.seat_number}
                required
              />
            </div>
            <Confirmation />
            
          </form>
          {createForm && (
            <div>
              {/* <p>{createForm.name}</p>
              <p>{createForm.email}</p>
              <p>{createForm.phone_number}</p>
              <p>{createForm.seat_number}</p>
              <p>{createForm.credit_card_number}</p>
              <p>{createForm.event_id}</p> */}
            </div>
          )}
        </div>
      </div>
    
  </div>
) : <h1> Loading, please wait</h1>

}
