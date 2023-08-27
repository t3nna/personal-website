import {useQuery} from "react-query";
import axios from "axios";
import {blogsUrl} from "../utils/serverLinks";

const fetchInfo = (blogId) =>{
    return axios.get(`${blogsUrl}/${blogId}`)
}

export const useBlogInfo = (id, interval) =>{
    return useQuery(['blog', id], () =>fetchInfo(id),
        // {refetchInterval: interval}

    )
}