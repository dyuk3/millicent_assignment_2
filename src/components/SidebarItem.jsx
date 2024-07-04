import { GoDotFill } from 'react-icons/go';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';

const SidebarItem = ({ data }) => {
  const { title, Icon, childrens } = data;
  return (
    <>
      <div className=' flex items-center justify-between cursor-pointer py-2  '>
        <div className='flex items-center  gap-4'>
          {Icon && <Icon size={24} className='text-gray-50/30' />}
          <p
            className={`${
              title === 'Setting' ? 'text-white' : 'text-gray-100/60'
            } font-medium text-lg`}
          >
            {title}
          </p>
        </div>
        {childrens && <MdOutlineKeyboardArrowUp className='text-white' size={24} />}
      </div>
      {childrens && (
        <div className='flex flex-col gap-2'>
          {childrens.map((child) => (
            <div
              className={`${
                child.title === 'Add Category' && 'bg-black'
              } flex items-center gap-4 pl-4 py-2 rounded-lg`}
            >
              <GoDotFill
                className={` ${child.title === 'Add Category' ? 'text-white' : 'text-gray-50/30'}`}
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
