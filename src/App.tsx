import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import {RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";


export type PageTitleType = {
    title: string
}

function App() {
    console.log("App rendering");
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    let [active, setActive] = useState<boolean>(false);
    return (
        <div>
            <PageTitle title={"Hello world!"}/>
            <PageTitle title={"Hello my friends!"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={"Menu"} collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }} items={[]}/>
            <Accordion titleValue={"Exit"} collapsed={accordionCollapsed} onChange={() => {
                setAccordionCollapsed(!accordionCollapsed)
            }} items={[]}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff onChange={setActive}/> {active.toString()}
            <UncontrolledAccordion titleValue={"Yo"}/>
            <UncontrolledRating onChange={(value) => value}/>
            <OnOff onChange={setActive} on={active}/>
        </div>
    );
}

function PageTitle(props: PageTitleType) {
    console.log("AppTitle rendering");
    return <div>{props.title}</div>
}

export default App;
