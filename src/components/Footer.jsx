import { Box, Container, Divider, Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined'
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#0A2A21', color: '#E7EAD5', pt: { xs: 5, md: 7 }, pb: 3, borderTop: '1px solid #B8955A' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: '2fr 1fr 1fr' }, gap: { xs: 3, md: 7 }, mb: { xs: 3, md: 5 } }}>
          <Box sx={{ gridColumn: { xs: '1 / -1', md: 'auto' } }}> 
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#C2AF88', color: '#0A2A21', width: 28, height: 28, borderRadius: 1 }}>
                <LocalMallOutlinedIcon sx={{ fontSize: 16 }} />
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: 16 }}>DailyNest</Typography>
            </Box>
            <Typography sx={{ color: '#B9C7BD', fontSize: 13, lineHeight: 1.8, maxWidth: 300 }}>
              Your everyday essentials, all in one place. Explore our categories and find something for your home.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, mt: 2.5, color: '#0B4A3A' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, bgcolor: '#FAF7F0', borderRadius: '50%' }}><PhotoCameraOutlinedIcon sx={{ fontSize: 18 }} /></Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, bgcolor: '#FAF7F0', borderRadius: '50%' }}><ShareOutlinedIcon sx={{ fontSize: 18 }} /></Box>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 36, height: 36, bgcolor: '#FAF7F0', borderRadius: '50%' }}><BookmarkBorderIcon sx={{ fontSize: 18 }} /></Box>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
            <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1 }}>Explore</Typography>
            <Link component={RouterLink} to="/" color="inherit" underline="hover" sx={{ fontSize: 12 }}>Home</Link>
            <Link component={RouterLink} to="/categories" color="inherit" underline="hover" sx={{ fontSize: 12 }}>Categories</Link>
            <Link component={RouterLink} to="/products" color="inherit" underline="hover" sx={{ fontSize: 12 }}>Products</Link>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 1 }}>
            <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1 }}>Your Account</Typography>
            <Link component={RouterLink} to="/login" color="inherit" underline="hover" sx={{ fontSize: 12 }}>Login</Link>
            <Link component={RouterLink} to="/register" color="inherit" underline="hover" sx={{ fontSize: 12 }}>Create Account</Link>
            <Link component={RouterLink} to="/send-code" color="inherit" underline="hover" sx={{ fontSize: 12 }}>Forgot Password?</Link>
          </Box>
        </Box>

        <Divider sx={{ borderColor: '#355045', mb: 2 }} />
        <Typography sx={{ fontSize: 11, color: '#B9C7BD' }}>
          © {new Date().getFullYear()} DailyNest. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
