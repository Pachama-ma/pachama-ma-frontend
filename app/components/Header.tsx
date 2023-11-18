import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ConnectButton from './ConnectButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pachamama',
};

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <link
        href='https://fonts.googleapis.com/css2?family=Playfair+Display&family=Public+Sans:wght@100&display=swap'
        rel='stylesheet'
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
