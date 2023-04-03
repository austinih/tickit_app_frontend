import { Link } from "react-router-dom"
import '../styles/nav.css'


export default function Nav() {
    return(
        <div className="nav-bar">
           <Link to="/">
                Home
           </Link>
           <Link to="/venues">
                Venues
           </Link>
           <Link to="/tickets">Tickets</Link>
           <Link to="/confirmation">Confirmation</Link>
        </div>
        
    )
}