import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

type AccordionBodyType = {}

function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle titleValue={props.titleValue}/>
            </div>
        );
    } else {
        return (
            <div>
                <AccordionTitle titleValue={props.titleValue}/>
                <AccordionBody />
            </div>
        );
    }
}

function AccordionTitle(props: AccordionPropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3>{props.titleValue}</h3>
    );
}

function AccordionBody() {
    console.log("AccordionBody rendering");
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    );
}

export default Accordion;