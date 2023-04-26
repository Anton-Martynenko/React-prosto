import React, {useState} from 'react';
import {Accordion} from "./Accordion";
import {action} from '@storybook/addon-actions';

export default {
    title: 'Accordion',
    component: Accordion
};

const callback = action("accordion mode change event fired");
const onClickCallback = action("something was clicked");

export const MenuCollapsedMode = () => <Accordion
    titleValue={'Menu'} collapsed={true} onChange={callback}
    items={[]} onClick={onClickCallback}/>
export const UserUncollapsedMode = () => <Accordion
    titleValue={'User'} collapsed={false} onChange={callback}
    items={[{title: 'Dimych', value: 1}, {title: 'Igor', value: 2}, {title: 'Viktor', value: 3}, {title: 'Valera', value: 4}]}
    onClick={onClickCallback}/>
export const ModeChanging = () => {
    let [value, setValue] = useState<boolean>(true);
    return <Accordion
        titleValue={'User'} collapsed={value} onChange={() => {setValue(!value)}}
        items={[{title: 'Dimych', value: 1}, {title: 'Igor', value: 2}, {title: 'Viktor', value: 3}, {title: 'Valera', value: 4}]}
        onClick={(value) => alert(`user with ID ${value} should be happy!`)}/>
}