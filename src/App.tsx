import "./App.css";
import {useState} from "react";


function App() {
    //
    // const [start, setStart] = useState("START")
    //
    // const newFo = () => {
    //     setStart(randomString)
    // }
    const array = ["scissors", "paper", "rock"]
    function getRandomString(arr: any) {
        const index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }
    const randomString1 = getRandomString(array);
    const randomString2 = getRandomString(array);
    const rps = (player1: any, player2: any) => {
        if (player1 === player2) {
            return "Draw!"
        } else if (player1 === "scissors" && player2 === "paper") {
            return "Player 1 won!"
        } else if (player1 == "scissors" && player2 == "rock") {
            return "Player 2 won!"
        } else if (player1 == "paper" && player2 == "rock") {
            return "Player 1 won!"
        } else if (player1 == "paper" && player2 == "scissors") {
            return "Player 2 won!"
        } else if (player1 == "rock" && player2 == "scissors") {
            return "Player 1 won!"
        } else if (player1 == "rock" && player2 == "paper") {
            return "Player 2 won!"
        }
    };
    return (
        <div>
            {/*<div>{start}</div>*/}
            <button onClick={() => rps(randomString1, randomString2)}>Player1</button>
            <button onClick={() => rps(randomString1, randomString2)}>Player2</button>
        </div>
    );
}

export default App;
