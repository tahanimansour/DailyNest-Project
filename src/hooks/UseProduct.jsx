import axiosInstance from '../api/axiosInstance'
import { useQuery } from '@tanstack/react-query'

export default function useProduct(id) {
    
    const getProductDetails=async()=>{
        const response = await axiosInstance.get(`Products/${id}`);
        return response.data.response;
    }

    return useQuery({
        queryKey: ['Product', id],
        queryFn: getProductDetails,
        staleTime: 1000 * 60 * 5,
    });
}


