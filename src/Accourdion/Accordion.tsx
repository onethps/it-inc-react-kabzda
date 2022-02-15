import React from 'react';

export type accordionType ={
    value:boolean
    callback: () => void
    title:string
}

export const Accordion = (props:accordionType) => {

    return (
        <div>
            <div>
                <h3 style={{cursor:'pointer'}} onClick={() => props.callback()}>{props.title}</h3>
            </div>
            { props.value && <ul>
                <li>menuItem1</li>
                <li>menuItem2</li>
                <li>menuItem3</li>
            </ul>}
        </div>
    );
};


export default Accordion