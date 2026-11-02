import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useProducts=(categoryId)=>{
    const getProducts=async()=>{
        const response = await axios.get(`https://knowledgeshop.runasp.net/api/Products`,
        {
            params: { limit: 100, ...(categoryId ? { CategoryId: categoryId } : {}) },
            headers:{
                "Accept-Language": "en"
            }
        });
        return response.data.response.data;
    }

    return useQuery({
        queryKey: ['Products', categoryId],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5,
    });
}
