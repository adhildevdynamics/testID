// import { Container,  Typography, Paper } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom'
// import axios from 'axios'

// export const ViewId = () => {

//     const location = useLocation();
//     const { userId } = location.state || {};
//     const [employeeData, setEmployeeData] = useState(null);

//     useEffect(() => {
//         if(userId) {
//             axios.get(`https://localhost:44301/api/User/0a3319af-2b1e-495c-bfe1-c1aeba821402/${userId}`)
//             .then (response => {
//                 setEmployeeData(response.data);
//             })
//             .catch(error =>{
//                 console.error('Error fetching the employeee Data!',error);
//             });
//         }
//     }, [userId]);

//     // if ( !employeeData) {
//     //     return  <div> Loading ... </div>;
        
//     // }
//   return (
//     <Container maxWidth='xs' >
//         <Paper elevation={12} sx={{ mt:15, py:5}} style={{ backgroundColor:'#FED801'}}>
//             <Typography 
//             sx={{ my:2,
//                 py:3,
//                 pl:5,
//                 color:'#000339',
//                 fontWeight:'bold',
//                 fontSize:'20px'
//             }}
//             >
//                Employee Name: {employeeData.name}
//             </Typography>

//             <Typography 
//             sx={{ my:2,
//                 py:3,
//                 pl:5,
//                 color:'#000339',
//                 fontWeight:'bold',
//                 fontSize:'20px'
//             }}
//             >
//                 Company: {employeeData.company}
//             </Typography>
            

            
//         </Paper>

//     </Container>
//   )
// }


import { Container, Typography, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export const ViewId = () => {
  const location = useLocation();
  const { userId } = location.state || {};
  const [employeeData, setEmployeeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userId) {
      axios.get(`https://localhost:44301/api/User/${userId}`)
        .then(response => {
          setEmployeeData(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching the employee data!', error);
          setError('Error fetching the employee data!');
          setLoading(false);
        });
    }
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container maxWidth='xs'>
      <Paper elevation={12} sx={{ mt: 15, py: 5 }} style={{ backgroundColor: '#FED801' }}>
        <Typography
          sx={{
            my: 2,
            py: 3,
            pl: 5,
            color: '#000339',
            fontWeight: 'bold',
            fontSize: '20px'
          }}
        >
          Employee Name: {employeeData.name}
        </Typography>
        <Typography
          sx={{
            my: 2,
            py: 3,
            pl: 5,
            color: '#000339',
            fontWeight: 'bold',
            fontSize: '20px'
          }}
        >
          Company: {employeeData.company}
        </Typography>
      </Paper>
    </Container>
  );
};
