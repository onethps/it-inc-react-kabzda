import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';


import OnOff from "./OnOff";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'OnOFf',
    component: OnOff,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof OnOff>;

const callback = action('on off clicked')


export const On = () => {
    return <OnOff value={true} callback={callback}/>

}

export const Off = () => {
    return <OnOff value={false} callback={callback}/>

}

export const ModiffiedOff = () => {
    let [value, setValue] = useState(true)


    let settingValue = (value:boolean) => {
        setValue(value)
    }

    return <OnOff value={value} callback={settingValue}/>

}