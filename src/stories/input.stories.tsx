import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';
import OnOff from '../components/OnOff/OnOff';

export default {
    title: 'input',
    //component: OnOff
};

export const UncontrolledInput = () => <input/>;
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value;
        setValue(actualValue);
    }
    return <><input onChange={onChange}/> - {value}</>;
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChange}/>
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={parentValue} onChange={onChange}/>
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState(true);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    return <select>
        <option> </option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moskow</option>
        <option value={'3'}>Omsk</option>
    </select>
};

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const save = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value);
    }
    return <><input ref={inputRef}/> <button onClick={save}>save</button> - actualValue: {value}</>;
};
export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>;
