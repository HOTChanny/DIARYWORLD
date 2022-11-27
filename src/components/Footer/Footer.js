import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

/*
import styled from "styled-components";

let 박스 = styled.div`
    font-size: 20px;
`
*/

function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    당신의 모험을 위한 빠른 소식을 전달받는 방법!
                </p>
                
            </section>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up'>How it works</Link>
                        <Link to='/'>Testimonials</Link>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Investors</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='/'>Contact</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Destinations</Link>
                        <Link to='/'>Sponsorships</Link>
                    </div>
                    </div>
                    <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='/'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to='/'>Agency</Link>
                        <Link to='/'>Influencer</Link>
                    </div>
                    <div class='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Facebook</Link>
                        <Link to='/'>Youtube</Link>
                        <Link to='/'>Twitter</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            DIARY WORLD <img className='diary' alt = 'diaryImg'  src = "images/diaryImg.png"/>
                        </Link>
                    </div>
                    <small className="website-rights">DIARY WORLD © 2022</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook" to="/"
                        target = "_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram" to="/"
                        target = "_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link class='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <i class='fab fa-youtube' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                        >
                        <i class='fab fa-twitter' />
                        </Link>
                        <Link
                        class='social-icon-link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                        <i class='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer