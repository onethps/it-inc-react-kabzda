import React, {ComponentProps, useState} from 'react';

const localeEN = {
    home: 'home',
    forum: 'forum'
}
const localeRU = {
    home: 'главная',
    forum: 'форум'
}

type locaENType = typeof localeEN
type locaRUType = typeof localeRU

export type GlobalLocale = {
    state: locaENType

}


export function HocUtills<ComponwentProps>(WrappedComponent:React.ComponentType<ComponwentProps & GlobalLocale>) {
    // let [locale, setLocale] = useState('en')
    let state  = localeEN

    return(props:ComponwentProps) => {
        return <WrappedComponent {...props} state={state} />
    }

};

export default HocUtills;
