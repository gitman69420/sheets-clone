import React, { useState, useEffect } from "react";
import { State } from "../../../reducers";
import { useSelector } from "react-redux";

import Column from "../Column/Column";

import "./Table.scss";
import IndexMarker from "../IndexMarker/IndexMarker";

const Table = () => {

    // get how many rows and columns there are
    const row_col = useSelector((state: State) => state.count);
    const data = useSelector((state: State) => state.data);

    const [top, settop] = useState(64);

    useEffect(() => {
        var supportPageOffset = window.pageXOffset !== undefined;
        var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
        window.addEventListener("scroll", (e) => {
            var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
            settop(-y+64);
        })
        return () => {
            window.removeEventListener("scroll", ()=>{});
        }
    }, [])

    return <>
        <div className={"table__body"}>
            <div className={"index__flow"} style={{top}}>
                {[...Array(row_col.rows + 1)].map((value: undefined, index: number) => <IndexMarker index={index !== 0 ? index : undefined} />)}
            </div>
            <div className={"table__data__body"}>
                {[...Array(row_col.columns)].map((value: undefined, index: number) => <Column type={"string"} y={index} />)}
            </div>
        </div>
    </>
}

export default Table;

