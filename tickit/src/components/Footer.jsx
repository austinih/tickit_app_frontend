import '../styles/footer.css'

export default function Footer() {
    return(
        <div className="footer-container">
            <h3 className="footer-title">Tick-iT</h3>
            <div className="links-container">
            <p className='footer-links'>Contact Us</p>
            <p className='footer-links'>Customer Support</p>
            <p className='footer-links'>Jobs</p>
            <p className='footer-links'>Legal</p>
            </div>
            <form className="newsletter-form">
            <div className="newsletter-input-container">
            <label htmlFor="newsletter-email"></label>
            <input type="email" id="newsletter-email" name="newsletter-email" placeholder="Email" required />
            <button>Submit</button>
            </div>
            
        </form>
        </div>
    )
}