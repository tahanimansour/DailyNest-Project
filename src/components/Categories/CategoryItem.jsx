import { Link } from 'react-router-dom'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'

export default function CategoryItem({category}) {
  return (
    <Card component={Link} to={`/categories/${category.id}`} sx={{ textDecoration: 'none', bgcolor: '#FCFAF6', border: '1px solid #E4E1D7', borderRadius: 2, boxShadow: '0 2px 4px #0A2A2106', p: 1.5, minWidth: 0, height: '100%', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 20px #0A2A2112' } }}>
        {category.image ? (
            <CardMedia component="img" image={category.image} alt={category.name} sx={{ aspectRatio: '1 / 1', objectFit: 'cover', borderRadius: 1, mb: 1.5 }}>
            </CardMedia>
        ) : <Box sx={{ height: 100, display: 'grid', placeItems: 'center', bgcolor: '#E8EDE3', borderRadius: 1, mb: 1.5 }}><CategoryOutlinedIcon sx={{ color: '#0B4A3A', fontSize: 32 }} /></Box>}
        <CardContent sx={{ p: 0, py: category.image ? 0 : 3, '&:last-child': { pb: category.image ? 0.5 : 3 } }}>
            <Typography component="h3" sx={{ color: '#0A2A21', fontSize: 13, fontWeight: 600, overflowWrap: 'anywhere' }}>
                {category.name}
            </Typography>
        </CardContent>
    </Card>
  )
}
