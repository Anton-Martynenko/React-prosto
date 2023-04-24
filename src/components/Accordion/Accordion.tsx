import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: string[]
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering");
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    );

}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    items: string[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log("AccordionBody rendering");
    return (
        <ul>
            {props.items.map((i, index) => <li key={index}>{i}</li>)}
        </ul>
    );
}

export default Accordion;