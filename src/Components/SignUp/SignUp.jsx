// import {  LockOutlined } from '@mui/icons-material'
// import { Button, TextField, Box, Avatar, Container, Paper, Typography, FormControlLabel, Checkbox } from '@mui/material'
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';


//  const SignUp = () => {

//   const [userId,setUserId] = useState()
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate('/viewid', { state: { userId} });
//   };

//   const handleSubmit = () => console.log('log-in')
//   return (
    
//     <Container maxWidth='xs'>
//       <Paper elevation={8} sx={{ mt:8, padding:2}}>
//       <Avatar sx={{ mx:'auto',bgcolor:'#274126',textAlign:'center',mb:1}}>
//         <LockOutlined>
//         </LockOutlined>
//         </Avatar>
//         <Typography
//         component='h1' variant='h5'
//         sx={{ textAlign:'center'}}
//         >
//           Login
//         </Typography>
//         <Box 
//         component='form'
//         onSubmit={handleSubmit}
//         noValidate
//         sx={{ mt:1 }}

//         >
       
//         <TextField
//         placeholder='Enter ID'
//         fullWidth
//         required
//         autoFocus
//         sx={{ mb: 2}}
//         id="standard-basic"  variant="standard" 
//         value={userId}
//         onChange={(e) => setUserId(e.target.value)}
//         /> 
        
//         <FormControlLabel
//         control={<Checkbox value="remember" color='primary'/>}
//         label="Remember me"
//         />

//         <Button type="submit" variant="contained" fullWidth sx={{ mt:1}}   onClick={handleClick}>
//           Login
//         </Button>
//         </Box>
//       </Paper>
//     </Container>


//   )
// }

// export default SignUp




import { LockOutlined } from '@mui/icons-material';
import { Button, TextField, Box, Avatar, Container, Paper, Typography, FormControlLabel, Checkbox } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate('/viewid', { state: { userId } });
  };

  return (
    <Container maxWidth='xs'>
      <Paper elevation={8} sx={{ mt: 8, padding: 2 }}>
        <Avatar sx={{ mx: 'auto', bgcolor: '#274126', textAlign: 'center', mb: 1 }}>
          <LockOutlined />
        </Avatar>
        <Typography component='h1' variant='h5' sx={{ textAlign: 'center' }}>
          Login
        </Typography>
        <Box component='form' onSubmit={handleClick} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder='Enter ID'
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
            id="standard-basic"
            variant="standard"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color='primary' />}
            label="Remember me"
          />
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            Login
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default SignUp;
