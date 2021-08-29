import React from "react";

import "../Cell/Cell.scss";

const IndexMarker = (props: { index?: number, label?:string }) => {

    const style = {
        div: {
            height: props.index || props.label ? "1.375rem" : "1.425rem",
            minWidth: "3rem",
            maxWidth:"100%",
            backgroundColor:"rgba(3, 110, 160, 0.377)",
            color:"white",
            borderStyle: "solid",
            borderWidth: "1px",
        },
        p: {
            minHeight: "1.4rem",
            margin: "0",
            padding: 0,
            fontWeight:700,
            fontFamily:"Consolas"
        }
    }

    return <>
        <div>
            <div style={style.div}>
                <p style={style.p}>
                    {`${props.index || props.label || "Type"}`}
                </p>
            </div>
        </div>
    </>
}

export default IndexMarker;