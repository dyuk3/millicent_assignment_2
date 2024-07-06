import { GrEdit } from 'react-icons/gr';
import { MdDeleteOutline } from 'react-icons/md';

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
      <div className='grid grid-cols-7 bg-gray-100 p-2 text-gray-400'>
        <h2>No</h2>
        <h2>Segment</h2>
        <h2>Type</h2>
        <h2>Category Name</h2>
        <h2>Leg 1 Tracking</h2>
        <h2>Leg 2 Tracking</h2>
      </div>
      {/* <div className='grid grid-cols-6 gap-y-10  '>
        <div>
          {tableData.map((item) => (
            <p>{item.no}</p>
          ))}
        </div>
        <div>
          {tableData.map((item) => (
            <p>{item.Segment}</p>
          ))}
        </div>
        <div>
          {tableData.map((item) => (
            <p>{item.Type}</p>
          ))}
        </div>
        <div>
          {tableData.map((item) => (
            <p>{item.CategoryName}</p>
          ))}
        </div>
        <div>
          {tableData.map((item) => (
            <p>{item.leg1}</p>
          ))}
        </div>
        <div>
          {tableData.map((item) => (
            <p>{item.leg2}</p>
          ))}
        </div>
      </div> */}
      <div className='grid grid-cols-7 gap-y-10 p-4'>
        {tableData.map((item) => (
          <>
            <p>{item.no}</p>
            <p>{item.Segment}</p>
            <p>{item.Type}</p>
            <p>{item.CategoryName}</p>
            <p>{item.leg1}</p>
            <p>{item.leg2}</p>
            <div className='flex items-center w-full justify-center gap-4 text-gray-400'>
              <GrEdit className='cursor-pointer' size={22} />
              <MdDeleteOutline className='cursor-pointer' size={22} />
            </div>
          </>
        ))}
      </div>
    </div>
    // <>
    //   <table className='grid grid-flow-col border-collapse min-w-full grid-cols-6 gap-10'>
    //     <thead>
    //       <tr>
    //         <th>No</th>
    //         <th>Segment</th>
    //         <th>Type</th>
    //         <th>Category Name</th>
    //         <th>Leg 1 Tracking</th>
    //         <th>Leg 2 Tracking</th>
    //       </tr>
    //     </thead>
    //   </table>
    // </>
  );
};

export default ListingTable;
