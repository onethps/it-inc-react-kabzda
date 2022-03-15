import React from 'react';
import {ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import Promise from "./Promise";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Promise',
    component: Promise,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Promise>;

let callback = action('Clock Modified')


//👇 We create a “template” of how args map to rendering
const Template = () => <Promise />;

//👇 Each story then reuses that template
export const onPromise = Template.bind({});
// @ts-ignore

