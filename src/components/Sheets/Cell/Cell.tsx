import { useState, useContext, useEffect } from 'react'
import OutsideClickHandler from 'react-outside-click-handler';

import { TypeContext } from '../Column/Column';
import { State } from "../../../reducers";

import { useDispatch, useSelector } from 'react-redux';
import * as actionCreators from "../../../actions";
import { bindActionCreators } from 'redux';

import "./Cell.scss";

type IProps = {
    x: number,
    y: number
}

type Value = string | number;

const Cell = (props: IProps): JSX.Element => {

    const data = useSelector((state: State) => (state.data))

    const dispatch = useDispatch();
    const { addData, editData, removeData } = bindActionCreators(actionCreators, dispatch);

    const [expanded, setExpanded] = useState<boolean>(false);
    const currentType = useContext(TypeContext);

    const [value, setValue] = useState<Value>(``);
    const [valueType, setValueType] = useState(currentType);

    useEffect(() => {
        setValueType(currentType);
    }, [currentType]);

    useEffect(() => {
        const dataModification = () =>{

            if (!expanded) {
                if (value && !data.find((item) => (item.x === props.x && item.y === props.y))) {
                    addData({ data: value, x: props.x, y: props.y })
                    console.log("added");
                } else if (value && data.find((item) => (item.x === props.x && item.y === props.y))) {
                    editData({ data: value, x: props.x, y: props.y })
                    console.log("edited");
                } else if (value === "" && data.find((item) => (item.x === props.x && item.y === props.y))) {
                    removeData({ x: props.x, y: props.y });
                    console.log("removed");
                }
            }
        }
        dataModification();
        }, [expanded]);

    useEffect(() => {
        // check whether the value in the cell can be 
        let number: number = +value;
        if (isNaN(number)) {
            setValueType("string")
        }
        if (value !== "" && !isNaN(number)) {
            setValueType("number");
        }
        if (value === "") { setValueType(currentType) }
    }, [value, currentType])


    const Toggle = () => {
        setExpanded(!expanded);
    }

    const Contract = () => {
        setExpanded(false);
    }

    return (
        <div className={"cell__container"}>
            <div className={expanded ? "cell__body__open" : "cell__body__closed"} style={valueType === currentType ? {} : { borderColor: "red" }}>
                <OutsideClickHandler onOutsideClick={Contract}>
                    {expanded ?
                        <textarea
                            value={value}
                            title={`Col:${props.x} | Row:${props.y} | ${valueType}`}
                            onClick={Toggle}
                            onChange={(e) => { setValue(e.target.value) }}
                            className={"cell__input__open"} />
                        :
                        <textarea
                            value={value}
                            readOnly={!expanded}
                            title={`Col type ${currentType} | Click to edit`}
                            onClick={Toggle}
                            className={"cell__input__closed"} />}
                </OutsideClickHandler>
            </div>
        </div>
    )
}

export default Cell
