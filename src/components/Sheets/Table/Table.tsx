import React, { useState, useEffect } from "react";
import { State } from "../../../reducers";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions";

import Column from "../Column/Column";

import "./Table.scss";
import IndexMarker from "../IndexMarker/IndexMarker";

const Table = () => {

    const dispatch = useDispatch();
    const { addColumn, addRow } = bindActionCreators(actionCreators, dispatch);

    const AddColumn: Function = () => {
        addColumn();
    }

    const AddRow: Function = () => {
        addRow();
    }

    const AddColumnButton: React.FC = () => {
        return <>
            <button className={"add__column__button"} onClick={() => AddColumn()}>
                {"+"}
            </button>
        </>
    }

    const AddRowButton: React.FC = () => {
        return <>
            <button className="add__column__button" onClick={() => AddRow()}>
                {"+"}
            </button>
        </>
    }

    const row_col = useSelector((state: State) => state.count);

    const [top, settop] = useState(16 * 5);

    useEffect(() => {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        window.addEventListener("scroll", (e) => {
            var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
            settop(-y + 16 * 5);
        })
        return () => {
            window.removeEventListener("scroll", () => { });
        }
    }, [])

    return <>
        <div className={"table__body"}>
            <div className={"index__flow"} style={{ top }}>
                <IndexMarker label={"Index"} />
                {[...Array(row_col.rows + 1)].map((value: undefined, index: number) => <IndexMarker key={index} index={index !== 0 ? index : undefined} />)}
                <AddRowButton />
            </div>
            <div className={"table__data__body"}>
                {[...Array(row_col.columns)].map((value: undefined, index: number) => <Column key={index} type={"string"} y={index} />)}
                <AddColumnButton />
            </div>
            <div className={"bottom__gap"} style={{fontFamily:"Consolas"}}>
                {"created by Sridhar Mugundan - 18BCE2314"}
            </div>
        </div>
    </>
}

export default Table;

