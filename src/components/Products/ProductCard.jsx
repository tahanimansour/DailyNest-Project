import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Rating, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

export default function ProductCard({product}) {
  return (
    <Card sx={{ bgcolor: '#FFFFFF', border: '1px solid #E4E1D7', borderRadius: 3, p: { xs: 0.75, sm: 1 }, minWidth: 0, boxShadow: 'none', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 20px #0A2A2112' } }}>
        <CardActionArea component={Link} to={`/products/${product.id}`} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', flexGrow: 1, color: '#0A2A21' }}>
            <CardMedia component={'img'} image={product.image} alt={product.name} sx={{ width: '100%', height: { xs: 130, sm: 175, md: 190 }, objectFit: 'contain', p: { xs: 1, sm: 2 }, flexShrink: 0, borderRadius: 2, bgcolor: '#F0EBE0' }}>
            </CardMedia>
            <CardContent sx={{ p: { xs: 1, sm: 1.5 }, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Rating value={product.rate} readOnly precision={0.5} size="small" sx={{ color: '#B8955A', mb: 0.75 }}>
                </Rating>
                <Typography component="h3" sx={{ fontSize: { xs: 13, sm: 15 }, fontFamily: 'Georgia, serif', fontWeight: 400, lineHeight: 1.5, height: { xs: 39, sm: 45 }, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', mb: 1, overflowWrap: 'anywhere' }}>
                    {product.name}
                </Typography>
                <Typography sx={{ mt: 'auto', fontSize: { xs: 16, sm: 18 }, fontWeight: 600, color: '#0A2A21' }}>
                    ${Number(product.price).toFixed(2)}
                </Typography>
            </CardContent>
        </CardActionArea>
        <Box sx={{ position: 'absolute', top: 10, right: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, bgcolor: '#FFFFFF', color: '#0B4A3A', borderRadius: '50%', pointerEvents: 'none' }}>
            <FavoriteBorderIcon sx={{ fontSize: 16 }} />
        </Box>
        <Box sx={{ px: { xs: 1, sm: 1.5 }, pb: { xs: 1, sm: 1.5 } }}>
            <Button fullWidth disabled variant="contained" startIcon={<ShoppingCartOutlinedIcon />} sx={{ borderRadius: 2, textTransform: 'none', fontSize: { xs: 10, sm: 11 }, minHeight: 32, px: 1, whiteSpace: 'nowrap', boxShadow: 'none', '&.Mui-disabled': { bgcolor: '#094232', color: '#FFFFFF' } }}>
                Add to Cart
            </Button>
        </Box>
    </Card>
  )
}
