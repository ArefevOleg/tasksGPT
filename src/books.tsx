import styled from 'styled-components'


export const Books = (props: any) => {
  return (
    <BooksWrapper>
      <h3>{props.title}</h3>
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


const BooksWrapper = styled.div