type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
}
export const Accordion = ({titleValue, collapsed}: AccordionPropsType) => {
    if (collapsed === false) {
        return (
            <div>
                <AccordionTitle title={titleValue}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={titleValue}/>
            </div>
        )
    }
};

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle({title}: AccordionTitlePropsType) {
    return <h3>{title}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
