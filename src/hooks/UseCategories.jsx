import { useQuery } from '@tanstack/react-query';
import axiosInstance from '../api/axiosInstance';

export const useCategories=()=>{
        const getCategories=async()=>{

            const response = await axiosInstance.get('Categories', { params: { limit: 100 } });
            const categories = response.data.response.data;
            if (!Array.isArray(categories)) {
                throw new Error('Invalid categories response');
            }
            return categories;
      
    }

   return useQuery({
    queryKey:["Categories"],
    queryFn:getCategories,
    staleTime:1000 * 60 * 5
   });
}
