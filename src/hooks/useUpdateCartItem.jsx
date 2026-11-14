import { useMutation, useQueryClient } from '@tanstack/react-query'
import authAxiosInstance from '../api/authAxiosInstance'

export default function useUpdateCartItem() {
  const queryClient = useQueryClient()
  useUpdateCartItem = async({productId,count})=>{
     const response = await authAxiosInstance.patch(`Carts/${productId}`, { count })
      return response.data
  }
  return useMutation({
    mutationFn: useUpdateCartItem,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] })
  })
}
