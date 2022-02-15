import React, {useState} from 'react';

type onOFf ={
    value: boolean
    callback: (value:boolean) => void
}

export const OnOff = React.memo( (props:onOFf) => {

    //styles:
   const globalBoxStyle = {
       padding:'20px'
   }

    const onButtonStyle = {
        border: '2px solid black',
        display: 'inline-block',
        backgroundColor: 'green',
        padding: '20px',
        margin: '20px'

    }

    const onButtonStyleDisabled = {
        border: '2px solid black',
        display: 'inline-block',
        padding: '20px',
        margin: '20px'

    }


    const OffButtonStyle = {
        border: '2px solid black',
        display: 'inline-block',
        backgroundColor: 'red',
        padding: '20px'
    }

    const OffButtonDisabled = {
        border: '2px solid black',
        display: 'inline-block',
        padding: '20px'
    }


    const onClickHandler = () => {
       props.callback(true)
    }

    const OFClickHandler = () => {
       props.callback(false)
    }



    return (
        <div style={globalBoxStyle}>
            <div onClick={onClickHandler} style={props.value ? onButtonStyle : onButtonStyleDisabled  }>On</div>
            <div  onClick={OFClickHandler} style={props.value ? OffButtonDisabled: OffButtonStyle }>Off</div>
        </div>
    );
});


export default OnOff;