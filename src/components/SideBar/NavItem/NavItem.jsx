import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import NavItemHeader from './NavItemHeader';

function NavItem(props){
  const { label, icon, to, children } = props.item;
  const location = useLocation();

  if (children) {
    return <NavItemHeader item={props.item} />;
  }

  return (
    <NavLink
      exact
      to={location?.pathname.includes(to) ? location.pathname : to}
      className='py-4 rounded-md my-2 text-white w-full flex md:flex-col items-center justify-center'
      activeClassName={location?.pathname.includes(to) ? 'bg-active-app' : ''}
    >
      <div  className='text-2xl my-1 md:mx-0 mx-4'>
        {icon}
      </div>
      <span className='text-xl md:text-xs px-2 flex-1 md:flex-auto'>
        {label}
      </span>
    </NavLink>
  );
};

export default NavItem;