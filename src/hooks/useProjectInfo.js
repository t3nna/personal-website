import {useQuery} from "react-query";
import axios from "axios";

const fetchInfo = (blogId) =>{
    return axios.get(`http://localhost:3000/api/projects/${blogId}`)
}

export const useProjectInfo = (id, interval) =>{
    return useQuery(['project', id], () =>fetchInfo(id),
        // {refetchInterval: interval}
    )
}