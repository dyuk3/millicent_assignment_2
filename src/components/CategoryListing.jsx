import { MdOutlineFileDownload } from 'react-icons/md';
import { RiFilter2Fill } from 'react-icons/ri';
import CategorySearch from './CategorySearch';
import ListingTable from './ListingTable';

const CategoryListing = () => {
  return (
    <div className='lg:m-6 m-2 py-6 px-4 shadow-2xl  '>
      <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-6  my-2 lg:mb-4  '>
        <h1 className='text-3xl font-semibold'>Category Listing</h1>
        <div className='flex items-center text-emerald-500 gap-4'>
          <MdOutlineFileDownload size={40} className='cursor-pointer' />
          <RiFilter2Fill size={40} className='cursor-pointer' />
          <button className='p-3 rounded-lg text-white text-xl bg-emerald-500 font-semibold'>
            + Add Category
          </button>
        </div>
      </div>
      {/* Different component for search inputs  and dropdowns */}
      <CategorySearch />
      {/* Overall Data being displayed by this component */}
      <ListingTable />
    </div>
  );
};

export default CategoryListing;
