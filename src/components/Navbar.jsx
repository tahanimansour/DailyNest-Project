import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import Search from './Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import PersonOutlineIcon from '@mui/icons-material/PersonOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const token = useAuthStore((state) => state.token)
  const logout = useAuthStore((state) => state.logout)

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <AppBar position="static" sx={{ bgcolor: '#0A2A21', color: '#E7EAD5', boxShadow: 'none', borderBottom: '1px solid #B8955A' }}>
      <Container maxWidth="lg">
      <Toolbar disableGutters sx={{ display: { xs: 'flex', md: 'grid' }, gridTemplateColumns: 'auto 1fr auto', minHeight: { xs: 48, sm: 54 }, gap: { xs: 1, md: 2 }, flexWrap: 'wrap', py: 0.5 }}>
        <Typography variant="h6" component={Link} to="/" sx={{ color: '#C2AF88', '&:visited': { color: '#C2AF88' }, display: 'flex', alignItems: 'center', gap: 0.75, textDecoration: 'none', fontSize: 15, fontWeight: 700, letterSpacing: -0.5 }}>
          <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, bgcolor: '#C2AF88', color: '#0A2A21', borderRadius: 1 }}>
            <LocalMallOutlinedIcon sx={{ fontSize: 16 }} />
          </Box>
          DailyNest
        </Typography>

        <Box component="nav" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2, pl: { xs: 0, md: 4 }, order: { xs: 3, md: 0 }, width: { xs: '100%', md: 'auto' }, '& .MuiButton-root:hover': { textDecoration: 'underline', textUnderlineOffset: '6px' } }}>
          <Button color="inherit" component={Link} to="/" sx={{ textTransform: 'none', fontSize: 12, minWidth: 0, textDecoration: location.pathname === '/' && !location.hash ? 'underline' : 'none', textUnderlineOffset: '6px' }}>Home</Button>
          <Button color="inherit" component={Link} to="/products" sx={{ textTransform: 'none', fontSize: 12, minWidth: 0, textDecoration: location.pathname.startsWith('/products') || location.hash === '#products' ? 'underline' : 'none', textUnderlineOffset: '6px' }}>Products</Button>
          <Button color="inherit" component={Link} to="/categories" sx={{ textTransform: 'none', fontSize: 12, minWidth: 0, textDecoration: location.pathname.startsWith('/categories') ? 'underline' : 'none', textUnderlineOffset: '6px' }}>Categories</Button>
          {token ? (
            <Button color="inherit" onClick={handleLogout} sx={{ textTransform: 'none', fontSize: 12, minWidth: 0 }}>Logout</Button>
          ) : (
            <Button color="inherit" component={Link} to="/login" sx={{ textTransform: 'none', fontSize: 12, minWidth: 0, textDecoration: location.pathname === '/login' ? 'underline' : 'none', textUnderlineOffset: '6px' }}>Login</Button>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 2, minWidth: 0, ml: { xs: 'auto', md: 0 } }}>
        <Search />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, ml: { xs: 'auto', md: 0 }, px: 0.5 }}>
          <FavoriteBorderIcon sx={{ fontSize: 16 }} />
          <PersonOutlineIcon sx={{ fontSize: 16 }} />
          <LocalMallOutlinedIcon sx={{ fontSize: 16 }} />
          <DarkModeOutlinedIcon sx={{ fontSize: 16 }} />

        </Box>
        </Box>
      </Toolbar>
      </Container>
    </AppBar>
  )
}
