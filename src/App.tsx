import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import {RatingValueType} from "./components/Rating/Rating";


export type PageTitleType = {
    title: string
}

function App() {
    console.log("App rendering");
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    return (
        <div>
            <PageTitle title={"Hello world!"}/>
            <PageTitle title={"Hello my friends!"}/>
            <Rating value={3}/>
            <Accordion titleValue={"Menu"} collapsed={true}/>
            <Accordion titleValue={"Exit"} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={ratingValue}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={3}/>
            <OnOff />
            <OnOff />
            <OnOff />
            <UncontrolledAccordion titleValue={"Yo"}/>
            <UncontrolledRating />
        </div>
    );
}

function PageTitle(props: PageTitleType) {
    console.log("AppTitle rendering");
    return <div>{props.title}</div>
}

export default App;
