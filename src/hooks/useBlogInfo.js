import {useQuery} from "react-query";
import axios from "axios";

const fetchInfo = (blogId) =>{
    return axios.get(`http://localhost:3000/api/blogs/${blogId}`)
}

export const useBlogInfo = (id, interval) =>{
    return useQuery(['blog', id], () =>fetchInfo(id),
        // {refetchInterval: interval}
    )
}