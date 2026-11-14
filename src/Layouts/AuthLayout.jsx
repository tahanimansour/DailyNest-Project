import { Link, Outlet } from 'react-router-dom'
import { Box, Typography } from '@mui/material'
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined'


export default function AuthLayout() {
  return (
    <Box className="auth-page" sx={{
        '& .MuiOutlinedInput-root': { fontFamily: 'inherit', bgcolor: 'background.default', color: 'text.primary', borderRadius: '8px', fontSize: 14 },
        '& .MuiOutlinedInput-notchedOutline': { borderColor: '#E4E1D7' },
        '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'primary.main' },
        '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': { borderColor: '#d32f2f' },
        '& .MuiInputLabel-root': { fontFamily: 'inherit', fontSize: 14 },
        '& .MuiInputLabel-root.Mui-focused': { color: 'primary.main' },
        '& .MuiInputLabel-root.Mui-error': { color: '#d32f2f' },
        '& .MuiButton-root': { fontFamily: 'inherit', textTransform: 'none', fontSize: 13 },
        '& .MuiButton-contained': { bgcolor: '#094232', boxShadow: 'none', minHeight: 42, borderRadius: '8px', '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' }, '&.Mui-disabled': { bgcolor: '#DCE2D6', color: '#75806C' } },
        '& .MuiButton-text, & a': { color: 'primary.main', textUnderlineOffset: '3px' },
        '& .auth-brand, & .auth-brand:visited': { color: 'background.default' },
        '& .MuiAlert-root': { mb: 1.5, fontSize: 13 },
        display: 'grid', gridTemplateColumns: { xs: '1fr', md: '42% 58%' }, minHeight: '100vh', bgcolor: 'background.default', color: 'text.primary' }}>
      <Box sx={{ bgcolor: 'text.primary', color: 'background.default', display: 'flex', flexDirection: 'column', justifyContent: 'center', px: { xs: 3, md: 6, lg: 9 }, py: { xs: 4, md: 8 } }}>
        <Box className="auth-brand" component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'background.default', textDecoration: 'none', mb: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 32, height: 32, borderRadius: 1, bgcolor: '#183D31', color: 'secondary.main', border: '1px solid #766C49' }}>
            <LocalMallOutlinedIcon sx={{ fontSize: 20 }} />
          </Box>
          <Typography sx={{ fontSize: 20, fontWeight: 700 ,color:'secondary.main'}}>DailyNest</Typography>
        </Box>
        <Typography component="h2" sx={{ fontFamily: 'Georgia, serif', fontSize: { xs: 30, md: 44, lg: 52 }, lineHeight: 1.15, fontWeight: 400, letterSpacing: -1, maxWidth: 380 }}>
          Your Everyday Essentials, <Box component="span" sx={{ color: 'secondary.main', fontStyle: 'italic' }}>All in One Place.</Box>
        </Typography>
        <Typography sx={{ fontSize: 14, lineHeight: 1.8, color: '#B9C7BD', mt: 3, maxWidth: 330, display: { xs: 'none', md: 'block' } }}>
          Thoughtfully chosen essentials for your home and your everyday routine.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: { xs: 2, sm: 4, md: 5 } }}>
        <Outlet />
        <Typography sx={{ color: 'text.secondary', fontSize: 10, textAlign: 'center', mt: 3 }}>
          © {new Date().getFullYear()} DailyNest Essentials. All rights reserved.
        </Typography>
      </Box>
    </Box>
  )
}
