// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect, useState } from 'react';
// import Details from './Details';
// import UserAction from '../actions/UserAction';
// import { Routes, Route, Link } from 'react-router-dom';
// import { Table, Button, FormControl, Form, Nav } from 'react-bootstrap';

// export default function Users() {
//   // state = { users: [] };
//   // componentDidMount() {
//   //   fetch('https://jsonplaceholder.typicode.com/users')
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       this.setState({ users: data });
//   //     });
//   // }
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(UserAction());
//   }, [dispatch]);
//   const state = useSelector((state) => state);
//   const { users } = state;
//   users.sort((a, b) => a.name.localeCompare(b.name));
//   const [inputVal, setInputVal] = useState('');
//   const filterUsers = users.filter((item) =>
//     item.name.toLowerCase().includes(inputVal.toLowerCase())
//   );

//   return (
//     <>
//       <h3>CANDİDATE LİST</h3>

//       <Form className='d-flex'>
//         <FormControl
//           onChange={(e) => setInputVal(e.target.value)}
//           type='search'
//           placeholder='Search'
//           className='me-2'
//           aria-label='Search'
//         />
//         <Button variant='outline-dark'>Search</Button>
//       </Form>
//       <Table striped bordered hover size='sm' variant='dark'>
//         <thead>
//           <tr>
//             <td>#</td>
//             <td>NAME-SURNAME</td>
//             <td>PHONE NUMBER</td>
//             <td>MORE İNFORMATİON </td>
//           </tr>
//         </thead>
//         <tbody>
//           {filterUsers.map((item) => (
//             <tr key={item.id}>
//               {item.id}

//               <td>
//                 {item.name}.{item.surname}
//               </td>
//               <td>{item.phone}</td>
//               <td>
//                 <Nav.Link as={Link} to={'/Details'}>
//                   <Button variant='secondary'>DETAİLS</Button>
//                 </Nav.Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <Routes>
//           <Route path='users/:id' element={<Details />} />
//         </Routes>
//       </Table>
//     </>
//   );
// }
