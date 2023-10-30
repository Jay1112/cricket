import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineRight } from 'react-icons/ai';

function TeamItem({
    item : itemData
}){

    return (
        <Link to={`/team/${itemData?.id}`}>
            <div className="bg-active-app m-2 p-2 rounded-md flex flex-col items-center justify-center">
                {/* TOP  */}
                <div className="w-full flex items-center justify-center">
                    <img className="rounded-md" src={itemData?.imgSource} alt={itemData?.teamName} width={'100%'} height={'auto'} />
                </div>
                {/* BOTTOM  */}
                <div className="w-full flex items-center justify-center px-1 pt-2 pb-1">
                    <p className="flex-1 font-semibold ff-poppins bg-active-text">India</p>
                    <p className="ff-poppins bg-active-text font-bold text-xl">
                        <AiOutlineRight />
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default TeamItem;