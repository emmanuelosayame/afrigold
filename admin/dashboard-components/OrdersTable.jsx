import React, { useState } from 'react';
import styles from './OrderTable.module.css';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search'; // Import SearchIcon

const columns = [
  { id: 'serialNumber', label: 'S/N', minWidth: 50 },
  { id: 'firstName', label: 'First Name', minWidth: 100 },
  { id: 'lastName', label: 'Last Name', minWidth: 100 },
  { id: 'orderNumber', label: 'Order Number', minWidth: 100 },
  { id: 'gender', label: 'Gender', minWidth: 80 },
  { id: 'deliveryTime', label: 'Delivery Time', minWidth: 100 },
  { id: 'status', label: 'Status', minWidth: 100 },
];

function createData(serialNumber, firstName, lastName, orderNumber, gender, deliveryTime, status) {
  return { serialNumber, firstName, lastName, orderNumber, gender, deliveryTime, status };
}

const initialRows = [
  createData(1, 'John', 'Doe', '12345', 'Male', '2:00 PM', 'Delivered'),
  createData(2, 'Jane', 'Smith', '54321', 'Female', '3:30 PM', 'Processing'),
  createData(3, 'Mary', 'Smith', '54343', 'Female', '4:30 PM', 'Cancelled'),
  createData(4, 'Paul', 'Smith', '54323', 'Male', '6:30 PM', 'Active'),
  createData(5, 'Peter', 'Smith', '54321', 'Male', '9:30 PM', 'Pending'),
  // Add more rows as needed
];

export default function OrdersTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filteredRows = initialRows.filter((row) => {
    // Filter rows based on search query
    return (
      row.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.gender.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.orderNumber.toLowerCase().includes(searchQuery.toLowerCase()) || // Include Order Number
      row.deliveryTime.toLowerCase().includes(searchQuery.toLowerCase())   // Include Delivery Time
    );
  });

  function getStatusBackgroundColor(status) {
    switch (status.toLowerCase()) {
      case 'delivered':
        return 'green'; // Green background for 'Delivered'
      case 'active':
        return 'yellow'; // Yellow background for 'Active'
      case 'cancelled':
        return 'red'; // Red background for 'Cancelled'
      case 'pending':
      case 'processing':
        return 'blue'; // Blue background for 'Pending' and 'Processing'
      default:
        return 'inherit';
    }
  }

  return (
    <div className={styles["orders-container"]}>
      {/* Styled search input with search icon and adjusted width */}
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{
            width: '250px',
            marginBottom: '48px',
            borderRadius: '18px',
            marginTop: '32px',
            marginLeft: '16px',
            '& .MuiOutlinedInput-root': {
              borderRadius: '18px',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'your-border-color', // Add your desired border color here
            },
            '& .MuiOutlinedInput-input': {
              padding: '10px', // Adjust the input text padding as needed
            },
            '& .MuiInputLabel-root': {
              // Add your desired background color here
              paddingLeft: '8px', // Adjust label padding as needed
            },
          }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          ),
          style: { width: '250px',  }, // Adjust the width as needed
        }}
      />
   
      <Paper sx={{ width: '100%' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table aria-label="simple table">
           <TableHead>
             <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {filteredRows
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  .map((row) => {
    const statusBackgroundColor = getStatusBackgroundColor(row.status);

    return (
      <TableRow hover role="checkbox" tabIndex={-1} key={row.serialNumber}>
        {columns.map((column) => {
          const value = row[column.id];
          return (
            <TableCell
              key={column.id}
              align={column.align}
              style={{
                backgroundColor: column.id === 'status' ? statusBackgroundColor : 'inherit',
                padding: column.id === 'status' ? '4px 8px' : '12px 8px',
              }}
            >
              {value}
            </TableCell>
          );
        })}
      </TableRow>
    );
  })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
  rowsPerPageOptions={[10, 25, 100]}
  component="div"
  count={filteredRows.length}  // Replace rows.length with filteredRows.length
  rowsPerPage={rowsPerPage}
  page={page}
  onPageChange={handleChangePage}
  onRowsPerPageChange={handleChangeRowsPerPage}
/>
    </Paper>
    </div>
  );
}