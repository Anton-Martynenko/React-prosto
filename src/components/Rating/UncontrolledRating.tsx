import React from "react";

type RatingPropsType = {
    value: number
}

function UncontrolledRating(props: RatingPropsType) {
    console.log("Rating rendering");
    return (
        <div>
            <Star selected={props.value > 0}/><button>1</button>
            <Star selected={props.value > 1}/><button>2</button>
            <Star selected={props.value > 2}/><button>3</button>
            <Star selected={props.value > 3}/><button>4</button>
            <Star selected={props.value > 4}/><button>5</button>
        </div>
    );
}

type StarType = {
    selected: boolean
}

function Star(props: StarType) {
    console.log("Star rendering");
    if (props.selected) {
        return <span><b>Star </b></span>;
    } else {
        return <span>Star </span>;
    }
}

export default UncontrolledRating;