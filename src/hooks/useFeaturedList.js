import { useQuery } from "react-query";
import axios from "axios";
import { featuredUrl } from "../utils/serverLinks";

const fetchInfo = () => {
  return axios.get(featuredUrl);
};

export const useFeaturedList = () => {
  return useQuery("featured", fetchInfo, {
    // refetchInterval: 2000
  });
};
