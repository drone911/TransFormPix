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
  const [uploadedImages, setUploadedImages] = React.useState([]);
  const imageInputRef = React.useRef(null);


  const handleDarkModeToggle = (value) => {
    setIsDarkMode(value);
  }

  const handleUploadClick = (event) => {
    imageInputRef.current.click();
  }

  const handleImageInput = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        selectedFile.imageData = reader.result;
        const newImages = [...uploadedImages, selectedFile];
        setUploadedImages(newImages);
      };
      reader.readAsDataURL(selectedFile)
    }
  }

  return (
    <ThemeProvider theme={isdarkMode ? darkTheme : lightTheme}>
      <HeaderBar onValueChange={handleDarkModeToggle}></HeaderBar>
      <Container maxWidth="sm" >
        <Stack mt={5} spacing={5} justifyContent="center" alignItems="center">
          {uploadedImages.length === 0 ? (
            <Box sx={{ minHeight: '65vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <Typography variant='h4' sx={{ fontWeight: '600' }} mb={3}>
                No Images
              </Typography>
              <Typography variant='h4' sx={{ fontWeight: '200' }}>
                {noImagesEmoji}
              </Typography>
            </Box>
          ) : (
            <div style={{ height: '65vh', overflowY: 'auto' }}>
              <Stack spacing={3} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {uploadedImages.map((image, index) => {
                  console.log(image);
                  return (
                    <Card sx={{position: 'relative'}}>
                      <img src={image.imageData} key={index}></img>
                      <div className="image-overlay">
                        <div className="image-dimensions">
                          {image.width}px x {image.height}px
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </Stack>
            </div>
          )}
        </Stack>
        <Box mt={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <Button component="label" variant='contained' elevation={3} onClick={handleUploadClick}>
            <CloudUpload sx={{ fontSize: 60, paddingRight: 2 }} color='secondary' />
            <Typography variant='h5' sx={{ fontWeight: '600' }}>
              Upload image
            </Typography>
            <VisuallyHiddenInput ref={imageInputRef} type="file" sx={{ display: 'none' }} onChange={handleImageInput} accept="image/jpg, image/jpeg, image/png" />
          </Button>
          <Typography variant='body2' py={1}>
            No Image leaves this device.
          </Typography>
        </Box>
      </Container>

      <AppBar position="fixed" style={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
        </Toolbar>
      </AppBar>
    </ThemeProvider >
  );
}

export default App;
