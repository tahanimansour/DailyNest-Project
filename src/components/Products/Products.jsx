import { useProducts } from '../../hooks/UseProducts'
import { Alert, Box, CircularProgress, Typography } from '@mui/material';
import ProductCard from './ProductCard';

export default function Products({ categoryId, preview = false }) {
    const { data, isPending, isError } = useProducts(categoryId);

    return (
        <Box sx={{ borderTop: '1px solid #E4E1D7', pt: { xs: 3, md: 5 } }}>
            <Typography sx={{ color: '#B8955A', fontSize: 10, letterSpacing: 2, fontWeight: 600, mb: 1 }}>
                CAREFULLY SELECTED
            </Typography>
            <Typography component={'h2'} sx={{ color: '#0A2A21', fontSize: { xs: 28, md: 36 }, fontFamily: 'Georgia, serif', fontWeight: 400, mb: 4 }}>
                Featured <Box component="span" sx={{ color: '#B8955A', fontStyle: 'italic' }}>essentials</Box>
            </Typography>
            <Box sx={{
                display: 'grid', gap: 2, gridTemplateColumns: {
                    xs: "repeat(2,1fr)",
                    sm: "repeat(3,1fr)",
                    md: "repeat(4,1fr)",

                }
            }}>
                {
                    isPending ? <Box sx={{ gridColumn: '1 / -1', py: 5, textAlign: 'center' }}><CircularProgress size={28} sx={{ color: '#0B4A3A' }} /></Box> : isError ? <Alert severity="error" sx={{ gridColumn: '1 / -1' }}>Failed to load products.</Alert> : (preview ? data.slice(0, 4) : data).map((product) => (<ProductCard product={product} />))
                }
            </Box>
            {!isPending && !isError && !data.length ? <Typography sx={{ py: 3 }}>No products in this category yet.</Typography> : null}
        </Box>
    )
}

