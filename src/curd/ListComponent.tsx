import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TablePagination } from '@mui/material';

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
}

interface ListComponentProps {
  users: User[];
  onSelectUser: (user: User) => void;
}

const ListComponent: React.FC=() => {
  const [items, setItems] = useState<User[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const navigate = useNavigate();

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const displayedUsers = items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);



  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://645d193a250a246ae3179078.mockapi.io/users');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    fetchItems();
  }, []);


  // const handleDeleteUser = (userId: number) => {
  //   setItems((prevItems) => prevItems.filter((item) => item.id !== userId));
  // };

  const handleDeleteUser = async (userId: number) => {
    try {
      // Make the DELETE request to your API endpoint
      const response = await fetch(`https://645d193a250a246ae3179078.mockapi.io/users/${userId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // If the deletion is successful, update the users state by filtering out the deleted user
        const updatedUsers = items.filter((user) => user.id !== userId);
        setItems(updatedUsers);
      } else {
        // Handle the case when the deletion fails
        console.error('Failed to delete user:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };



  const navToDash = (userId: number) => {
    navigate(`/update/${userId}`);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displayedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button style={{ marginRight: '16px' }} variant="contained" color="primary" onClick={() => navToDash(user.id)}>View</Button>
                <Button variant="contained" color="secondary" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
};

export default ListComponent;
