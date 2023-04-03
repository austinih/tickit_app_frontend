import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import '../styles/tickets.css'


export default function Tickets() {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({name: '', email: '', phone_number: ''})

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formValues)
    const response = await axios.post(`http://localhost:8000/create-ticket-detail/`, formValues)
    console.log(response.data)
    setCreateForm(response.data)
  }

  

return (
  <div>
    <h1>Tickets Page</h1>
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
          <button className="submit-btn">
  Submit
</button>
        </form>
        {createForm && (
          <div>
            <h2>{createForm.event}</h2>
            <p>{createForm.name}</p>
            <p>{createForm.email}</p>
            <p>{createForm.phone_number}</p>
            <p>{createForm.seat_number}</p>
            <p>{createForm.credit_card_number}</p>
          </div>
        )}
      </div>
    </div>
  </div>
);
}











