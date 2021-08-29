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

    const [row, setRow] = useState<number>(1);
    const [column, setColumn] = useState<number>(1);

    const min = 1, max = 20;

    const rowClick = () => {
        if(row > max){setRow(max);}
        if(row < min){setRow(min);}
        addRow({ byCount: row });
    }

    const columnClick = () => {
        if(column > max){setRow(max);}
        if(column < min){setRow(min);}
        addColumn({ byCount: column });
    }

    const style2={ color: "white", margin:"0", fontFamily:"Consolas"};
    const style1={ color: "white", margin:"0", fontFamily:"Constantia"};

    return <>
        <div className="header__body">
            <div style={{marginLeft:"1rem"}}>
                <h1 style={style1}>Work Together</h1>
                <h5 style={style2}>(a Google Sheets clone - Sridhar Mugundan)</h5>
            </div>
            <div className={"header__action__box"}>
                <input className={"row__col__counter"} title={"Add rows"} type="number" min={min} max={max} value={row} onChange={(e: React.BaseSyntheticEvent) => (setRow(e.currentTarget.value))} />
                <div className={"button__click"} onClick={() => rowClick()}>Add Rows</div>
                {/* <input type="button" value="Add rows" onClick={() => rowClick()}></input> */}
            </div>
            <div className={"header__action__box"}>
                <input className={"row__col__counter"} title={"Add columns"} type="number" min={min} max={max} value={column} onChange={(e: React.BaseSyntheticEvent) => (setColumn(e.currentTarget.value))} />
                <div className={"button__click"} onClick={() => columnClick()}>Add Columns</div>
                {/* <input type="button" value="Add columns" onClick={() => columnClick()}></input> */}
            </div>
        </div>
    </>
}

export default Header;