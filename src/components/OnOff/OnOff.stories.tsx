import React, {useState} from 'react';
import {OnOff} from "./OnOff";
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff',
    component: OnOff
};

export const onMode = () => <OnOff on={true} onChange={x=>x} />
export const offMode = () => <OnOff on={false} onChange={x=>x} />
export const RatingChanging = () => {
    let [value, setValue] = useState<boolean>(true);
    return <OnOff on={value} onChange={setValue} />
}