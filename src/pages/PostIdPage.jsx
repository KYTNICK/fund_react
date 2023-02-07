import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useFetching } from './../hooks/useFetching';
import PostService from './../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    const[fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getById(id)
    setPost(response.data)
    })
    const[fetchCommentsById, isCommentsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id)
    setComments(response.data)
    })
  
    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsById(params.id)
    }, [])

    return (
    <div>
        <h1>{params.id} Post page</h1>
        {isLoading ? <Loader/> : <div>{post.id}. {post.title}</div>}
        <br />
        <h1>Comments</h1>
        {isCommentsLoading ? <Loader/> : <div >{comments.map(comm =>
            <div key={comm.id} style={{marginTop: 25}}>
                <h5>{comm.email}</h5>
                <div>{comm.body}</div>
            </div>
        )}
            </div>}
    </div>
  )
}

export default PostIdPage