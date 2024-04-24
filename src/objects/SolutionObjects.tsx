export const SolutionObjects = () => {
  return <div></div>;
};
// 1
const student = {};
// 2
const student1 = {
  name: "Oleg",
};
// 3
const student2 = {
  name: "Oleg",
  age: 39,
};
// 4
const student3 = {
  name: "Oleg",
  age: 39,
};
function students() {
  return {
    name: student3.name,
    age: student3.age,
  };
}
// console.log(students());
// 5
const student4 = {
  name: "Oleg",
  age: 39,
};
function students1() {
  return {
    name: student4.name,
    age: student4.age,
  };
}

console.log(students());