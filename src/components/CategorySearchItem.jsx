import { IoIosArrowDown } from 'react-icons/io';

const CategorySearchItem = ({ data }) => {
  return (
    <div className='flex flex-col gap-4 text-gray-400 font-medium'>
      <p>{data.title}</p>
      {data.title === 'Name' ? (
        <input
          type='text'
          placeholder='Search by Category'
          className='border rounded-md p-2 px-4 outline-none'
        />
      ) : (
        <div className='flex items-center w-40 border bg-white '>
          <select
            className='p-2 w-full bg-white   cursor-pointer  outline-none appearance-none'
            name='role'
            id='selectrole'
          >
            {data.dropdown.map((item, index) => (
              <option className='py-10 w-40' key={index} value=''>
                {item}
              </option>
            ))}
          </select>
          <IoIosArrowDown className='text-emerald-500 mr-2' size={20} />
        </div>
      )}
    </div>
  );
};

export default CategorySearchItem;
