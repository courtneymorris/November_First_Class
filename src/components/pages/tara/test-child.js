import React from "react";

export default function(props) {
    return (
        <div className="child-div" style={{backgroundColor: props.backgroundColor}}>
            <span>Some text to fill this out</span>
        </div>
    )
}