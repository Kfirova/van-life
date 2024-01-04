import { Link } from "react-router-dom"



export default function About(){
    return(
        <div className="about-container">
            <img src="./images/about-hero.png" alt="about hero" className="about-hero-img"/>
            <h1 className="about-title">Don't squeeze in sedan when you could relax in a van</h1>
            <p className="about-text">
                Our mission is to enllven your road trip with the perfect travel van rental. Our vans are recertified before eace trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra)
            </p>
            <p className="about-text">
                Our team is full of vanlife enthusiasts who know firstHand the magic of touring the world on 4 wheels.
            </p>
            <div className="about-destination-container">
                <h3 className="about-destination-title-line1">Your destinantion is waiting.</h3>
                <h3 className="about-destination-title-line2">Your van is ready.</h3>
                <Link className="about-destination-btn" to='/vans'>Explore our vans</Link>
                
            </div>
    </div>
        
    )
}