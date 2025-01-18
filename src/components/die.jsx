import '../index.css'

export default function Die({ value, isHeld, hold, id }){

    const heldStyle = {
        backgroundColor: isHeld ? " #59E391" : "white"
    }

    return (
        <button className="diceButton" style={heldStyle} onClick={() => hold(id)}>{value}</button>
    )
}