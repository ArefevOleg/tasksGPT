import "./App.css";
import {v1} from 'uuid'
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";


function App() {

    return (
        <div>
            <PageTitle title="This is APP component"/>
            <Rating value={5}/>
            <Accordion titleValue="Menu" collapsed={true}/>
            <Accordion titleValue="Users" collapsed={false}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}

function PageTitle({title}: PageTitlePropsType) {
    return <h1>{title}</h1>
}

export default App;
