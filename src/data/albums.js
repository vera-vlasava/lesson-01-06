const albumsArray = JSON.parse(localStorage.getItem('albums'))
export default albumsArray || []

export const setAlbumsToStorage = albums => localStorage.setItem('albums',JSON.stringify(albums))
