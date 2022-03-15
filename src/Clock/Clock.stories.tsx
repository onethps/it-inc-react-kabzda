import React, {useState} from 'react';
import {ComponentMeta} from '@storybook/react';


import Clock, {clockType} from "./Clock";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Clock',
    component: Clock,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Clock>;

const Template = (args:clockType) => <Clock {...args} />;

//👇 Each story then reuses that template
export const AnalogClock = Template.bind({});
// @ts-ignore
AnalogClock.args = {
analog: false
};


export const DigitalClock = Template.bind({});
// @ts-ignore
DigitalClock.args = {
analog: true
};



export const ClockSwitcher = () => {

let [analog, setAnalog] = useState(true)

    return <Clock analog={analog} callback={() => setAnalog(!analog)}/>
}



