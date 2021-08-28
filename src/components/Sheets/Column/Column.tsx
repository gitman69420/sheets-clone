import React, { useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../../../reducers";

import Cell from "../Cell/Cell";

import "./Column.scss";

interface ICell {
    type: string,
    y:number
};

const Column = (props: ICell) => {

    const [type, setType] = useState<string>("string");

    const row_col = useSelector((state: State) => state.count);

    return <>
        <div className="column__body">
            <div className={"column__header__body"}>
                <select value={type} onChange={(e) => setType(e.target.value)} title={"Select the type"} className={"column__type__select"}>
                    <option value="string">String</option>
                    <option value="number">Number</option>
                    <option value="object">Object</option>
                </select>
            </div>
            {
                [...Array(row_col.rows)].map((value: undefined, index: number) => (<Cell x={props.y+1} y={index+1}/>))
            }
        </div>
    </>
}

export default Column;