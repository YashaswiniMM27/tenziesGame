import React from "react";
import Die from "./die";

export default function Dice(){

    const [dice, setDice] = React.useState(generateAllNewDice())

    function generateAllNewDice(){
        const newDice = []
        for(let i =0 ; i < 10; i++){
            const randomDie = (Math.floor(Math.random() * 6) + 1);
            newDice.push(randomDie)
        }
        return newDice
    }

    function rollDice(){
        setDice(generateAllNewDice())
    }

    const diceElements = dice.map((num, index) => <Die key={index} value={num}/>)

    return(
        <section className="mainDiceSection">
            <section className="diceSection">
                {diceElements}
            </section>
            <button className="rollButton" onClick={rollDice}>ROLL</button>
        </section>
    )
}