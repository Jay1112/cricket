import React from "react";
import { Link } from "react-router-dom";

function TeamItem({
    item : itemData
}){

    return (
        <Link to="/">
            <div class="cursor-pointer mx-4 my-4  border-2 rounded-lg  hover:scale-105 transition-all duration-300">
                <div className="p-2 flex items-center justify-center">
                    <img loading="lazy" class="rounded-md" src={itemData?.imgSource} alt={itemData?.teamName} width={'100%'} />
                </div>
                <div class="p-2">
                    <div className="flex items-center justify-center">
                        <span class="flex-1 ff-poppins text-xl tracking-tight dark:text-white">{itemData?.teamName}</span>
                        <span class="inline-flex items-center px-3 text-sm font-medium text-center   focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </span>
                    </div>  
                </div>
            </div>
        </Link>
    );
}

export default TeamItem;