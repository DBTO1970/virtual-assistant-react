import React from 'react';
import Button from "@mui/material/Button";
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import MiscellaneousServicesRoundedIcon from '@mui/icons-material/MiscellaneousServicesRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <Box className="Footer">
            
                <Typography  sx={{ mb: 1.5 }} color="white">&copy;2021 Don Barto</Typography>
        </Box>
    )
}