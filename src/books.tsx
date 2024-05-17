
type PropsType = {
  title: string
}



export const Books = ({title}: PropsType ) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

