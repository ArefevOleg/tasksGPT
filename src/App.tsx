import "./App.css";
import "./array/solutionArray";
import "./conditions/solutionObjectsIfElse";
import "../src/basicsJS/theBasicsJS";
import "./map/map";
import "./script"
import "./newJs"
import {useState} from "react";

const arr = ["red ", "green ", "white ", "black ", "blue "]
const neArr = arr.filter(el => el === "red ")


const arr1 = (arr:  string[], str: any): any => {
    const color = []
    let i = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "red ") {
            color.push(arr[i])
        }
    }
    return color
}

// console.log(arr1(arr, "red "))
// // const color
// console.log(neArr)
// // console.log(arr)
//

function App() {

    return (
        <div>

            {arr.map(el => {
                return (
                    <div>
                        <div>*</div>
                    </div>
                )
            })}
        </div>
    );
}

export default App;
