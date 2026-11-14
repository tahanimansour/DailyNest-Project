import { toast } from 'react-toastify'
import useAddToCart from '../../hooks/useAddToCart'
import useProduct from '../../hooks/UseProduct'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuthStore } from '../../store/useAuthStore'
import ReviewItem from '../../components/ReviewItem'
import { Alert, Box, Breadcrumbs, Button, Card, CardMedia, Chip, CircularProgress, Container, Divider, Rating, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

export default function ProductDetails() {
    const { id } = useParams();
    const token = useAuthStore((state) => state.token);
    const navigate = useNavigate();
    const { mutate: addToCart, isPending: addToCartPending } = useAddToCart();
    const{data,isPending,isError}=useProduct(id);
    const handleAddToCart = () => {
      if (!token) {
        navigate('/login');
        return;
      }
      addToCart({ productId: data.response.id, count: 1 }, {
      onSuccess: () => {
        toast.success('Product added to cart successfully!', {
          position: 'top-right',
          autoClose: 3000,
          style: {
            background: '#FCFAF6',
            color: '#0A2A21',
            fontFamily: 'system-ui, sans-serif',
            fontSize: 14,
            borderRadius: 12,
            border: '1px solid #E4E1D7',
            boxShadow: '0 8px 24px #0A2A2118',
            '--toastify-color-success': '#0B4A3A'
          }
        })
      },
      onError: (error) => {
        console.log(error)
      }
    });
    };
    if(isPending) return <Box sx={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}><CircularProgress sx={{ color: 'primary.main' }} /></Box>
    if(isError) return <Container maxWidth="lg" sx={{ py: 6, minHeight: '60vh' }}><Alert severity="error">Failed to load product details.</Alert></Container>
    if(!data?.response) return <Container maxWidth="lg" sx={{ py: 6, minHeight: '60vh' }}><Alert severity="info">Product not found.</Alert></Container>
    const inStock=data.response.quantity >0;
  return (
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 7 } }}>
    <Breadcrumbs separator="›" aria-label="Product navigation" sx={{ mb: 4, fontSize: 12, color: 'text.secondary' }}>
        <Typography component={Link} to="/" sx={{ fontSize: 'inherit', color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Home</Typography>
        <Typography component="a" href="/#products" sx={{ fontSize: 'inherit', color: 'inherit', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>Products</Typography>
        <Typography sx={{ fontSize: 'inherit', color: 'text.primary', overflowWrap: 'anywhere' }}>{data.response.name}</Typography>
    </Breadcrumbs>
    <Box sx={{display:'grid',gridTemplateColumns:{xs:'1fr',md:'1fr 1fr'},gap:{xs:3,md:6},alignItems:'center'}}>
        <Card sx={{ bgcolor: '#F0EBE0', border: '1px solid #E4E1D7', borderRadius: 2, boxShadow: 'none', p: 3 }}>
            <CardMedia component={'img'} image={data.response.image} alt={data.response.name} sx={{width:'100%',height:{xs:280,md:420},objectFit:'contain'}}/>
        </Card>
        <Box sx={{ minWidth: 0 }}>
            <Typography component="h1" sx={{ fontSize: { xs: 28, md: 36 }, fontWeight: 500, lineHeight: 1.2, mb: 2, overflowWrap: 'anywhere' }}>{data.response.name}</Typography>
            <Rating value={data.response.rate} readOnly sx={{ color: 'secondary.main', mb: 2 }}></Rating>
            <Typography variant='h4' sx={{ color: 'text.primary', fontWeight: 600, mb: 2 }}>
                ${Number(data.response.price).toFixed(2)}
            </Typography>

            <Chip label={inStock ? "In Stock" : "Out Of Stock"} color={inStock ? "success":"error"} size="small" variant="outlined" sx={{ mb: 2 }}></Chip>
            <Typography sx={{ color: 'text.secondary', fontSize: 15, lineHeight: 1.9, mb: 3 }}>{data.response.description}</Typography>
            <Button variant='contained' disabled={!inStock || addToCartPending} onClick={handleAddToCart} startIcon={<ShoppingCartOutlinedIcon />} sx={{ bgcolor: '#094232', textTransform: 'none', boxShadow: 'none', width: { xs: '100%', sm: 'auto' }, px: 4, py: 1.25, '&:hover': { bgcolor: 'primary.dark', boxShadow: 'none' } }}>{addToCartPending ? 'Adding...' : 'Add To Cart'}</Button>
        </Box>
    </Box>
    <Divider sx={{my:5,borderColor:'#E4E1D7'}}/>
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 3 }}>
        <Typography component="h2" variant="h5" sx={{ color: 'text.primary', fontWeight: 500 }}>Customer Reviews</Typography>
        <Typography sx={{ color: 'text.secondary', fontSize: 12 }}>{(data.response.reviews ?? []).length} reviews</Typography>
    </Box>
    <Box sx={{ maxWidth: 850, ml: 'auto' }}>
        {(data.response.reviews ?? []).map((review)=><ReviewItem review={review}/>)}
        {!data.response.reviews?.length ? <Typography sx={{ color: 'text.secondary', fontSize: 14, py: 3 }}>No reviews yet.</Typography> : null}
    </Box>
    </Container>
    </Box>
  )
}
