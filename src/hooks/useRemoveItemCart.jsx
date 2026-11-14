import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useRemoveItemCart() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (productId) => {
      const response = await authAxiosInstance.delete(`Carts/${productId}`)
      return response.data
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] })
  })
}
