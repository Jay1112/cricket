import React, { useState } from "react";
import {BiMenuAltLeft} from 'react-icons/bi';
import { ImCross } from 'react-icons/im';
import SideBar from "../SideBar/SideBar";

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
                <div style={popupStyle} className={`${toggle ? 'slide-right' : 'slide-left'} h-screen top-0 left-0 text-white p-4 bg-black absolute flex flex-col items-center justify-start z-10`}>
                    <div className="w-full flex items-center justify-end">
                        <button onClick={handleClose} className="p-4 bg-black rounded-md">
                            <ImCross className="text-xl" />
                        </button>
                    </div>
                    <div className="my-2 w-full">
                        <SideBar handleClose={handleClose} />
                    </div>
                </div>
            }
        </div>
    );
}

export default NavBar;