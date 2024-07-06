import { useState } from 'react';
import { GoDotFill } from 'react-icons/go';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from 'react-icons/md';

const SidebarItem = ({ data, open }) => {
  const [collapsed, setCollapsed] = useState(true);
  const { title, Icon, childrens } = data;
  console.log(collapsed);

  // function to handle to toggle of childrens collapse
  const handleChange = () => {
    setCollapsed(!collapsed);
  };
  return (
    <>
      <div className=' flex items-center justify-between cursor-pointer py-2  '>
        <div className='flex items-center  gap-4'>
          {Icon && <Icon size={24} className='text-gray-50/30 hover:text-white' />}
          <p
            className={`${title === 'Setting' ? 'text-white' : 'text-gray-100/60'} ${
              open ? 'font-medium text-lg' : 'hidden'
            } hover:text-white`}
          >
            {title}
          </p>
        </div>
        {/* condition to render upside arrow if the list is collapsed */}
        {childrens && collapsed && open && (
          <MdOutlineKeyboardArrowUp
            className='text-white'
            size={24}
            onClick={() => handleChange()}
          />
        )}
        {/* condition to render downside arrow if the list is not collapsed */}

        {childrens && !collapsed && open && (
          <MdOutlineKeyboardArrowDown
            className='text-white'
            size={24}
            onClick={() => handleChange()}
          />
        )}
      </div>
      {childrens && open && (
        <div className={` flex-col gap-2 ${collapsed ? 'flex' : 'hidden'}`}>
          {childrens.map((child, index) => (
            <div
              key={index}
              className={`${
                child.title === 'Add Category' && 'bg-black'
              } flex items-center gap-4 pl-4 py-2 rounded-lg`}
            >
              <GoDotFill
                className={` ${child.title === 'Add Category' ? 'text-white' : 'text-gray-50/30'} `}
              />
              <p
                className={`${child.title === 'Add Category' ? 'text-white' : 'text-gray-50/60'} `}
              >
                {child.title}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarItem;
