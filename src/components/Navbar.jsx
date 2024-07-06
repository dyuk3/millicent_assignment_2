import { LuSearch } from 'react-icons/lu';
import { CgBell } from 'react-icons/cg';
import user from '../assets/happy_person.jpg';

const navItems = ['Dashboard', 'Research', 'Hierarchy', 'Clients', 'Analysts', 'Settings', 'Help'];

const Navbar = () => {
  return (
    <div className=' px-10 py-7 shadow-md flex items-center justify-between flex-1 sticky top-0 z-50 bg-white'>
      <div className='flex gap-8'>
        {navItems.map((item) => {
          return (
            <h1
              className={`${
                item === 'Settings' ? 'text-emerald-500' : ' text-black/60'
              } text-xl font-bold cursor-pointer`}
            >
              {item}
            </h1>
          );
        })}
      </div>
      <div className='flex items-center text-gray-500 gap-8'>
        <LuSearch size={24} className='cursor-pointer' />
        <CgBell size={24} className='cursor-pointer' />
        <img src={user} alt='user' className='w-10 h-10 rounded-md  object-cover cursor-pointer' />
      </div>
    </div>
  );
};

export default Navbar;
