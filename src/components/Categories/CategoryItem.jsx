import { Link } from 'react-router-dom'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Typography } from '@mui/material'

export default function CategoryItem({ category, index }) {
  return (
    <Box component={Link} to={`/categories/${category.id}`} sx={{ display: 'flex', alignItems: 'center', gap: 2.5, px: 2, py: 2, borderRadius: 2, textDecoration: 'none', color: '#0A2A21', transition: 'background-color 0.2s, transform 0.2s', '&:hover': { bgcolor: '#E8EDE3', transform: 'translateX(4px)' } }}>
      <Typography sx={{ color: '#B8955A', fontFamily: 'Georgia, serif', fontSize: 13 }}>
        {String(index + 1).padStart(2, '0')}
      </Typography>
      <Typography component="h3" sx={{ flexGrow: 1, fontFamily: 'Georgia, serif', fontSize: { xs: 18, md: 22 }, fontWeight: 400, overflowWrap: 'anywhere' }}>
        {category.name}
      </Typography>
      <ArrowForwardIcon sx={{ fontSize: 18, color: '#0B4A3A' }} />
    </Box>
  )
}
