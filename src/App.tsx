import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import {Rating} from "./components/Rating/Rating";

export type TitleType = {
    title: string
}

export type RatingValueType = {
    value?: number
    selected?: boolean
}

function App() {
    console.log("App rendering");
    return (
        <div>
            <PageTitle title={"Hello world!"}/>
            <PageTitle title={"Hello my friends!"}/>
            <Rating value={3}/>
            <Accordion title={"Menu"}/>
            <Accordion title={"Exit"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Rating value={7}/>
        </div>
    );
}

function PageTitle(props: TitleType) {
    console.log("AppTitle rendering");
    return <div>{props.title}</div>
}

export default App;
