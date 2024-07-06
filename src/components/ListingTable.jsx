import { GrEdit } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';

// Array of Data to be shown, This can be edited to add more data to it
const tableData = [
  {
    no: 1,
    Segment: 'Equity',
    Type: 'Cash',
    CategoryName: 'Call of the Day',
    leg1: '1 Day, 3 hours 20 mins',
    leg2: '2 Day, 1 hour 10 mins',
  },
  {
    no: 2,
    Segment: 'Equity',
    Type: 'Cash',
    CategoryName: 'Call of the Day',
    leg1: '1 Day, 3 hours 20 mins',
    leg2: '2 Day, 1 hour 10 mins',
  },
  {
    no: 3,
    Segment: 'Equity',
    Type: 'Cash',
    CategoryName: 'Call of the Day',
    leg1: '1 Day, 3 hours 20 mins',
    leg2: '2 Day, 1 hour 10 mins',
  },
  {
    no: 4,
    Segment: 'Comodity',
    Type: 'Future',
    CategoryName: 'Cash',
    leg1: '1 Day, 3 hours 20 mins',
    leg2: '2 Day, 1 hour 10 mins',
  },
  {
    no: 5,
    Segment: 'Equity',
    Type: 'Cash',
    CategoryName: 'Call of the Day',
    leg1: '1 Day, 3 hours 20 mins',
    leg2: '2 Day, 1 hour 10 mins',
  },
  {
    no: 6,
    Segment: 'Equity',
    Type: 'Cash',
    CategoryName: 'Call of the Day',
    leg1: '1 Day, 3 hours 20 mins',
    leg2: '2 Day, 1 hour 10 mins',
  },
  {
    no: 7,
    Segment: 'Equity',
    Type: 'Cash',
    CategoryName: 'Call of the Day',
    leg1: '1 Day, 3 hours 20 mins',
    leg2: '2 Day, 1 hour 10 mins',
  },
  {
    no: 8,
    Segment: 'Equity',
    Type: 'Cash',
    CategoryName: 'Call of the Day',
    leg1: '1 Day, 3 hours 20 mins',
    leg2: '2 Day, 1 hour 10 mins',
  },
  {
    no: 9,
    Segment: 'Equity',
    Type: 'Cash',
    CategoryName: 'Call of the Day',
    leg1: '1 Day, 3 hours 20 mins',
    leg2: '2 Day, 1 hour 10 mins',
  },
];

const ListingTable = () => {
  return (
    <div className='grid my-10'>
      {/* Heading of the table */}
      <div className='grid md:grid-cols-7 grid-cols-4 bg-gray-100 p-2  text-gray-400'>
        <h2 className=''>No</h2>
        <h2>Segment</h2>
        <h2>Type</h2>
        <h2>Category Name</h2>
        <h2 className='md:block hidden'>Leg 1 Tracking</h2>
        <h2 className='md:block hidden'>Leg 2 Tracking</h2>
      </div>
      {/* For mobile devices I have hidden few fields they can be viewed by adding an modal on onClick 
      which will give the info of that listing
       */}
      <div className='grid md:grid-cols-7 grid-cols-4 gap-y-10 lg:p-4 p-2'>
        {tableData.map((item) => (
          <>
            <p>{item.no}</p>
            <p>{item.Segment}</p>
            <p>{item.Type}</p>
            <p>{item.CategoryName}</p>
            <p className='md:block hidden'>{item.leg1}</p>
            <p className='md:block hidden'>{item.leg2}</p>
            <div className='md:flex items-center w-full justify-center lg:gap-4 gap-2 text-gray-400 hidden'>
              <GrEdit className='cursor-pointer' size={22} />
              <MdDeleteOutline className='cursor-pointer' size={22} />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default ListingTable;
