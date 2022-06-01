import React from "react";

const Head = ({ value }) => {
    return <h1>Mobiles { value }</h1>
}

const Categories = ({ name }) => {
    return <ul><li>{ name }</li></ul>
    
}

export { Head, Categories }