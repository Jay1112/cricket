import { sideMenuList } from './sideMenuList';
import NavItem from './NavItem/NavItem';
import React from 'react';
import Logo from '../../assets/cricker_logo.png'

function SideBar(){
    return (
        <div className='w-250 flex items-center justify-center flex-col common-bs'>
            <div className='w-full flex items-center justify-center flex p-2 border-b-2'>
                <img className='border-radius-50' src={Logo} alt='Cricker Logo' width={40} height={40} />
                <span className='flex-1 text-2xl my-2 ff-monster px-2'>Cricker</span>
            </div>
            <div className='w-full py-2 pr-1 flex-1 overflow-scroll flex items-center justify-start flex-col'>
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