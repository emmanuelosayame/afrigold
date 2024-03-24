import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { FaEllipsisV } from 'react-icons/fa';

const data = [
  {
    serialNo: '001',
    firstName: 'Funmilayo',
    lastName: 'Funmilayo',
    customerOrderNumber: 'ID: ORD12345ABC9876',
    gender: 'Female',
    deliveryTime: 'Time: 30 minutes',
    status: 'Ongoing',
  },
  {
    serialNo: '002',
    firstName: 'Funmilayo',
    lastName: 'Funmilayo',
    customerOrderNumber: 'ID: ORD12345ABC9876',
    gender: 'Female',
    deliveryTime: 'Time: 30 minutes',
    status: 'Ongoing',
  },
  {
    serialNo: '003',
    firstName: 'Funmilayo',
    lastName: 'Funmilayo',
    customerOrderNumber: 'ID: ORD12345ABC9876',
    gender: 'Female',
    deliveryTime: 'Time: 30 minutes',
    status: 'Cancelled',
  },
  {
    serialNo: '004',
    firstName: 'Funmilayo',
    lastName: 'Funmilayo',
    customerOrderNumber: 'ID: ORD12345ABC9876',
    gender: 'Female',
    deliveryTime: 'Time: 30 minutes',
    status: 'Completed',
  },
  {
    serialNo: '005',
    firstName: 'Funmilayo',
    lastName: 'Funmilayo',
    customerOrderNumber: 'ID: ORD12345ABC9876',
    gender: 'Female',
    deliveryTime: 'Time: 30 minutes',
    status: 'Ongoing',
  },
  {
    serialNo: '006',
    firstName: 'Funmilayo',
    lastName: 'Funmilayo',
    customerOrderNumber: 'ID: ORD12345ABC9876',
    gender: 'Female',
    deliveryTime: 'Time: 30 minutes',
    status: 'Completed',
  },
  {
    serialNo: '007',
    firstName: 'Funmilayo',
    lastName: 'Funmilayo',
    customerOrderNumber: 'ID: ORD12345ABC9876',
    gender: 'Female',
    deliveryTime: 'Time: 30 minutes',
    status: 'Cancelled',
  },
  {
    serialNo: '008',
    firstName: 'Funmilayo',
    lastName: 'Funmilayo',
    customerOrderNumber: 'ID: ORD12345ABC9876',
    gender: 'Female',
    deliveryTime: 'Time: 30 minutes',
    status: 'Cancelled',
  },
];

const columns: ColumnsType = [
  {
    title: 'S/N',
    dataIndex: 'serialNo',

    // sorter: (a, b) => a.Date.length - b.Date.length,
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    // sorter: (a, b) => a.Reference.length - b.Reference.length,
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    // sorter: (a, b) => a.Customer.length - b.Customer.length,
  },
  {
    title: 'Customer Order number',
    dataIndex: 'customerOrderNumber',
    // sorter: (a, b) => a.Amount.length - b.Amount.length,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    // sorter: (a, b) => a.Amount.length - b.Amount.length,
  },
  {
    title: 'Delivery time',
    dataIndex: 'deliveryTime',
    // sorter: (a, b) => a.Amount.length - b.Amount.length,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    align: 'center',
    render: (cell) => (
      <p
        className={`p-1 text-center rounded-lg w-24 mx-auto ${
          cell === 'Completed'
            ? 'bg-[#3da8644d] text-[#3DA865]'
            : cell === 'Cancelled'
            ? 'bg-[#d42d0746] text-[#D42C07]'
            : 'bg-[#B8B8B8] text-black'
        }`}>
        {cell}
      </p>
    ),
    // sorter: (a, b) => a.Amount.length - b.Amount.length,
  },
  {
    title: '',
    className: '',
    render: () => (
      <button>
        <FaEllipsisV />
      </button>
    ),
    // sorter: (a, b) => a.Payment.length - b.Payment.length,
  },
];

const OrderHistory = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-10'>
      <h5 className='text-[28px] font-medium'>Order History</h5>

      <div className='menu-shadow flex justify-between p-7 text-lg rounded bg-white my-10'>
        <button className='border-b-2 border-b-red-500 w-20'>All</button>
        <button>Completed</button>
        <button>Ongoing</button>
        <button>Cancelled</button>
      </div>

      <div>
        <div className='w-full'>
          <Table
            columns={columns as any}
            dataSource={data}
            className='w-full border rounded-xl p-3'
            //   rowSelection={rowSelection}
            //   pagination={{
            //     total: data.length,
            //     showTotal: (total, range) =>
            //       ` ${range[0]} to ${range[1]} of ${total} items`,
            //     showSizeChanger: true,
            //     onShowSizeChange: onShowSizeChange,
            //   }}
            // rowKey={(record) => record.id}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
