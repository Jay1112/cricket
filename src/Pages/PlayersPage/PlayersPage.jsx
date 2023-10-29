import React from "react";
import Header from "../../components/UI/Header/Header";

function PlayersPage(){
    return (
        <div className="w-full flex-1 flex flex-col overflow-scroll">
            <Header text={'Players'}
                    classList={'my-2 text-white bg-active-app px-4 py-2 rounded-md text-2xl ff-monster tracking-wider'} />
        </div>
    );
}

export default PlayersPage;