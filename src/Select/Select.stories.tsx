import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


import Accordion from "./Select";
import {action} from "@storybook/addon-actions";
import Select from "./Select";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Select',
    component: Select,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Select>;

let callback = action('Select Modified')


export const SelectON = () => <Select/>