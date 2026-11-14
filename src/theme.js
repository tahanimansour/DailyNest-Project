import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  spacing: 8,
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 }
  },
  palette: {
    mode: 'light',
    primary: { main: '#0B4A3A', light: '#E8EDE3', dark: '#063326', contrastText: '#FAF7F0' },
    secondary: { main: '#B8955A', light: '#C2AF88', dark: '#8A6B38' },
    success: { main: '#2E7D32' },
    error: { main: '#D32F2F' },
    info: { main: '#0B4A3A' },
    background: { default: '#FAF7F0', paper: '#FCFAF6' },
    text: { primary: '#0A2A21', secondary: '#7B8076' },
    divider: '#E4E1D7',
    brand: { main: '#0A2A21', light: '#E7EAD5', dark: '#063326', contrastText: '#FAF7F0' }
  },
  typography: {
    fontFamily: 'system-ui, sans-serif',
    body1: { fontSize: '1rem' },
    h1: { fontFamily: 'Georgia, serif', fontSize: '2rem' },
    h2: { fontFamily: 'Georgia, serif', fontSize: '1.5rem' },
    h3: { fontFamily: 'Georgia, serif', fontSize: '1.2rem' },
    button: { textTransform: 'none' }
  },
  shape: { borderRadius: 4 }
})

export default theme

