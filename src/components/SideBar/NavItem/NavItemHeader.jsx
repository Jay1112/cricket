import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavItem.css';
// import {AddIcon, Icon} from '@chakra-ui/icons';

const resolveLinkPath = (childTo, parentTo) => `${parentTo}/${childTo}`;

function NavItemHeader(props){
  const { item } = props;
  const { label, icon, to: headerToPath, children } = item;
  const location = useLocation();

  const [expanded, setExpand] = useState(
    location.pathname.includes(headerToPath)
  );

  const onExpandChange = (e) => {
    e.preventDefault();
    setExpand(expanded => !expanded);
  };
	
  return (
    <>
      <button
        className={`navItem navItemHeaderButton`}
        onClick={onExpandChange}
      >
        <div className='navIcon'>
          {/* <Icon as={icon}  /> */}
        </div>
        <span className='navLabel'>{label}</span>
        <div className='expandClass'>
          {/* <Icon as={AddIcon} className={expanded ? `navItemHeaderChevron chevronExpanded` :  `navItemHeaderChevron`} /> */}
        </div>
       
      </button>

      {expanded && (
        <div className='navChildrenBlock'>
          {children.map((item, index) => {
            const key = `${item.label}-${index}`;

            const { label, icon, children } = item;

            if (children) {
              return (
                <div key={key}>
                  <NavItemHeader
                    item={{
                      ...item,
                      to: resolveLinkPath(item.to, props.item.to),
                    }}
                  />
                </div>
              );
            }

            return (
              <NavLink
                key={key}
                to={resolveLinkPath(item.to, props.item.to)}
                className='navItem'
                activeClassName='activeNavItem'
              >
                    <div className='navIcon'>
                    {/* <Icon as={icon}  /> */}
                  </div>
                <span className='navLabel'>{label}</span>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavItemHeader;