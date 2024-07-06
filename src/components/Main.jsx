import CategoryListing from './CategoryListing';
import Navbar from './Navbar';

const Main = () => {
  return (
    <div className='flex-1'>
      <Navbar />
      <CategoryListing />
    </div>
  );
};

export default Main;
