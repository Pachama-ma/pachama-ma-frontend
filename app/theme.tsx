import { createTheme } from '@mui/material/styles';

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

export default theme;
