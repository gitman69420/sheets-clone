import React from "react";

import "../Cell/Cell.scss";

const IndexMarker = (props: { index?: number }) => {

    const style = {
        div: {
            height: props.index ? "1.375rem" : "1.425rem",
            width: "3rem",
            backgroundColor: "black",
            color:"white",
            borderStyle: "solid",
            borderWidth: "1px",
        },
        p: {
            minHeight: "1.4rem",
            margin: "0 0 0 1rem",
            padding: 0,
        }
    }

    return <>
        <div>
            <div style={style.div}>
                <p style={style.p}>
                    {`${props.index || "-"}`}
                </p>
            </div>
        </div>
    </>
}

export default IndexMarker;