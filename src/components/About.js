import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
export default function About () {
   
        return(
            <Box sx={{textAlign: 'justify', color: 'black', backgroundColor: 'white', padding: '5px', marginLeft: '10px' }}>
                <Typography sx={{ fontSize: 'h3.fontSize', color: 'black' }}>About</Typography>
                <Typography>We exist to assist you with administrative, marketing, editing, and technology-related tasks to keep you focused and productive.  Why spend valuable time learning to do basic administrative tasks, when you can leverage the skills of seasoned professionals, for a fraction of the cost to keep someone on staff.</Typography>
                <Typography>Your business and personal projects will benefit greatly as you spend more time on them, and less time on repetetive and time-consuming tasks that lie outside your specialties. Our experts will efficiently complete these assignments and deliver them to you ready for action.</Typography>
                <Typography></Typography>
            </Box>
            
        );
};