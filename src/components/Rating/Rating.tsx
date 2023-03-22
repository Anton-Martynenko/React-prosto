import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
}

export function Rating(props: RatingPropsType) {
    console.log("Rating rendering");
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
        </div>
    );
}

type StarType = {
    selected: boolean
}

function Star(props: StarType) {
    console.log("Star rendering");
    return <span>{props.selected ? <b>Star </b> : 'Star '}</span>
}