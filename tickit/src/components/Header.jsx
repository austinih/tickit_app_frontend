import { Link } from "react-router-dom"
import '../styles/header.css'


export default function Header() {
    return(
       
       <div className="header-container">
            <Link to="/" className="nav-link">
                <h1>Tick-iT</h1>
            </Link>
             <h3>Denver Metropolitan</h3>   
            <Link to="/venues" className="nav-link">
                <h1>Venues</h1></Link>
       
            
        </div>
        
    )

}

