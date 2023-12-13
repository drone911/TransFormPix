import React from 'react';
import './App.css';

import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';

import HeaderBar from './components/HeaderBar';

import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import addCiricleIcon from '@mui/icons-material/AddCircle';


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

function App() {
  const [isdarkMode, setIsDarkMode] = React.useState(false);

  const handleDarkModeToggle = (value) => {
    setIsDarkMode(value);
  }

  return (
    <ThemeProvider theme={isdarkMode ? darkTheme : lightTheme}>
      <HeaderBar onValueChange={handleDarkModeToggle}></HeaderBar>

      

      <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          <addCiricleIcon color='secondary'></addCiricleIcon>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default App;
