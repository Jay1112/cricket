import React from "react";
import {BiMenuAltLeft} from 'react-icons/bi';

function NavBar(){
    return (
        <div className="px-2 py-4 flex items-center justify-center">
            <BiMenuAltLeft className="inline-block md:hidden text-white text-4xl" />
            <p className="text-center flex-1 md:text-left text-3xl text-white font-normal ff-poppins tracking-wide mx-2">Cricker</p>
        </div>
    );
}

export default NavBar;