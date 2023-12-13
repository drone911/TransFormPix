import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'


const label = { inputProps: { 'aria-label': 'Dark Mode Switch' } };

export default function ButtonAppBar({ onValueChange }) {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const handleDarkModeToggle = (event) => {
        setIsDarkMode(event.target.checked);
        onValueChange(event.target.checked);
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, cursor: "pointer", fontWeight: 'bold' }}>
                        TransFormPix
                    </Typography>
                    <Switch checked={isDarkMode} onChange={handleDarkModeToggle} color='primary' {...label}></Switch>
                    {isDarkMode && <DarkModeIcon fontSize="large"></DarkModeIcon>}
                    {!isDarkMode && <LightModeIcon fontSize="large"></LightModeIcon>}

                </Toolbar>
            </AppBar>
        </Box>
    );
}