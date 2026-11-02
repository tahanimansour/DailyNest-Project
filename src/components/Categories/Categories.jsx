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
            Category <Box component="span" sx={{ color: '#B8955A', fontStyle: 'italic' }}>Index</Box>
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, maxWidth: 720 }}>
            {isPending ? <Box sx={{ gridColumn: '1 / -1', py: 5, textAlign: 'center' }}><CircularProgress size={28} sx={{ color: '#0B4A3A' }} /></Box> : isError ? <Alert severity="error" sx={{ gridColumn: '1 / -1' }}>Failed to load categories. Please try again.</Alert> : data.map((category, index) => (
                <CategoryItem category={category} index={index}/>
            ))}
        </Box>
    </Box>
  )
}
