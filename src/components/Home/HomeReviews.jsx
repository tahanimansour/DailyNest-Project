import useHomeReviews from '../../hooks/UseHomeReviews'
import { Box, Typography } from '@mui/material'
import HomeReviewCard from './HomeReviewCard'

export default function HomeReviews() {
  const { data: reviews = [], isPending, isError } = useHomeReviews()
  if (isPending || isError || !reviews.length) return null

  return (
    <Box sx={{ py: { xs: 5, md: 8 }, borderTop: '1px solid #E4E1D7' }}>
      <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 } }}>
        <Box>
          <Typography sx={{ color: '#B8955A', fontSize: 10, letterSpacing: 2, mb: 1 }}>CUSTOMER REVIEWS</Typography>
          <Typography component="h2" sx={{ color: '#0A2A21', fontFamily: 'Georgia, serif', fontSize: { xs: 24, md: 36 }, fontWeight: 400, mb: 2 }}>Customer <Box component="span" sx={{ color: '#B8955A', fontStyle: 'italic' }}>Reviews</Box></Typography>
          <Typography sx={{ color: '#7B8076', fontSize: { xs: 12, md: 13 }, lineHeight: 1.9, maxWidth: 500, mx: 'auto' }}>Little details, lasting impressions. A few words from the DailyNest community.</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(4, minmax(0, 1fr))' }, gap: { xs: 1.5, sm: 2 } }}>
        {reviews.map((review) => (<HomeReviewCard review={review} />))}
      </Box>
    </Box>
  )
}
