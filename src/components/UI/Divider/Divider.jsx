import React from "react";

function Divider({ bgColor, height, classList }){
    return (
        <div style={{
                background:bgColor,
                height
            }}
            className={classList}
        >
            { /* {Nothing to do } */ }
        </div>
    );
}

export default Divider;