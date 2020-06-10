import React,{useContext} from "react";
import axios from "axios";
import {PostContext} from './PostContext';
function Reddit(){
   
   const [posts,setPosts]=useContext(PostContext);
   
    axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const newPosts = res.data.data.children
          .map(obj => obj.data);
  
        setPosts(newPosts);
      });
 

    return (
        <div>
            <ul>
                {posts.map(post=>(
                <li key={post.id}>
                    
                    <a href={post.url} target="_blank"  rel="noopener noreferrer"><h3>{post.title}</h3></a>
                    <h4>Score {post.score}</h4>
                    <h5>Posted by {post.author}</h5>
                </li>)
                )}
            </ul>
        </div>

        
    )
}
export default Reddit;