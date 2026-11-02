import { Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import Products from '../../components/Products/Products'
export default function ProductsPage() {
  const { id } = useParams()
  return <Container maxWidth="lg" sx={{ py: 5, minHeight: '60vh' }}><Products categoryId={id} /></Container>
}
