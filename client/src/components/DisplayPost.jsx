import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import profile from '../assets/images/profile.png'
import { AiOutlineLike, AiFillLike, AiOutlineShareAlt } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
const DisplayPost = () => {

    const [posts,setPosts] = useState([]);

    const fetchPosts= async()=>{
        const response = await axios.get('http://localhost:8000/api/v1/posts');
        console.log(response.data.posts)
        setPosts(response.data.posts)
      //  console.log(posts[0])
    }
    useEffect(()=>{
        fetchPosts();
    },[])

  return (
    <Wrapper>
         {posts.length > 0 ? (
                <div>{
                    posts.map((post)=>{
                        return <div className="post">
                                    
                                    <div className='image'>
                                        <img src={profile} alt={post.author?.fullName || 'Unknown User'} />
                                        <h4>{post.author?.fullName || 'Unknown User'}</h4>
                                    </div>
                                  
                                    <div className='post-content'>
                                        <div>{post.content!=="No content"?(<p>{post.content}</p>):null}</div>
                                        <div>{
                                            post.imageUrl && post.imageUrl.endsWith('.mp4')?(   
                                                <video controls width="100%" height="100%">
                                                    <source src={`http://localhost:8000/${post.imageUrl}`} type="video/mp4" />
                                                    Your browser does not support the video tag.
                                                </video>
                                            ):
                                                (
                                                    <img src={`http://localhost:8000/${post.imageUrl}`} alt="Post Image" />
                                                )
                        
                                        }</div>
                                        <AiOutlineLike />
                                        <AiFillLike />
                                        <FaRegComment/>
                                        <AiOutlineShareAlt />
                                    </div>
                                </div>
                        
                    })
                    }</div>
            ) : (
                <div>No posts available</div>
                            )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    .post{
        display:flex;
        border: 1px solid var(--grey-800);
        padding: 10px;
        margin: 10px;
        box-shadow: var(--shadow-3);
        font-size: 1.25rem;
        .image{
            width: 21%;
            padding: 10px;
            margin: 10px;
            img{
                width: 100%;
            }
        }

    }
    .post-content {
        img{
            width: 100%;

        }
    }
`

export default DisplayPost