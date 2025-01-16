import Dice from "./components/dice";
import Header from "./components/header";

export default function MainComponent(){
    return(
        <div className="mainComponent">
        <Header/>
        <Dice/>
        </div>
    )
}