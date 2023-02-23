import {useQuery} from "react-query";
import axios from "axios";


const fetchInfo = () =>{
    return axios.get('http://localhost:3000/api/featured')
}

export const useFeaturedList = () =>{
    return useQuery('featured', fetchInfo, {
        // refetchInterval: 2000
    })
}