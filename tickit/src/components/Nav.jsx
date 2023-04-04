import { Link } from "react-router-dom"
import '../styles/nav.css'


export default function Nav() {
    return(
        <div className="nav-bar">
           
           <Link to="/venues" className="nav-link">
                Venues</Link>
           <Link to="/" className="nav-link">Home</Link>
           <Link to="/tickets" className="nav-link">Tickets</Link>
           <Link to="/confirmation" className="nav-link">Confirmation</Link>
        </div>
        
    )
}