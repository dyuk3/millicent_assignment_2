import { LuSearch } from 'react-icons/lu';
import { MdMenu } from 'react-icons/md';
import { CgBell } from 'react-icons/cg';
import user from '../assets/happy_person.jpg';

// Array of nav Links
const navItems = ['Dashboard', 'Research', 'Hierarchy', 'Clients', 'Analysts', 'Settings', 'Help'];

const Navbar = ({ setMenu }) => {
  const handleClick = () => {
    setMenu(true);
  };
  return (
    <div className=' lg:px-10 px-7 py-7 shadow-md flex items-center justify-between  sticky top-0  bg-white'>
      {/* Hidden the navbar Links for Mobile, we instead can use the sidebar for navigation */}
      <div className='lg:flex hidden gap-8 '>
        {navItems.map((item) => {
          return (
            <h1
              className={`${
                item === 'Settings' ? 'text-emerald-500' : ' text-black/60'
              } text-xl font-bold cursor-pointer `}
            >
              {item}
            </h1>
          );
        })}
      </div>
      <div className='lg:hidden ' onClick={() => handleClick()}>
        <MdMenu size={24} />
      </div>
      <div className='flex items-center justify-end text-gray-500 gap-8  flex-1'>
        <LuSearch size={24} className='cursor-pointer' />
        <CgBell size={24} className='cursor-pointer' />
        <img src={user} alt='user' className='w-10 h-10 rounded-md  object-cover cursor-pointer' />
      </div>
    </div>
  );
};

export default Navbar;
