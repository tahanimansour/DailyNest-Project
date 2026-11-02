import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function useProduct(id) {
    
    const getProductDetails=async()=>{
        const response = await axios.get(`https://knowledgeshop.runasp.net/api/Products/${id}`,
        {
            headers:{
                "Accept-Language": "en"
            }
        });
        return response.data.response;
    }

    return useQuery({
        queryKey: ['Product', id],
        queryFn: getProductDetails,
        staleTime: 1000 * 60 * 5,
    });
}


