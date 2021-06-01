1. Person = {id, fName, lName, age, email, phone, avatar}
2. Album = {id, personId, title}
3. Photo = {id, albumId, title, src, like, dislike}
4. Blog = {id, personId, title, short, body, datetime}
5. Comments = {id, blogId, personId (Author), title, body, datetime}

1. Home - ...
2. Persons List
3. Person Page - Show info, Edit Info
4.1. Albums List
4.2. Album Page - PhotoList(like+dislike) + AddNewPhoto(owner)
4.3. Photo + Like-Dislike
5. BlogList - (title+short+countComments) + AddNewBlogRecord(owner)
5.1. BlogRecord - Title + Body + Comments + AddNewComment
   

react-router-dom
https://csslayout.io/patterns
localStorage
fontAwesome