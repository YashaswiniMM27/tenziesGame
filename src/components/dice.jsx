import React from "react";
import Die from "./die";
import { nanoid } from "nanoid"
import ReactConfetti from "react-confetti";

export default function Dice(){

    const [dice, setDice] = React.useState(() => generateAllNewDice())

    const gameWon = dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value)

    function generateAllNewDice(){
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
            }))
        }


    function rollDice(){
        if(!gameWon){
            setDice(oldDice => oldDice.map((die) =>
                die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6) }
            ))
        }else{
            setDice(generateAllNewDice())
        }
        
    }

    function hold(id){
        setDice(oldDice => oldDice.map((die) =>
                                die.id === id ? {...die, isHeld: !die.isHeld} : die))
    }


    const diceElements = dice.map((die) => <Die
                                                key={die.id}
                                                value={die.value}
                                                isHeld={die.isHeld}
                                                hold={hold}
                                                id={die.id}
                                            />)

    return(
        <section className="mainDiceSection">
            {gameWon && <ReactConfetti/>}
            <section className="diceSection">
                {diceElements}
            </section>
            <button className="rollButton" onClick={rollDice}>{gameWon? "NEW GAME" : "ROLL"}</button>
        </section>
    )
}
