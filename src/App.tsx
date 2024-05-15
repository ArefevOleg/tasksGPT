import "./App.css";
import "./array/solutionArray";
import "./conditions/solutionObjectsIfElse";
import "../src/basicsJS/theBasicsJS";
import styled from 'styled-components'
import "./map/map";




function App() {
  return (
   <div>
    <h1>Простой счётчик</h1>
    <button id="incrementButton">Увеличить</button>
    <p>Текущее значение: <span id="counter">0</span></p>
    <script src="ctheBasicsJS.js"></script>
   </div>
  );
}

export default App;