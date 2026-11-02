import { Link } from 'react-router-dom'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import { Box, Typography } from '@mui/material'

export default function CategoryItem({ category }) {
  return (
    <Box component={Link} to={`/categories/${category.id}`} sx={{ display: 'flex', alignItems: 'center', gap: 2.5, px: 2, py: 2, border: '1px solid #B8955A80', borderRadius: '24px', bgcolor: '#B8955A08', textDecoration: 'none', color: '#0A2A21', transition: 'background-color 0.2s, transform 0.2s', '&:hover': { bgcolor: '#B8955A14', transform: 'translateX(4px)' } }}>
      <Typography component="h3" sx={{ flexGrow: 1, fontFamily: 'Georgia, serif', fontSize: { xs: 18, md: 22 }, fontWeight: 400, overflowWrap: 'anywhere' }}>
        {category.name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: { xs: 28, sm: 32, lg: 36 }, height: { xs: 28, sm: 32, lg: 36 }, flexShrink: 0, borderRadius: '50%', bgcolor: '#B8955A26' }}>
        <NorthEastIcon sx={{ fontSize: { xs: 14, sm: 16, lg: 18 }, color: '#8A6B38' }} />
      </Box>
    </Box>
  )
}
