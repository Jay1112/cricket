import React, { useState } from "react";
import {BiMenuAltLeft} from 'react-icons/bi';

function NavBar(){
    const popupStyle = {
        width : '90%'
    }

    const [isOpen,setOpen] = useState(false);
    const [toggle,setToggle] = useState(false);

    function handleOpen(){
        setOpen(true);
        setToggle(true);
    }

    function handleClose(){
        setToggle(false);
        setTimeout(()=>{
            setOpen(false);
        },300);
    }

    return (
        <div className="px-2 py-4 flex items-center justify-center">
            <BiMenuAltLeft onClick={handleOpen} className="inline-block md:hidden text-white text-4xl" />
            <p className="text-center flex-1 md:text-left text-3xl text-white font-normal ff-poppins tracking-wide mx-2">Cricker</p>
            { 
                isOpen &&
                <div style={popupStyle} className={`${toggle ? 'slide-right' : 'slide-left'} h-screen top-0 left-0 text-white p-4 bg-rose-500 absolute`}>
                    <button onClick={handleClose} className="bg-green-500 p-4">X</button>
                </div>
            }
        </div>
    );
}

export default NavBar;