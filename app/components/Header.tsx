import * as React from 'react';
import Image from 'next/image';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Metadata } from 'next';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pachamama',
};

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '16px' }}>
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
            <Link href='/'>
              <Image
                src='/images/logo.png'
                alt='Logo'
                width={100}
                height={100}
              />
            </Link>
          </IconButton>
          <Typography variant='h1' component='div' sx={{ flexGrow: 1 }}>
            Pachamama
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
