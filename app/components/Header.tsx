import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Head from './Head';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ConnectButton from './ConnectButton';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Head
        title='Pachamama'
        description='Temporary stewardship for collective resources'
      />
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h1' component='div' sx={{ flexGrow: 1 }}>
            Pachamama
          </Typography>
          <ConnectButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
