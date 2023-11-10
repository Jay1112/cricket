import { sideMenuList } from '../../database/sideMenuList';
import NavItem from './NavItem/NavItem';
import React from 'react';

function SideBar(props){

    function handleClose(){
        if(props.handleClose){
            props.handleClose();
        }
    }

    return (
        <div className='w-auto flex items-center justify-center flex-col'>
            <div className='w-full flex-1 overflow-scroll flex items-center justify-start flex-col p-2'>
                {
                    sideMenuList.map((item, index) => {
                        return <NavItem handleClose={handleClose} key={`${item.label}-${index}`} item={item} />;
                    })
                }
            </div>
        </div>
    );
}

export default SideBar;