import React, {useState, KeyboardEvent} from 'react';
import s from './Select.module.css'

const Select = React.memo(() => {

        const dataBase = [
            {title: 'None', value: '0'},
            {title: 'option1', value: '1'},
            {title: 'option2', value: '2'},
            {title: 'option3', value: '3'}
        ]

        const [showMenu, setShowMenu] = useState(false)
        const [selectMainText, setSelectMainText] = useState(dataBase[0].title)

        const onClickHandler = (value: string) => {
            setSelectMainText(value)
            setShowMenu(false)
        }

        const optionsRender = dataBase.map((m, i) => {
            return (
                <div className={s.itemStyle} key={i}
                     onClick={() => onClickHandler(m.title)}>{m.title}</div>
            )
        })


        const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
            e.key === "Enter" ? setShowMenu(true) : e.key === "Escape" && setShowMenu(false)

            for (let i = 0; i < dataBase.length; i++) {
                if (e.key === "ArrowDown") {
                    if (selectMainText === dataBase[i].title) {
                        if (dataBase[i + 1]) {
                            setSelectMainText(dataBase[i + 1].title)
                            break
                        }
                    }
                }
                if (e.key === "ArrowUp") {
                    if (selectMainText === dataBase[i].title) {
                        if (dataBase[i - 1]) {
                            setSelectMainText(dataBase[i - 1].title)
                            break
                        }
                    }

                }


            }


        }


        return (
            <div>
                <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>


                <div tabIndex={0} onKeyUp={onKeyUp} className={s.selectBox} onClick={() => setShowMenu(!showMenu)}>
                    {selectMainText}
                </div>
                {showMenu &&
                    <div className={s.customOption}>
                        {optionsRender}
                    </div>}
            </div>
        );
    })

;

export default Select;