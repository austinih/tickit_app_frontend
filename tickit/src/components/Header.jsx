import Nav from "./Nav"
import { Link } from "react-router-dom"
import '../styles/header.css'


export default function Header() {
    return(
       
       <div className="header-container">
            <Link to="/" className="nav-link">
                <h1>Tick-iT</h1>
            </Link>
            <Nav />
            
        </div>
        
    )

}

