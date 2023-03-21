import React from "react";
import './OnOff.module.css';

type PropsType = {
    on: boolean
}

function OnOff(props: PropsType) {
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black'
    };
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black'
    };
    const indicatorStyle = {
        width: '30px',
        height: '30px',
        borderRadius: '15px',
        border: '1px solid black'
    };
    return (
        <div>
            <div style={onStyle}>On</div>
            <div style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}

export default OnOff;