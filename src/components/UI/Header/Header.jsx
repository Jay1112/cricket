import React from "react";

function Header({ text, classList }){
    return (
        <div className={classList}>{text}</div>
    );
}

export default Header;