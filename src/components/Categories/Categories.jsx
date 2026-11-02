import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import { useCategories } from '../../hooks/UseCategories';
import CategoryItem from './CategoryItem';
import categoryImage from '../../assets/category-provisions.png';

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
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1.15fr 0.85fr' }, gap: { xs: 3, md: 5 }, alignItems: 'stretch' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, minWidth: 0 }}>
            {isPending ? <Box sx={{ gridColumn: '1 / -1', py: 5, textAlign: 'center' }}><CircularProgress size={28} sx={{ color: '#0B4A3A' }} /></Box> : isError ? <Alert severity="error" sx={{ gridColumn: '1 / -1' }}>Failed to load categories. Please try again.</Alert> : data.map((category) => (
                <CategoryItem category={category}/>
            ))}
        </Box>
        <Box sx={{ display: { xs: 'none', lg: 'block' }, borderRadius: '24px', overflow: 'hidden', border: '1px solid #B8955A50', bgcolor: '#E8EDE3', width: '100%', maxWidth: { xs: 400, md: '100%' }, mx: 'auto', position: 'relative', minHeight: { xs: 260, sm: 320, md: 0 } }}>
          <Box component="img" src={categoryImage} alt="Olive oil and pantry essentials in an emerald green kitchen" sx={{ display: 'block', position: { xs: 'static', md: 'absolute' }, inset: { md: 0 }, width: '100%', height: { xs: 260, sm: 320, md: '100%' }, objectFit: 'cover' }} />
        </Box>
        </Box>
    </Box>
  )
}
