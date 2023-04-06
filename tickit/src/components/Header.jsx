import { Link } from "react-router-dom"
import '../styles/header.css'


export default function Header() {
    return(
       
       <div className="header-container">
            <Link to="/" className="nav-link">
                <h1 className="header-text">Tick-iT</h1>
            </Link>
            <h4>Denver Metro Area</h4>
            <Link to="/venues" className="nav-link">
                <h1 className="header-text">Venues</h1></Link>
            
            
        </div>
        
    )

}

