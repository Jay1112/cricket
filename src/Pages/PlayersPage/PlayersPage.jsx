import React from "react";
import Header from "../../components/UI/Header/Header";

function PlayersPage(){
    return (
        <div className="fadeInUp flex flex-col items-center justify-center px-4 overflow-scroll">
            <Header text={'Players'} classList={'text-center top-0 sticky text-white bg-rose-500 rounded-md px-2 py-2 my-4 w-full ff-poppins font-normal text-3xl'} />
            {/* <div className="w-full px-2 grid grid-cols-6 xl:grid-cols-2 md:grid-cols-2">
                {
                    teamsList.map((item)=>{
                        return <TeamItem key={item.id} item={item} />
                    })
                }
            </div> */}
        </div>
    );
}

export default PlayersPage;