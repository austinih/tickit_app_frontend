import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import '../styles/tickets.css'

export default function Tickets() {

    let navigate = useNavigate()

    const [formValues, setFormValues] = useState({name: '', email: '', phone_number: ''})

    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault()
    //     try {
    //         const response = await axios.post("API Endpoint here", formValues)
    //         const data = response.data
    //         setFormValues(data)
    //         setFormValues({name: '', email: '', phone_number: ''})
    //     } catch(error) {

    //     }
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
        setFormValues(formValues);
        setFormValues({ name: '', email: '', phone_number: '' });
      }






    return(
        <div>
           <h1>Tickets Page</h1>     
           <div className="form-container">
  <div className="card">
    <form className="form" onSubmit={handleSubmit}>
      <div className="input-wrapper">
        <label className="label" htmlFor="username">Name</label>
        <input
          className='input-field'
          onChange={handleChange}
          name="name"
          type="username"
          placeholder="Name"
          value={formValues.name}
          required
        />
      </div>
      <div className="input-wrapper">
        <label className='label' htmlFor="email">Email</label>
        <input
          className='input-field'
          onChange={handleChange}
          type="email"
          name="email"
          placeholder='Email'
          value={formValues.email}
          required
        />
      </div>
      <div className="input-wrapper">
        <label className='label' htmlFor="phone_number">Phone Number</label>
        <input
          className='input-field'
          onChange={handleChange}
          type="phone_number"
          name="phone_number"
          placeholder='Phone Number'
          value={formValues.phone_number}
          required
        />
      </div>
      <button className='submit-btn' disabled={formValues.username === '' || !formValues.password === '' || formValues.phone_number === ''}>
        Submit
      </button>
    </form>
  </div>
</div>

</div>
)
}