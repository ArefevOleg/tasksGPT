


const arr = [
  { id: 1, name: "Oleg", age: 39, isDone: true },
  { id: 2, name: "Ira", age: 37, isDone: false},
  { id: 3, name: "Ekaterina", age: 35, isDone: true },
];



type PropsType = {
  name: string
}

export const Td = ({name}: PropsType) => {
  return (
<div> 
<ul>
  {arr.map(() => {
    return (
      <li>
    <input type="text" />
   <button>{name}</button>
    <ul>
      <li></li>
    </ul>
  </li>
    )
  })}
</ul>
</div>
  );
};
