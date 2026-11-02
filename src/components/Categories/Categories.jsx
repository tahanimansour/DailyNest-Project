import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import { useCategories } from '../../hooks/UseCategories';
import CategoryItem from './CategoryItem';

export default function Categories() {
    const{data,isPending,isError}=useCategories();



  return (
    <Box sx={{ py: { xs: 5, md: 8 }, borderTop: '1px solid #E4E1D7' }}>
        <Typography sx={{ color: '#B8955A', fontSize: 10, letterSpacing: 2, fontWeight: 600, mb: 1 }}>
            DIVERSE DEPARTMENTS
        </Typography>
        <Typography component={'h2'} sx={{ color: '#0A2A21', fontFamily: 'Georgia, serif', fontSize: { xs: 28, md: 36 }, fontWeight: 400, mb: 4 }}>
            Explore by <Box component="span" sx={{ color: '#B8955A', fontStyle: 'italic' }}>Category</Box>
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', pb: 2, scrollSnapType: 'x mandatory', '& > *': { flex: '0 0 170px', scrollSnapAlign: 'start' } }}>
            {isPending ? <Box sx={{ gridColumn: '1 / -1', py: 5, textAlign: 'center' }}><CircularProgress size={28} sx={{ color: '#0B4A3A' }} /></Box> : isError ? <Alert severity="error" sx={{ gridColumn: '1 / -1' }}>Failed to load categories. Please try again.</Alert> : data.map((category) => (
                <CategoryItem category={category}/>
            ))}
        </Box>
    </Box>
  )
}
