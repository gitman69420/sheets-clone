import React, { useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';
import "./Cell.scss";

type IProps = {
    x:number,
    y:number
}

const Cell = (props: IProps) : JSX.Element => {

    const [expanded, setExpanded] = useState<boolean>(false);

    const [value, setValue] = useState(``);



    const Toggle = () => {
        setExpanded(true);
    }

    const Contract = () => {
        setExpanded(false);
    }

    return (
        <div className={"cell__container"}>
        <div className={expanded ? "cell__body__open" : "cell__body__closed"}>
            <OutsideClickHandler onOutsideClick={Contract}>

                {expanded ? 
                <textarea value={value} title={value} onClick={Toggle} onChange={(e) => { setValue(e.target.value) }} className={"cell__input__open"} /> 
                :
                <textarea value={value} readOnly={!expanded} title={"Click to edit"} onClick={Toggle} onChange={(e) => { setValue(e.target.value) }} className={"cell__input__closed"} />}
            </OutsideClickHandler>
        </div>
        </div>
    )
}

export default Cell
