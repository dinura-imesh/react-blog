
const ApiConstants = {
    posts: `https://jsonplaceholder.typicode.com/posts`,
    post: (postId) => {
        return `https://jsonplaceholder.typicode.com/posts/${postId}`
    }
}

export default ApiConstants;
