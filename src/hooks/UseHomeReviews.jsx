import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useProducts } from './UseProducts'

export default function useHomeReviews() {
  const products = useProducts()
  return useQuery({
    queryKey: ['HomeReviews', products.data?.map((product) => product.id)],
    enabled: !!products.data,
    queryFn: async () => {
      const details = await Promise.all(products.data.map((product) =>
        axios.get(`https://knowledgeshop.runasp.net/api/Products/${product.id}`, { headers: { 'Accept-Language': 'en' } })
      ))
      return details.flatMap(({ data }) => (data.response.reviews ?? []).map((review) => ({ ...review, productName: data.response.name })))
        .filter((review) => review.rating >= 4 && review.comment?.trim())
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, 4)
    },
    staleTime: 1000 * 60 * 5,
  })
}
