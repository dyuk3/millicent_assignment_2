import logo from '../assets/logo.png';
import { RxDashboard } from 'react-icons/rx';
import { LuSearch } from 'react-icons/lu';
import { PiStackFill } from 'react-icons/pi';
import { IoIosPeople, IoMdSettings, IoMdHelpCircle } from 'react-icons/io';
import { BiSolidUserDetail } from 'react-icons/bi';
import SidebarItem from './SidebarItem';

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

const Sidebar = () => {
  return (
    <div className='w-80 px-10 py-10 bg-black/90 h-screen rounded-tr-xl rounded-br-xl'>
      <img className='w-8 h-8' src={logo} alt='logo' />
      <div className='pt-10 flex flex-col gap-4 '>
        {sidebarItems.map((item, index) => {
          return <SidebarItem key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
