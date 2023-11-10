import React from "react";
import { useRouteMatch } from "react-router-dom";
import Header from "../../components/UI/Header/Header";
import { teamsList } from "../../database/teamsList";
import { playersList } from "../../database/playersList";
import PlayerItem from "../../components/PlayerItem/PlayerItem";

function TeamDetailsPage(){
    const match = useRouteMatch();

    const teamObj = teamsList?.at((match.params?.id)-1);

    return (
        <div className="my-2 w-full flex-1 flex flex-col overflow-scroll">
            <Header text={`${teamObj?.teamName?.toUpperCase()}`}
                    classList={'my-2 text-white bg-active-app px-4 py-2 rounded-md text-2xl ff-monster tracking-wider'} />
            <div className="p-4 bg-active-app rounded-md text-white flex flex-col items-stretch justify-center
                            md:flex-row">
                <div className="flex items-center justify-center mr-2">
                    <img className="rounded-md" src={teamObj?.imgSource} alt={teamObj?.teamName} width={300} height={200} />
                </div>
                <div className="p-1 flex-1 my-2 md:my-0">
                    <p className="my-1 text-xl ff-poppins"><span className="font-bold">Country Code</span> : {teamObj?.shortCode}</p>
                    <p className="my-1 text-xl ff-poppins"><span className="font-bold">Board</span> : {teamObj?.boardName}</p>
                    <p className="my-2 text-justify text-md ff-roboto">
                        {teamObj?.description}
                    </p>
                </div>
            </div>
            <Header text={`Players`}
                    classList={'my-2 text-white bg-active-app px-4 py-2 rounded-md text-2xl ff-monster tracking-wider'} />
            <div className="my-1 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2">
                {
                   playersList.map((item)=>{
                    return <PlayerItem  itemData={item} key={item.id} />
                   }) 
                }
            </div>
        </div>
    );
}

export default TeamDetailsPage;