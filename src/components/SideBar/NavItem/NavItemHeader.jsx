import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';

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
        className={`w-full my-1 no-underline flex items-stretch justify-center text-black outline-none border-none cursor-pointer`}
        onClick={onExpandChange}
      >
        <div className='px-2 py-2 flex items-center justify-center'>
          {icon}
        </div>
        <span className='flex-1 text-lg tracking-wide font-semibold text-left flex items-center justify-start ff-monster'>{label}</span>
        <div className='p-2 flex items-center justify-center'>
          { expanded ? <MdExpandMore /> : <MdExpandLess /> }
        </div>
       
      </button>


      {expanded && (
        <div className='w-full my-1 flex flex-col items-center justify-center'>
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
                className='w-full my-1 no-underline flex items-stretch justify-center text-black'
                activeClassName='text-white bg-rose-500'
              >
                    <div className='px-2 py-2 flex items-center justify-center'>
                      {icon}
                  </div>
                  <span className='flex-1 text-lg tracking-wide font-semibold text-left flex items-center justify-start ff-monster'>
                    {label}
                  </span>
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default NavItemHeader;