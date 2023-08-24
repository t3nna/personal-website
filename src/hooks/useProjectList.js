import axios from "axios";
import {useQuery} from "react-query";
import {projectsUrl} from "../utils/serverLinks";


const fetchProjectList = () =>{
    return axios.get( projectsUrl)
}

export const useProjectList = (onSuccess, onError) =>{
    return useQuery('projects', fetchProjectList, {
        onSuccess: onSuccess,
        // refetchInterval: 2000
    })
}