import { sideMenuList } from '../../database/sideMenuList';
import NavItem from './NavItem/NavItem';
import React from 'react';
import Logo from '../../assets/cricker_logo.png'

function SideBar(){
    return (
        <div className='w-auto flex items-center justify-center flex-col'>
            <div className='w-full flex-1 overflow-scroll flex items-center justify-start flex-col p-2'>
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