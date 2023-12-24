import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import styled from '@emotion/styled';


const label = { inputProps: { 'aria-label': 'Dark Mode Switch' } };

const ElevatedLogo = styled('img') (({theme}) =>`
    margin: 10px 10px;
    padding: 6px 4px 4px 6px;
    background-color: white;
    border-radius: 10% 50%;
    box-shadow: ${theme.shadows[4]};
`);

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
                    <ElevatedLogo width={60} height={60} src={process.env.PUBLIC_URL + '/logo-black-border.svg'} alt="logo"></ElevatedLogo>
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