import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useCategories=()=>{
        const getCategories=async()=>{

            const response = await axios.get(`https://knowledgeshop.runasp.net/api/Categories`
            ,{params: { limit: 100 }, headers:{
                "Accept-Language":"en"
            }});
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
