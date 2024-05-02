import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div>
        <footer>
            <div className='footer-box'>
                <div className='footer-a'>
                    <a href="#">About Us</a>
                    <a href="#">Support</a>
                    <a href="#">Blog</a>
                    <a href="#">Mobile</a>
                </div>
                <div className='footer-p'>
                    <p>© 2006 - 2024 Cleartrip Pvt. Ltd.</p>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer