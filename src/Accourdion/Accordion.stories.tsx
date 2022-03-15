import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


import Accordion, {accordionType} from "./Accordion";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Accordion',
    component: Accordion,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Accordion>;

let callback = action('Clock Modified')


//👇 We create a “template” of how args map to rendering
const Template = (args:accordionType) => <Accordion {...args} />;

//👇 Each story then reuses that template
export const onAccordion = Template.bind({});
// @ts-ignore
onAccordion.args = {
    title:'wdwdw',
    value:true,
    callback
};

export const offAccordion = Template.bind({})
// @ts-ignore
offAccordion.args = {
    title: "wdwdw",
    callback,
    value: false
}


export const ModifiedAccordion = () => {
    const[value, setValue] = useState(false)

    return <Accordion value={value} callback={() => setValue(!value)} title={value? 'MenuOn': 'MenuOff'}/>
}

