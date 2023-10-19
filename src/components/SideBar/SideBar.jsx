import './SideBar.css';
import { sideMenuList } from './sideMenuList';
import NavItem from './NavItem/NavItem';
import React from 'react';

function SideBar(){
    return (
        <div className='w-250 flex items-center justify-center flex-col common-bs'>
            <div className='w-full flex items-center justify-center flex p-2 border-b-2'>
                <div className='p-2 bg-gray-300'>icon</div>
                <span className='flex-1 text-2xl my-2 ff-monster px-2'>Cricker</span>
            </div>
            <div className='w-full py-2 flex-1 overflow-scroll flex items-center justify-start flex-col'>
                {
                    sideMenuList.map((item, index) => {
                        return <NavItem key={`${item.label}-${index}`} item={item} />;
                    })
                }
            </div>
        </div>
    );
}

export default SideBar;