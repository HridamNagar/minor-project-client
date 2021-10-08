import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { FontStyle } from '@mui/material/styles/createTypography';
import { Container } from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import UpdateIcon from '@mui/icons-material/Update';
import AssessmentIcon from '@mui/icons-material/Assessment';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { fontSize, typography } from '@mui/system';
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <AppBar>
          <Toolbar>
            <IconButton>
              <Menu id='icon1' />
            </IconButton>
          </Toolbar>
        </AppBar>

        <Typography
          marginBottom='10'
          fontFamily='cursive'
          id='head'
          variant='h1'
        >
          Information Management Portal
        </Typography>

        <Button
          startIcon={<HowToRegIcon id='icon1' />}
          variant='contained'
          style={{
            fontSize: 30,
            margin: 20,
            marginTop: 70,
            width: 700,
          }}
          size='large'
        >
          New Registration For Students
        </Button>
        <Button
          startIcon={<UpdateIcon id='icon1' />}
          variant='contained'
          style={{
            fontSize: 30,
            margin: 20,
            width: 700,
          }}
          size='large'
        >
          Update Information for Students
        </Button>
        <Button
          startIcon={<EmojiPeopleIcon id='icon1' />}
          variant='contained'
          style={{
            fontSize: 30,
            margin: 20,
            width: 700,
          }}
          size='large'
        >
          New Faculty Registration
        </Button>
        <Button
          startIcon={<AssessmentIcon id='icon1' />}
          variant='contained'
          style={{
            fontSize: 30,
            margin: 20,
            width: 700,
          }}
          size='large'
        >
          Students Data
        </Button>
      </header>
    </div>
  );
}

export default App;
