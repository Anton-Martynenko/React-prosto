import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import {Select} from "./Select";


export default {
    title: 'Select',
    component: Select
};

export const BaseExample = () => {
    const [value, setValue] = useState('1');
    return (
        <Select value={value}
                onChange={setValue}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moscow'},
                    {value: '3', title: 'Omsk'}
                ]}/>
    )
};

export const WithoutValue = () => {
    const [value, setValue] = useState(null);
    return (
        <Select
            value={value}
            onChange={setValue}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Omsk'}
            ]}/>
    )
};
