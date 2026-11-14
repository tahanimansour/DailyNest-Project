import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

export const useProducts=(categoryId)=>{
    const getProducts=async()=>{
        const response = await axiosInstance.get('Products', {
            params: { limit: 100, ...(categoryId ? { CategoryId: categoryId } : {}) }
        });
        return response.data.response.data;
    }

    return useQuery({
        queryKey: ['Products', categoryId],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5,
    });
}
