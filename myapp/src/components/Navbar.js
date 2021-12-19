import React from 'react'
//import { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';


export default function Navbar() {

    const [home, setHome] = useState(true);
    const [video, setVideo] = useState(false);

    function changeHome(isHome) {
        if(!isHome){
            setHome(false);
        } else {
            setHome(true);
        }
    }

    return (
        <div className="navbar-bg-img" style={{
            // backgroundImage: home ? 'url('+book2+')' : "url()",
            height: home ? "100vh" : "",
        }}>
            <div className="christmas-video" id='cv'>
                {video ? <iframe width="1000" height="800" src="https://www.youtube.com/embed/tl57Gy5X_Kg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> : ""}
                {video ? <button className='christmas-video-button' onClick={() => {setVideo(false)}}>Clear</button> : ""}
           </div>
            <div className="navbar-container" style={{
            filter: video ? "blur(3px)" : "",
        }}>
                <Link to="/" className="navbar-logo" onClick={() => {changeHome(true)}}>Family <FontAwesomeIcon icon={ faPlaceOfWorship } size="2x" /></Link>
                <nav className="nav">
                        <ul className="nav-items">
                            <li className='nav-item-li' onClick={() => {changeHome(true)}}>
                                <Link to="/" className="nav-item-link">Home</Link>
                            </li>
                            <li className='nav-item-li' onClick={() => {changeHome(false)}}>
                                <Link to="/cards" className="nav-item-link">Cards</Link>
                            </li>
                            <li className='nav-item-li' onClick={() => {changeHome(false)}}>
                                <Link to="/wishlist" className="nav-item-link">Wishlist</Link>
                            </li>
                        </ul>
                </nav>
                <button className="navbar-btn">Contact</button>
            </div>
            <div className="home-container" style={{
                display: home ? 'flex' : 'none',
                filter: video ? "blur(3px)" : "",
            }}>
                <div className="home-text">
                    <h1>Merry Christmas, <br /> To Family & Friends</h1>
                    <h4>Make your wishes come true</h4>
                </div>
                <div className="home-cta">
                    <button className="home-start">
                        <Link to="/wishlist" className="start-link" onClick={() => {changeHome(false)}}>Get Started</Link>
                    </button>
                    <button onClick={() => {setVideo(true);}} className="home-video">
                        Watch Video
                    </button>
                </div>
            </div>
        </div>
    )
}
