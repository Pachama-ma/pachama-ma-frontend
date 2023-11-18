import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6200ea', // A vibrant purple
      contrastText: '#ffffff', // White text for contrast
    },
    secondary: {
      main: '#03dac6', // A bright teal
      contrastText: '#000000', // Black text for contrast
    },
    background: {
      default: '#f4f4f4', // A light grey for page backgrounds
      paper: '#ffffff', // White for paper elements
    },
    error: {
      main: '#b00020', // Strong red for errors
    },
    warning: {
      main: '#ff9800', // Orange for warnings
    },
    info: {
      main: '#2196f3', // Blue for informational messages
    },
    success: {
      main: '#4caf50', // Green for success states
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 500,
      fontSize: '2.5rem',
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.125rem',
      letterSpacing: '-0.00833em',
    },
    // ... other typography settings
  },
  spacing: 8, // Default spacing
  shape: {
    borderRadius: 4, // Default border radius
  },
  // Additional customizations can go here (e.g., components overrides)
});

export default theme;
