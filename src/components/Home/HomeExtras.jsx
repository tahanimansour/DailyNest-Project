import { Box, Typography } from '@mui/material'
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined'
import AssignmentReturnOutlinedIcon from '@mui/icons-material/AssignmentReturnOutlined'
import HomeReviews from './HomeReviews'
import JoinClub from './JoinClub'

export default function HomeExtras() {
  const benefits = [
    { icon: <SpaOutlinedIcon fontSize="small" />, title: 'Thoughtful Curation', text: 'Everyday essentials chosen with care for your home and your daily routine.' },
    { icon: <LockOutlinedIcon fontSize="small" />, title: 'Shop With Confidence', text: 'Discover the details, explore the collection, and find what feels right for you.' },
    { icon: <LocalShippingOutlinedIcon fontSize="small" />, title: 'Everyday Convenience', text: 'Home, pantry, beauty, and more, brought together in one thoughtful collection.' },
    { icon: <AssignmentReturnOutlinedIcon fontSize="small" />, title: 'Made for Daily Living', text: 'Simple essentials that fit naturally into your home and everyday life.' },
  ]

  return (
    <>
      <Box component="section" aria-label="Why shop with DailyNest" sx={{ py: { xs: 5, md: 8 }, borderTop: '1px solid #E4E1D7' }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 4 }}>
          {benefits.map((benefit, index) => (
            <Box sx={{ py: 1, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-4px)' } }}>
              <Typography sx={{ fontFamily: 'Georgia, serif', color: '#B8955A', fontSize: 23, mb: 2 }}>{String(index + 1).padStart(2, '0')}</Typography>
              <Box sx={{ display: 'inline-flex', color: '#0B4A3A', mb: 1.5 }}>{benefit.icon}</Box>
              <Box>
                <Typography component="h3" sx={{ color: '#0A2A21', fontSize: 13, fontFamily: 'Georgia, serif', mb: 1 }}>{benefit.title}</Typography>
                <Typography sx={{ color: '#7B8076', fontSize: 11, lineHeight: 1.8 }}>{benefit.text}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <HomeReviews />
      <JoinClub />
    </>
  )
}
