import { Box, Button, Divider, Paper, Typography } from '@mui/material'

export default function CartSummary({ total }) {
  return (
    <Paper sx={{ p: 3, bgcolor: 'primary.light', border: 1, borderColor: 'divider', boxShadow: 'none' }}>
      <Typography component="h2" variant="h3" sx={{ mb: 3 }}>Order Summary</Typography>
      <Divider sx={{ mb: 3 }} />
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        <Typography>Total Price</Typography>
        <Typography sx={{ fontWeight: 600 }}>${Number(total).toFixed(2)}</Typography>
      </Box>
      <Button variant="contained" fullWidth sx={{ mt: 3 }}>Checkout</Button>
    </Paper>
  )
}

