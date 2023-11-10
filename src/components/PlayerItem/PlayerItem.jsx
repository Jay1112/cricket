import React from "react";
import { BiSolidRightArrow } from 'react-icons/bi';

function PlayerItem({ itemData }){
    return (
        <div className="bg-active-app flex flex-row items-stretch justify-center rounded-md cursor-pointer hover:bg-black transition-all">
            <div className="flex items-center justify-center">
                <img src={itemData.playerImg} alt="player" width={70} height={'auto'}/>
            </div>
            <div className="flex-1 flex items-center justify-start px-1 text-white text-xl tracking-wide ff-roboto">
                { itemData?.playerName }
            </div>
            <div className="flex items-center justify-center text-white px-2">
                <BiSolidRightArrow />
            </div>
        </div>
    );
}

export default PlayerItem;