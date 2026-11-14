import { Alert, Box, Button, CircularProgress, Container, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
import { useAuthStore } from '../../store/useAuthStore'
import CartItem from '../../components/Cart/CartItem'
import CartSummary from '../../components/Cart/CartSummary'

export default function Cart() {
  const token = useAuthStore((state) => state.token)
  const { data, isPending, isError, error } = useCart()


  if (!token) return <Container sx={{ py: 6, minHeight: '60vh' }}><Alert severity="info">Please log in to view your cart.</Alert><Button component={Link} to="/login" sx={{ mt: 2 }}>Login</Button></Container>
  if (isPending) return <Box sx={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}><CircularProgress /></Box>
  if (isError) return <Container sx={{ py: 6, minHeight: '60vh' }}><Alert severity="error">Failed to load cart items: {error.message}</Alert></Container>

  if (data?.items.length === 0) {
    return (
      <Box>
        <Typography>Your cart is empty</Typography>
        <Button component={Link} to="/products" variant="contained" color="primary" sx={{ mt: 2 }}>Shop Now</Button>
      </Box>
    )
  }

  return (
    <Box component="section" sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 }, py: { xs: 4, md: 7 }, minHeight: '60vh' }}>
      {JSON.stringify(data)}
      <Typography variant="h1" sx={{ mb: 4 }}>Cart</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 4, alignItems: 'start' }}>
        <Box>
          {data?.items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </Box>
        <Box>
          <CartSummary total={data?.cartTotal} />
        </Box>
      </Box>
    </Box>
  )
}
