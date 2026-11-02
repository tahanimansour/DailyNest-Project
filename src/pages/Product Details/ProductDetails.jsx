import useProduct from '../../hooks/UseProduct'
import { Link, useParams } from 'react-router-dom'
import ReviewItem from '../../components/ReviewItem'
import { Alert, Box, Breadcrumbs, Button, Card, CardMedia, Chip, CircularProgress, Container, Divider, Rating, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

export default function ProductDetails() {
    const { id } = useParams();
    const{data,isPending,isError}=useProduct(id);
    if(isPending) return <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#FAF7F0' }}><CircularProgress sx={{ color: '#0B4A3A' }} /></Box>
    if(isError) return <Container maxWidth="lg" sx={{ py: 6, minHeight: '60vh' }}><Alert severity="error">Failed to load product details.</Alert></Container>
    if(!data) return <Container maxWidth="lg" sx={{ py: 6, minHeight: '60vh' }}><Alert severity="info">Product not found.</Alert></Container>
    const inStock=data.quantity >0;
  return (
    <Box sx={{ bgcolor: '#FAF7F0', color: '#0A2A21' }}>
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
    <Breadcrumbs separator="›" aria-label="Product navigation" sx={{ mb: 4, fontSize: 12, color: '#7B8076' }}>
        <Typography component={Link} to="/" sx={{ fontSize: 'inherit', color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Home</Typography>
        <Typography component="a" href="/#products" sx={{ fontSize: 'inherit', color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Products</Typography>
        <Typography sx={{ fontSize: 'inherit', color: '#0A2A21', overflowWrap: 'anywhere' }}>{data.name}</Typography>
    </Breadcrumbs>
    <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'1fr 1fr'},gap:{xs:3,md:6},alignItems:'center'}}>
        <Card sx={{ bgcolor: '#F0EBE0', border: '1px solid #E4E1D7', borderRadius: 2, boxShadow: 'none', p: 3 }}>
            <CardMedia component={'img'} image={data.image} alt={data.name} sx={{width:'100%',height:{xs:280,md:420},objectFit:'contain'}}/>
        </Card>
        <Box sx={{ minWidth: 0 }}>
            <Typography component="h1" sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 500, lineHeight: 1.2, mb: 2, overflowWrap: 'anywhere' }}>{data.name}</Typography>
            <Rating value={data.rate} readOnly sx={{ color: '#B8955A', mb: 2 }}></Rating>
            <Typography variant='h4' sx={{ color: '#0A2A21', fontWeight: 600, mb: 2 }}>
                ${Number(data.price).toFixed(2)}
            </Typography>

            <Chip label={inStock ? "In Stock" : "Out Of Stock"} color={inStock ? "success":"error"} size="small" variant="outlined" sx={{ mb: 2 }}></Chip>
            <Typography sx={{ color: '#7B8076', fontSize: 15, lineHeight: 1.9, mb: 3 }}>{data.description}</Typography>
            <Button variant='contained' disabled={!inStock} startIcon={<ShoppingCartOutlinedIcon />} sx={{ bgcolor: '#094232', textTransform: 'none', boxShadow: 'none', width: { xs: '100%', sm: 'auto' }, px: 4, py: 1.25, '&:hover': { bgcolor: '#063326', boxShadow: 'none' } }}>Add To Cart</Button>
        </Box>
    </Box>
    <Divider sx={{my:5,borderColor:'#E4E1D7'}}/>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <Typography component="h2" variant="h5" sx={{ color: '#0A2A21', fontWeight: 500 }}>Customer Reviews</Typography>
        <Typography sx={{ color: '#7B8076', fontSize: 12 }}>{(data.reviews ?? []).length} reviews</Typography>
    </Box>
    <Box sx={{ maxWidth: 850, ml: 'auto' }}>
        {(data.reviews ?? []).map((review)=><ReviewItem review={review}/>)}
        {!data.reviews?.length ? <Typography sx={{ color: '#7B8076', fontSize: 14, py: 3 }}>No reviews yet.</Typography> : null}
    </Box>
    </Container>
    </Box>
  )
}
