import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action("accordion mode change event fired");

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} />
export const UserUncollapsedMode = () => <Accordion titleValue={'User'} collapsed={false} onChange={callback} />
export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'User'} collapsed={value} onChange={() => {setValue(!value)}} />
}