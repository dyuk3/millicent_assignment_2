import logo from '../assets/logo.png';
import { RxDashboard } from 'react-icons/rx';
import { LuSearch } from 'react-icons/lu';
import { PiStackFill, PiArrowLineLeftFill, PiArrowLineRightFill } from 'react-icons/pi';
import { IoIosPeople, IoMdSettings, IoMdHelpCircle, IoMdClose } from 'react-icons/io';
import { BiSolidUserDetail } from 'react-icons/bi';
import SidebarItem from './SidebarItem';
import { useState } from 'react';

const sidebarItems = [
  {
    title: 'Dashboard',
    Icon: RxDashboard,
  },
  {
    title: 'Reasearch',
    Icon: LuSearch,
  },
  {
    title: 'Hierarchy',
    Icon: PiStackFill,
  },
  {
    title: 'Clients',
    Icon: IoIosPeople,
  },
  {
    title: 'Analysts',
    Icon: BiSolidUserDetail,
  },
  {
    title: 'Setting',
    Icon: IoMdSettings,
    childrens: [
      {
        title: 'Manage Branch',
      },
      {
        title: 'Manage User',
      },
      {
        title: 'Add Category',
      },
    ],
  },
  {
    title: 'Help',
    Icon: IoMdHelpCircle,
  },
];

const Sidebar = ({ menu, setMenu }) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`${open ? 'lg:w-80' : 'lg:w-28'} ${
        menu ? ' sticky top-0 bg-black w-screen h-screen ' : 'hidden'
      } px-10 py-10  z-[1000]  lg:bg-black/90 lg:block  h-full    lg:rounded-tr-xl lg:rounded-br-xl lg:sticky lg:top-0    `}
    >
      <IoMdClose
        className='text-white absolute right-6 top-10 lg:hidden'
        size={24}
        onClick={() => setMenu(false)}
      />
      <img className='w-8 h-8' src={logo} alt='logo' />
      <div className='pt-10 flex flex-col gap-4  '>
        {sidebarItems.map((item, index) => {
          return <SidebarItem key={index} data={item} open={open} />;
        })}
      </div>
      <div
        onClick={() => handleOpen()}
        className='absolute z-50 lg:flex hidden items-center cursor-pointer shadow-2xl justify-between text-gray-500 p-2  rounded-lg -right-4 top-10 bg-white'
      >
        {open ? <PiArrowLineLeftFill /> : <PiArrowLineRightFill />}
      </div>
    </div>
  );
};

export default Sidebar;
