import React from "react";
import Header from "../../components/UI/Header/Header";
import { teamsList } from "../../database/teamsList";
import TeamItem from "../../components/TeamItem/TeamItem";

function TeamsPage(){
    return (
        <div className="fadeInUp flex flex-col items-center justify-center px-4 overflow-scroll">
            <Header text={'Teams'} classList={'bd top-0 sticky text-white bg-rose-500 rounded-md px-2 py-2 my-4 w-full ff-poppins font-normal text-3xl'} />
            <div className="w-full px-2 min-w-250 flex flex-row flex-wrap items-start md:justify-around justify-start">
                {
                    teamsList.map((item)=>{
                        return <TeamItem key={item.id} item={item} />
                    })
                }
            </div>
        </div>
    );
}

export default TeamsPage;