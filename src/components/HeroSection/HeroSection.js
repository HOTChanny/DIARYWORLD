import React from 'react'
import '../../App.css';
import { Button } from '../Button/Button'
import './HeroSection.css';


function HeroSection() {
    return (
        <div className = 'hero-container'>
            { <video src="/videos/루디움짤.mp4" autoPlay loop muted />} 
            
            <h1>Write Your Adventure!</h1>
            <p>당신의 일상을 기록하고 나만의 캐릭터를 성장시켜보세요!</p>
            <div className="hero-btns">
                <Button className = 'btns' buttonStyle = 'btn--outline' 
                buttonSize = 'btn--large'>시작하기!</Button>
                 
                
            </div>
               
        </div>
    )
}

export default HeroSection;