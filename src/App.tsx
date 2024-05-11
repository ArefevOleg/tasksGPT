import "./App.css";
import "./array/solutionArray";
import "./conditions/solutionObjectsIfElse";
import "../src/basicsJS/theBasicsJS";
import styled from 'styled-components'
import "./map/map";
import { Books } from "./books";

export type BooksType = {
id: number
name: string
isDone: boolean
}

const booksListOne: BooksType[] = [
  {id: 1, name: "The Red Pill", isDone: false},
  {id: 1, name: "Hopelessness", isDone: true},
  {id: 1, name: "Everest", isDone: true},
  {id: 1, name: "Alien", isDone: false},
];


const booksListTwo: BooksType[] = [
  {id: 1, name: "The Red Pill", isDone: false},
  {id: 1, name: "Hopelessness", isDone: true},
  {id: 1, name: "Everest", isDone: true},
  {id: 1, name: "Alien", isDone: false},
]

function App() {
  return (
    <AppWrapper>
    <Books title="List one"/>
    <Books title="List two"/>
    </AppWrapper>
  );
}

export default App;


const AppWrapper = styled.div`
  display: flex;  
  gap: 50px;
`