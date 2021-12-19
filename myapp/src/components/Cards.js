import React from 'react'
import birthday from '../images/birthday.svg';
import dad from '../images/dad.png';
import mom from '../images/mom.jpg';
import olderSister from '../images/olderSister.png';
import youngerSister from '../images/youngerSister.jpg';
import { useState } from 'react';

export default function Cards() {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(0);

    let cards = [{
        "name": "William Butler",
        "text": "Dear Dad, Thank you and Merry Christmas! This isn't the ideal or standard christmas gift that everyone gets, but I think it's up there with unorthodox ones. Wouldn't be an Adrian gift without something unorthodox though. Love you Dad, hope you have the best Christmas Ever!",
        "id": 1
    }, {
        "name": "Jingle Butler",
        "text": "Blessed Mom she is! I love you mom. I hope you have a Merry Christmas and are able to receive all the things you deserve and want, *Cough* *Cough* not from me. Regardless we're going to have a splendid christmas together with the family and enjoy our moment together. From son to bird nest...Love ya Mom!",
        "id": 2
    }, {
        "name": "Wynonna Tesoro",
        "text": "On the twelfth day of christmas oh Santa gave to me! An ugly sister at best. Ugh, looks like I'm always on the naughty list every year. Jokes aside, Merry Christmas sis, I hope you aren't so spoiled this year like you are every year ;), Love ya!",
        "id": 3
    }, {
        "name": "Brielle Parker",
        "text": "I've always wanted a little brother...You make me so happy and I am delighted to be able to do all those boyish/manly things with you. No really, I appreciate you and everything you have been for me...Love you lil bro!",
        "id": 4
    }];

    function openCard(id){
        setOpen(!open);
        setSelected(id);
    }

    
    return (

        <div className="cards-container">
            {cards.map((card) => 
                <div className="card-final">
                    <div className="card-view" key={card.id}>
                        <h1>{card.name}</h1>
                        <div className="card">
                            <div className="single-card-container-front" onClick={() => {openCard(card.id)}} style={{
                                transform: card.id === selected && open ? "perspective(2500px) translate(-500px) rotateY(-180deg)" : "perspective(2500px)"
                            }}>
                                
                                <p className='card-front-text' style={{
                                    visibility: open ? "hidden" : ""
                                }}>{card.id == 1 ? "The Loving Father" : (card.id == 2 ? "Dance Mom" : (card.id == 3 ? "Sister Mary? No... Sister Unstable" : (card.id == 4 ? "Most Likely To Be A Boy" : birthday)))}</p>
                            </div>
                            <div className="single-card-container-back">
                                <img src={card.id == 1 ? dad : (card.id == 2 ? mom : (card.id == 3 ? olderSister : (card.id == 4 ? youngerSister : birthday)))} alt="birthday" className="birthday-image"/>
                                <p className='card-back-text' style={{
                                    visibility: open ? "" : "hidden"
                                }}>{card.text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
