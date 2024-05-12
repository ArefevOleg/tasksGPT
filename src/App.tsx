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
  {id: 1, name: "Судные дни", isDone: false},
  {id: 1, name: "Дракула", isDone: true},
  {id: 1, name: "Ритуал", isDone: true},
  {id: 1, name: "Чужой", isDone: false},
];


const booksListTwo: BooksType[] = [
  {id: 1, name: "Странник", isDone: false},
  {id: 1, name: "Питер", isDone: true},
  {id: 1, name: "Север", isDone: true},
  {id: 1, name: "Крым", isDone: false},
]

function App() {
  return (
    <AppWrapper>
    <Books title="Ужасы" booksList={booksListOne}/>
    <Books title="Метро 2033" booksList={booksListTwo}/>
    </AppWrapper>
  );
}

export default App;


const AppWrapper = styled.div`
  display: flex;  
  gap: 50px;
`