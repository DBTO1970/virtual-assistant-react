import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography'
import 'fontsource-roboto';
export default function About () {
   
        return(
            <Box sx={{textAlign: 'justify', color: 'black', bgcolor: 'background.paper', backgroundColor: 'white', padding: '20px', margin: '10px auto 10px auto' }}>
                <Card style={{padding: "10px", margin: "5px", alignSelf: 'center' }}>
                    <Typography sx={{ fontSize: 'h4.fontSize', color: 'black', padding: "10px" }}>About</Typography>
                    <Typography>We exist to assist you with administrative, marketing, editing, and technology-related tasks to keep you focused and productive.  Why spend valuable time learning to do basic administrative tasks, when you can leverage the skills of seasoned professionals, for a fraction of the cost to keep someone on staff.</Typography><br />
                    <Typography>Your business and personal projects will benefit greatly as you spend more time on them, and less time on repetetive and time-consuming tasks that lie outside your specialties. Our experts will efficiently complete these assignments and deliver them to you ready for action.</Typography>
                    <Typography></Typography>
                </Card>
            </Box>
            
        );
};