import { Box, Container } from '@mui/material'
import Categories from '../../components/Categories/Categories'
import Products from '../../components/Products/Products'
import Hero from '../../components/Home/Hero'
import HomeExtras from '../../components/Home/HomeExtras'
export default function Home() {
  return (
    <Box sx={{ bgcolor: '#FAF7F0', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Hero />
        <Box id="categories">
          <Categories />
        </Box>
        <Box id="products" sx={{ py: 5 }}>
          <Products preview />
        </Box>
        <HomeExtras />
      </Container>
    </Box>
  )
}
