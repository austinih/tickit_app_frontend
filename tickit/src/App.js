import './App.css';
import {Routes, Route} from 'react-router-dom'
import Confirmation from './components/Confirmation'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import Tickets from './components/Tickets'
import VenueDetails from './components/VenueDetails'
import Venues from './components/Venues'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <div>
          
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/venues" element={<Venues />} />
            <Route path="/venues/:venueId" element={<VenueDetails />} />
            <Route path="/tickets/" element={<Tickets />} />
            {/* Add back :eventId after testing^ */}
            <Route path="/confirmation/:ticketId" element={<Confirmation />} />


          </Routes>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
