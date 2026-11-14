import { useQuery } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance'
import { useAuthStore } from '../store/useAuthStore'

export default function useCart() {
  const token = useAuthStore((state) => state.token)

  const getItems = async () => {
    const response = await authAxiosInstance.get('Carts')
    return response.data
  }

  return useQuery({
    queryKey: ['cart'],
    queryFn: getItems,
    enabled: !!token,
    staleTime: 1000 * 60 * 5
  })
}
