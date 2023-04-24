import React, {useState} from 'react';
import {action} from '@storybook/addon-actions';
import OnOff from '../components/OnOff/OnOff';

export default {
    title: 'input',
    //component: OnOff
};

export const UncontrolledInput = () => <input/>
export const ControlledInputWithFixedValue = () => <input value={'it-incubator'}/>
