import { combineReducers } from "redux";
import { AlbumsReducer } from "./AlbumsReducer";
import { PersonsReducer } from "./PersonsReducer";
import { PostsReducer } from "./PostsReducer";
import { PhotosReducer } from "./PhotosReducer";

const RootReducer = combineReducers({
  persons: PersonsReducer,
  posts: PostsReducer,
  albums: AlbumsReducer,
  photos: PhotosReducer,
});

export default RootReducer;
