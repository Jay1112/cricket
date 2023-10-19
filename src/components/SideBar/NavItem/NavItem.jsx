import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavItem.css';
// import { Icon } from '@chakra-ui/react';
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
      className='navItem'
      activeClassName={location?.pathname.includes(to) ? 'activeNavItem' : ''}
    >
      <div  className='navIcon'>
        {/* <Icon as={icon}/> */}
      </div>
      <span className='navLabel'>{label}</span>
    </NavLink>
  );
};

export default NavItem;