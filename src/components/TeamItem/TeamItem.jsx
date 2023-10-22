import React from "react";
import { Link } from "react-router-dom";

function TeamItem({
    item : itemData
}){

    return (
        <div class="md:w-full flex-auto max-w-sm mx-4 my-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-all duration-300">
            <img loading="lazy" class="rounded-t-lg" src={itemData?.imgSource} alt={itemData?.teamName} width={'100%'} />
            <div class="p-5">
                <div className="flex items-center justify-center">
                    <span class="mb-2 flex-1 ff-poppins text-xl tracking-tight text-gray-900 dark:text-white">{itemData?.teamName}</span>
                    <Link to="/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </Link>
                </div>  
            </div>
        </div>
    );
}

export default TeamItem;