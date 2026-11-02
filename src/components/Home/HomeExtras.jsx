import { Box, Card, Typography } from '@mui/material'
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
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' }, gap: { xs: 1.5, md: 3 }, gridAutoRows: '1fr' }}>
          {benefits.map((benefit, index) => (
            <Card sx={{ p: { xs: 1.5, md: 3 }, minWidth: 0, height: '100%', textAlign: 'center', bgcolor: '#FCFAF6', border: '1px solid #E4E1D7', borderRadius: 3, boxShadow: 'none', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 20px #0A2A2112' } }}>
              <Typography sx={{ fontFamily: 'Georgia, serif', color: '#B8955A', fontSize: { xs: 19, md: 23 }, mb: { xs: 1, md: 2 } }}>{String(index + 1).padStart(2, '0')}</Typography>
              <Box sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: '50%', bgcolor: '#E8EDE3', color: '#0B4A3A', mb: 1.5 }}>{benefit.icon}</Box>
              <Box>
                <Typography component="h3" sx={{ color: '#0A2A21', fontSize: { xs: 12, md: 13 }, fontFamily: 'Georgia, serif', minHeight: 42, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1 }}>{benefit.title}</Typography>
                <Typography sx={{ color: '#7B8076', fontSize: { xs: 10, md: 11 }, lineHeight: 1.8 }}>{benefit.text}</Typography>
              </Box>
            </Card>
          ))}
        </Box>
      </Box>
      <HomeReviews />
      <JoinClub />
    </>
  )
}
