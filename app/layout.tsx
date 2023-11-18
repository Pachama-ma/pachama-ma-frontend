'use client';

import { ThemeProvider } from '@emotion/react';

import { createTheme } from '@mui/material/styles';

import { ReactNode } from 'react';
import { Web3Modal } from './contexts/Web3Modal';

interface IRootLaoyut {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#fcfffe', // Neon blue
      contrastText: '#1C291D', // White text
    },
    secondary: {
      main: '#f50057', // Neon pink
      contrastText: '#000', // Black text
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1c1c1c', // Slightly lighter dark shade for paper elements
    },
    error: {
      main: '#ff3d00', // Bright orange for errors
    },
    warning: {
      main: '#ffc400', // Amber for warnings
    },
    info: {
      main: '#00e5ff', // Bright cyan for informational messages
    },
    success: {
      main: '#00e676', // Vivid green for success states
    },
  },
  typography: {
    fontFamily: '"Playfair Display", "Roboto", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: '2.5rem',
      color: '#2B2C30', // Neon blue for headers
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.125rem',
    },
    // ... other typography settings
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  // Additional customizations for components can go here
});

export default function RootLayout({ children }: any) {
  return (
    <html lang='en'>
      <ThemeProvider theme={theme}>
        <body>
          <Web3Modal>{children}</Web3Modal>
        </body>
      </ThemeProvider>
    </html>
  );
}
