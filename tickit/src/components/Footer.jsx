import '../styles/footer.css'

export default function Footer() {
    return(
        <div className="footer-container">
            <h3 className="footer-title">Tickit</h3>
            <div className="links-container">
            <p>Contact Us</p>
            <p>Customer Support</p>
            <p>Jobs</p>
            <p>Legal</p>
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