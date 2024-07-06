import CategorySearchItem from './CategorySearchItem';
import { SlReload } from 'react-icons/sl';

// Dropdown menu array
const searchFields = [
  {
    title: 'Role',
    dropdown: ['Role', 'Admin', 'User', 'VIP'],
  },
  {
    title: 'Zone',
    dropdown: ['Zone', 'North', 'South', 'East', 'West'],
  },
  {
    title: 'City',
    dropdown: ['City', 'Amsterdam', 'Mumbai', 'Pune', 'Cairo'],
  },
  {
    title: 'Name',
    dropdown: ['Name', 'John Doe', 'Evan Smith', 'User'],
  },
];

const CategorySearch = () => {
  return (
    <div className='text-gray-600 lg:flex justify-items-start gap-20 hidden'>
      {searchFields.map((field, index) => {
        return <CategorySearchItem key={index} data={field} />;
      })}
      <SlReload className='text-emerald-500 self-end cursor-pointer' size={30} />
    </div>
  );
};

export default CategorySearch;
