const postsArray = JSON.parse(localStorage.getItem('posts'))
export default postsArray || []

export const setPostsToStorage = posts => localStorage.setItem('posts',JSON.stringify(posts))