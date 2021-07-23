import axios from "axios";
import ApiConstants from "../constants";

const ApiService = {
    init: (callback) => {
        axios.interceptors.response.use((res) => {
            return res;
        }, (err) => {
            console.log(err)
            callback.call();
        });
    },
    loadPosts: async () => {
        const res = await axios.get(ApiConstants.posts);
        if (res.status === 200)
            return res.data;
        return [];
    },
    loadPostById: async (postId) => {
        const res = await axios.get(ApiConstants.post(postId))
        if (res.status === 200)
            return res.data;
        return null;
    }
}

export default ApiService;