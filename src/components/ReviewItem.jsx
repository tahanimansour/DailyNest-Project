import { Avatar, Box, Paper, Rating, Typography } from '@mui/material'

export default function ReviewItem({review}) {
    return (
        <Paper sx={{ p: { xs: 2, md: 3 }, mb: 2, bgcolor: '#FFFFFF', border: '1px solid #E4E1D7', borderRadius: 2, boxShadow: 'none' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 1, mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Avatar sx={{ width: 32, height: 32, fontSize: 12, bgcolor: '#E8EDE3', color: '#0B4A3A' }}>{review.userName?.charAt(0)}</Avatar>
                    <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#0A2A21' }}>{review.userName}</Typography>
                </Box>
                <Typography sx={{ fontSize: 12, color: '#7B8076' }}>{new Date(review.createdAt).toLocaleDateString()}</Typography>
            </Box>
            <Rating value={review.rating} readOnly size="small" sx={{ color: '#B8955A', mb: 1 }} />
            <Typography sx={{ fontSize: 14, color: '#66715E', lineHeight: 1.8, overflowWrap: 'anywhere' }}>{review.comment}</Typography>
        </Paper>
    )
}
