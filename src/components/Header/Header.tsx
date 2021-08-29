import React, { useState, useEffect } from "react";
import { State } from "../../reducers";
import "./Header.scss";

import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../../actions";
import { bindActionCreators } from "redux";

const Header: React.FC = () => {

    const data = useSelector((state: State) => state.data)

    useEffect(() => {
        console.log(data) 
    });

    const dispatch = useDispatch();
    const { addColumn, addRow } = bindActionCreators(actionCreators, dispatch);

    const [row, setRow] = useState<number>(0);
    const [column, setColumn] = useState<number>(0);

    const rowClick = () => {
        addRow({byCount:row});
    }

    const columnClick = () => {
        addColumn({byCount:column});
    }

    const min = 1, max = 20;

    return <>
        <div className="header__body">
            <h1 style={{ color: "white", margin: "0 2rem" }}>sheets - clone (Sridhar Mugundan)</h1>
            <div className={"header__action__box"}>
                <input title={"Add rows"} type="number" min={min} max={max} value={row} onChange={(e: React.BaseSyntheticEvent) => (setRow(e.currentTarget.value))} />
                <input type="button" value="Add rows" onClick={()=>rowClick()}></input>
            </div>
            <div className={"header__action__box"}>
                <input title={"Add columns"} type="number" min={min} max={max} value={column} onChange={(e: React.BaseSyntheticEvent) => (setColumn(e.currentTarget.value))} />
                <input type="button" value="Add columns" onClick={()=>columnClick()}></input>
            </div>
        </div>
    </>
}

export default Header;