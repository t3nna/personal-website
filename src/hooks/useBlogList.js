import axios from "axios";
import {useQuery} from "react-query";
import {blogsUrl} from "../utils/serverLinks";


const fetchBlogList = () =>{
    return axios.get(blogsUrl)
}

export const useBlogList = (onSuccess, onError) =>{
    return useQuery('blogs', fetchBlogList, {
        onSuccess: onSuccess,
        // refetchInterval: 2000
    })
}