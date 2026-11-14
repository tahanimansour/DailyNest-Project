import { Alert, Box, IconButton, Paper, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutlined'
import useUpdateCartItem from '../../hooks/useUpdateCartItem'
import useRemoveItemCart from '../../hooks/useRemoveItemCart'

export default function CartItem({ item }) {
  const update = useUpdateCartItem()
  const remove = useRemoveItemCart()
  const isPending = update.isPending || remove.isPending
  const handleIncrease = () => update.mutate({ productId: item.productId, count: item.count + 1 })
  const handleDecrease = () => update.mutate({ productId: item.productId, count: item.count - 1 })

  return (
    <Paper sx={{ p: 2, mb: 3, border: 1, borderColor: 'divider', boxShadow: 'none' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Box>
          <Typography sx={{ overflowWrap: 'anywhere' }}>{item.productName}</Typography>
          <Typography color="text.secondary">${item.price}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', border: 1, borderColor: 'divider', borderRadius: 1 }}>
          <IconButton onClick={handleDecrease} disabled={isPending || item.count <= 1}><RemoveIcon fontSize="small" /></IconButton>
          <Typography>Quantity: {item.count}</Typography>
          <IconButton onClick={handleIncrease} disabled={isPending}><AddIcon fontSize="small" /></IconButton>
        </Box>
        <Typography>Total Price: ${item.totalPrice}</Typography>
        <IconButton color="error" onClick={() => remove.mutate(item.productId)} disabled={isPending}><DeleteOutlineIcon /></IconButton>
      </Box>
      {update.isError || remove.isError ? <Alert severity="error" sx={{ mt: 2 }}>Unable to update your cart. Please try again.</Alert> : null}
    </Paper>
  )
}
