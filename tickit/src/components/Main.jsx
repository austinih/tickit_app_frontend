import { useEffect, useState, useContext } from "react";
import axios from "axios";



export default function Main() {

const [venue, setVenue] = useState({})




useEffect(() => {
    const renderVenues = async () => {
      const response = await axios.get(`http://localhost:8000/venues/1`);
      setVenue(response.data);
      console.log(response.data)
    };
    renderVenues()
  }, [])










    return(
        <div className="main-container">
            <h2>{venue.name}</h2>
            <h3>Home Page</h3>
        </div>
    )
}