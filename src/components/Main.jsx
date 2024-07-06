import CategoryListing from './CategoryListing';
import Navbar from './Navbar';

const Main = ({ menu, setMenu }) => {
  return (
    <div className='flex-1'>
      <Navbar setMenu={setMenu} />
      <CategoryListing />
    </div>
  );
};

export default Main;
