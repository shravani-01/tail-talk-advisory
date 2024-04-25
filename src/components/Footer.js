import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <i class="fa-solid fa-paw fa-0.5x" ></i>
           
              Tail Talk
              {/* <i className="fas fa-cubes fa-1x"></i> */}
              

            </Link>
          </div>
          <small class='website-rights'>Tail Talk © 2024</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/shravani.prasad.77'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link gmail'
              to='shariprasad3296@sdsu.edu'
              target='_blank'
              aria-label='Gmail'
            >
              <i class="fa-solid fa-envelope"></i>
            </Link>
           
            <Link
              class='social-icon-link linkedIn'
              to='https://www.linkedin.com/in/shravani-hariprasad-507280177/'
              target='_blank'
              aria-label='Linked In'
            >
              <i class="fa-brands fa-linkedin-in" style={{fontSize:'25px'}}></i>
            </Link>
           
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;