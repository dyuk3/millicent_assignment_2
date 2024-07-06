import { MdOutlineFileDownload } from 'react-icons/md';
import { RiFilter2Fill } from 'react-icons/ri';
import CategorySearch from './CategorySearch';
import ListingTable from './ListingTable';

const CategoryListing = () => {
  return (
    <div className='m-6 py-8 px-4 shadow-2xl  '>
      <div className='flex justify-between '>
        <h1 className='text-3xl font-semibold'>Category Listing</h1>
        <div className='flex items-center text-emerald-500 gap-4'>
          <MdOutlineFileDownload size={40} className='cursor-pointer' />
          <RiFilter2Fill size={40} className='cursor-pointer' />
          <button className='p-3 rounded-lg text-white text-xl bg-emerald-500 font-semibold'>
            + Add Category
          </button>
        </div>
      </div>
      <CategorySearch />
      <ListingTable />
    </div>
  );
};

export default CategoryListing;
