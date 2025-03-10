import { Box, styled, Typography } from '@mui/material'
import React from 'react'

 const NotFound = () => {

    const CustomBox = styled(Box)(({ theme }) => ({
        width:'30%',
        [theme.breakpoints.down("md")]: {
            width:'85%'
        },
    }));
  return (
    <Box
    sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:'40px',
        mt:'65px',
        mb:'100px'
    }}
    >
        <div
        style={{
            width:'5%',
            height:'5px',
            backgroundColor:'#000339',
            margin:'0 auto'
        }}></div>

        <Typography
        variant='h3'
        sx={{ fontSize:'35px', fontWeight:'bold', color:'#000339', my:3 }}
        >
           404 : Page not Found
        </Typography>

        <CustomBox>
            <Typography
            sx={{
                fontSize:'16px',
                fontWeight:'500',
                color:'#5A6473',
                textAlign:'center'
            }}
            >
                We Could not find what you are looking for?
            </Typography>
        </CustomBox>
    </Box>
  )
}
export default NotFound