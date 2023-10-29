import React from "react";
import Header from "../../components/UI/Header/Header";
import { NavLink } from "react-router-dom";

function PageNotFound(){
    return (
        <NavLink to="/" className="fadeInUp flex flex-col items-center justify-center px-4 overflow-scroll">
            <Header text={'Page Not Found'} classList={'text-center top-0 sticky text-white bg-active-app rounded-md px-2 py-2 my-4 w-full ff-poppins font-normal text-3xl'} />
        </NavLink>
    );
}

export default PageNotFound;