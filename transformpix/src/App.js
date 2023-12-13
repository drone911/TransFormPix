import React from 'react';
import './App.css';

import { styled } from '@mui/material/styles';

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { Button, Card, Typography } from '@mui/material';

import HeaderBar from './components/HeaderBar';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import AddCircle from '@mui/icons-material/AddCircle';
import CloudUpload from '@mui/icons-material/CloudUpload';



const lightTheme = createTheme({
  palette: {
    "primary": { "main": "#ffdd03" },
    "secondary": { "main": "#3536cd" },
    "mode": "light"
  }
})

const darkTheme = createTheme({
  palette: {
    "primary": { "main": "#ffdd03" },
    "secondary": { "main": "#3536cd" },
    "mode": "dark"
  }
})

const label = { inputProps: { 'aria-label': 'Dark Mode Switch' } };

const noImagesEmoji = String.raw`(ノ￣□￣)ノ ~┻━┻`;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


function App() {
  const [isdarkMode, setIsDarkMode] = React.useState(false);

  const handleDarkModeToggle = (value) => {
    setIsDarkMode(value);
  }


  return (
    <ThemeProvider theme={isdarkMode ? darkTheme : lightTheme}>
      <HeaderBar onValueChange={handleDarkModeToggle}></HeaderBar>
      <Container maxWidth="sm" >
        <Stack mt={5} spacing={5} justifyContent="center" alignItems="center">
          <Box sx={{ minHeight: '65vh', display: 'flex', alignItems: 'center' }}>
            <Typography variant='h4' sx={{ fontWeight: '500' }}>
              {noImagesEmoji}
            </Typography>
          </Box>
          <Button component="label" variant='contained' elevation={3}>
            <CloudUpload sx={{ fontSize: 60, paddingRight: 2 }} color='secondary' />
            <Typography variant='h5' sx={{ fontWeight: 'bolder' }}>
              Upload image
            </Typography>
            <VisuallyHiddenInput type="file" sx={{ display: 'none' }} accept="image/png, image/jpeg"/>
          </Button>
        </Stack>

      </Container>

      <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
