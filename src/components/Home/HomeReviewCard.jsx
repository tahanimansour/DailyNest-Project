import { Avatar, Box, Paper, Rating, Typography } from '@mui/material'

export default function HomeReviewCard({ review }) {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#F0EFE8', border: '1px solid #E6E3D9', borderRadius: 2.5, p: 2.5, minWidth: 0, boxShadow: 'none', transition: 'transform 0.2s, box-shadow 0.2s', '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 26px #0A2A2115' } }}>
      <Rating value={review.rating} readOnly size="small" sx={{ color: '#B8955A', mb: 1.5, fontSize: 14 }} />
      <Typography sx={{ color: '#52634F', fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 13, lineHeight: 1.8, mb: 3, flexGrow: 1 }}>
        &ldquo;{review.comment}&rdquo;
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, pt: 1.5, borderTop: '1px solid #E0DDD3' }}>
        <Avatar alt={review.userName} sx={{ width: 30, height: 30, bgcolor: '#0B4A3A', color: '#FFFFFF', fontSize: 12 }}>{review.userName?.charAt(0)}</Avatar>
        <Box>
          <Typography sx={{ color: '#0A2A21', fontSize: 11, fontWeight: 600 }}>{review.userName}</Typography>
          <Typography sx={{ color: '#7B8076', fontSize: 9, mt: 0.5 }}>{review.productName}</Typography>
        </Box>
      </Box>
    </Paper>
  )
}
