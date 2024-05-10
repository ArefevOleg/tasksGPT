
const tasks  = [
  { id: 1, title: "Hello world", isDone: true },
  { id: 2, title: "I am Happy", isDone: false },
  { id: 3, title: "Yo", isDone: false },
  { id: 4, title: 'Redux', isDone: false },
];

export const Td = () => {
  return (
    <div>
      <ul>
        {tasks.map(task => {
          return (
            <li>
              <input type="checkbox" checked={task.isDone} />
              <span>{task.title}</span>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
