import styled from 'styled-components'


type PropsType = {
  title: string
}

export const Books = ({title}: PropsType) => {
  return (
    <BooksWrapper>
      <h3>{title}</h3>
      <ul>
        <li><input type="checkbox" /><span>The Red Pill</span></li>
        <li><input type="checkbox" />Hopelessness</li>
        <li><input type="checkbox" />Everest</li>
        <li><input type="checkbox" />Alien</li>
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </BooksWrapper>
  );  
};


const BooksWrapper = styled.div`
padding: 20px;
background-color: #10b2c0;
border: 3px solid black;

&:last-child {
  background-color: #0bd15a;
}
`