import React from "react"

export const BlogEntry = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}