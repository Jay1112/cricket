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
      className='py-2 w-full no-underline flex items-stretch justify-center text-black 
      hover:bg-purple-700 hover:text-white'
      activeClassName={location?.pathname.includes(to) ? 'text-white bg-rose-600 hover:bg-rose-600' : ''}
    >
      <div  className='px-2 py-2 flex items-center justify-center text-xl'>
        {icon}
      </div>
      <span className='flex-1 text-lg tracking-wide font-semibold text-left flex items-center justify-start ff-monster'>
        {label}
      </span>
      <div className={location?.pathname.includes(to) ? 'pl-1 mr-1 bg-white rounded-md' : ''}></div>
    </NavLink>
  );
};

export default NavItem;