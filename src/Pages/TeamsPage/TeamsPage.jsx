import React from "react";
import Header from "../../components/UI/Header/Header";
import { teamsList } from "../../database/teamsList";
import TeamItem from "../../components/TeamItem/TeamItem";

function TeamsPage(){
    return (
        <div className="w-full flex-1 flex flex-col overflow-scroll">
            <Header text={'Teams'}
                    classList={'my-2 text-white bg-active-app px-4 py-2 rounded-md text-2xl ff-monster tracking-wider'} />
            <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-1'>
                {
                    teamsList.map((item)=>{
                        return <TeamItem item={item} key={item.id} />
                    })
                }
            </div>
        </div>
    );
}

export default TeamsPage;