import axios from "axios";
import {useQuery} from "react-query";


const fetchBlogList = () =>{
    return axios.get('http://localhost:3000/api/blogs')
}

export const useBlogList = (onSuccess, onError) =>{
    return useQuery('blogs', fetchBlogList, {
        onSuccess: onSuccess,
        // refetchInterval: 2000
    })
}