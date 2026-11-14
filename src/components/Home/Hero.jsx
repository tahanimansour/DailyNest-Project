import { Box, Button, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import RecyclingOutlinedIcon from '@mui/icons-material/RecyclingOutlined'
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined'
import heroImage from '../../assets/hero-essentials.png'

export default function Hero() {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' }, alignItems: 'center', gap: { xs: 5, md: 10 }, py: { xs: 5, md: 10 }, mb: 5 }}>
      <Box>
        <Typography sx={{ display: 'inline-block', color: '#66715E', border: '1px solid #E2DFD0', borderRadius: 5, px: 1.5, py: 0.5, fontSize: 9, letterSpacing: 1.5, mb: 3 }}>THE CURATED ESSENTIALS DESTINATION</Typography>
        <Typography component="h1" sx={{ color: 'text.primary', fontFamily: 'Georgia, serif', fontSize: { xs: 38, sm: 50, md: 58 }, fontWeight: 400, lineHeight: 1.12, letterSpacing: -2, mb: 3 }}>
          Your Everyday<br />Essentials,{' '}
          <Box component="span" sx={{ color: 'secondary.main', fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>All in One Place.</Box>
        </Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 14, lineHeight: 1.8, maxWidth: 420, mb: 3 }}>Elevate your routine with thoughtfully designed lifestyle goods, organic pantry finds, smart electronics, and mindful home essentials.</Typography>
        <Box sx={{ display: 'flex', gap: { xs: 1, sm: 2 }, flexWrap: 'nowrap' }}>
          <Button component="a" href="#products" variant="contained" sx={{ bgcolor: '#094232', borderRadius: 8, textTransform: 'uppercase', letterSpacing: 1, boxShadow: 'none', px: { xs: 1.5, sm: 3 }, py: 1.25, fontSize: { xs: 9, sm: 10 }, whiteSpace: 'nowrap', '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' } }}>Shop Now →</Button>
          <Button component="a" href="#categories" variant="outlined" sx={{ color: 'primary.main', borderColor: '#DDD9CB', borderRadius: 8, textTransform: 'uppercase', letterSpacing: 1, px: { xs: 1.5, sm: 3 }, py: 1.25, fontSize: { xs: 9, sm: 10 }, whiteSpace: 'nowrap' }}>Explore Categories</Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: { xs: 2, md: 3 }, mt: 3, pt: 3, borderTop: '1px solid #E4E1D7', color: '#66715E' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <LocalShippingOutlinedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
            <Typography sx={{ fontSize: 10 }}>Free Shipping $75+</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <RecyclingOutlinedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
            <Typography sx={{ fontSize: 10 }}>100% Recyclable</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <AssignmentReturnOutlinedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
            <Typography sx={{ fontSize: 10 }}>30-Day Easy Returns</Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', maxWidth: 560, mx: 'auto', borderRadius: 3, overflow: 'hidden', border: '1px solid #E4E1D7', boxShadow: '0 12px 28px #0A2A2112' }}>
        <Box component="img" src={heroImage} alt="Coffee, folded linen, earbuds and skincare arranged with plants" sx={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '566 / 424', objectFit: 'contain', bgcolor: 'primary.light' }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0B4A3A26, transparent 45%)', pointerEvents: 'none' }}></Box>
        <Box sx={{ position: 'absolute', bottom: { xs: 12, sm: 18 }, left: { xs: 12, sm: 18 }, right: { xs: 12, sm: 18 }, maxWidth: 295, bgcolor: 'background.default', border: '1px solid #E4E1D7', borderRadius: 2, px: { xs: 1.5, sm: 2 }, py: 1.5, display: 'flex', alignItems: 'center', gap: 1.5, boxShadow: '0 4px 12px #00000018' }}>
          <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: 'secondary.main', flexShrink: 0 }}></Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ color: 'text.primary', fontSize: 14, fontWeight: 600 }}>Spring Living Collection</Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: 12, mt: 0.25 }}>Starting at $24.00</Typography>
          </Box>
          <ArrowForwardIcon sx={{ color: 'primary.main', fontSize: 18, flexShrink: 0 }} />
        </Box>
      </Box>
    </Box>
  )
}
