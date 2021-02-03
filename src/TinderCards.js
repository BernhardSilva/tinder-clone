import { SwipeableDrawer } from "@material-ui/core";
import React, {useState} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
    const[people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg",
        },
        {
            name: 'Jeff Bezos',
            url: "https://www.diariodecuyo.com.ar/__export/1612302145659/sites/diariodecuyo/img/2021/02/02/jeff.jpg_24607264.jpg",
        },
    ]);

    //"Next" function
    const swiped = (direction, nameToDelete) => {
        console.log("removing: "+ nameToDelete);
        //setLastDirection(direction);
    };

    //out of the screen function
    const outOfFrame = (name) => {
        console.log(name + "left the screen!");
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardContainer">
            {people.map((person) => (
                // <h1>{person.name}</h1>
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, person.name)}
                onCardLeftScreen={() => outOfFrame(person.name)}                
                >
                <div
                style={{backgroundImage: "url(" + person.url + ")"}}
                className="card"
                >
                <h3>{person.name}</h3>    
                </div>
                </TinderCard>
            ))}
            </div>
        </div>
    ); 
}

export default TinderCards;
