export default function Header(){
    return(
        <section>
            <header className="header">
                <img src="/src/assets/favicon.png" alt="tenzieDice" />
                <span>TENZIES</span>
                <img src="/src/assets/favicon.png" alt="tenzieDice" />
            </header>
            <section className="instructions">
                <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            </section>
        </section>
        
    )
}