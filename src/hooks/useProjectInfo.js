import {useQuery} from "react-query";
import axios from "axios";
import {projectsUrl} from "../utils/serverLinks";

const fetchInfo = (blogId) =>{
    return axios.get(`${projectsUrl}/${blogId}`)
}

export const useProjectInfo = (id, interval) =>{
    return useQuery(['project', id], () =>fetchInfo(id),
        // {refetchInterval: interval}
    )
}