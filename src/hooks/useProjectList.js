import axios from "axios";
import {useQuery} from "react-query";


const fetchProjectList = () =>{
    return axios.get('http://localhost:3000/api/projects')
}

export const useProjectList = (onSuccess, onError) =>{
    return useQuery('projects', fetchProjectList, {
        onSuccess: onSuccess,
        // refetchInterval: 2000
    })
}