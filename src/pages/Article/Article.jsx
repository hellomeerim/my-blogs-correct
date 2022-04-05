import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

import styles from "./Article.module.css"
import Comments from './Comments';
import {BASE_URL } from '../../constant';

const Article = () => {
    const params = useParams();
    const postId = parseInt(params.id);
    const [post, setPosts] = useState({});

    useEffect(() => {
            const url = BASE_URL + '/posts/' + postId;

            fetch(url)
            .then(response => response.json())
            .then(data => setPosts(data))
    },[])

    // const postData = posts.find((item) =>{
    //     return item.id === postId;
    //  console.log(postData);
    // })

  

    return (
        <div className={styles.main}>
             <div className={styles.container}>
                <img src={post.imgOfPublisher} alt="" />
                <p>{post.name} {post.dateOfPublication}</p> <br />
            </div>
            <h1>{post.title}</h1>
            <div className={styles.rowTags}>
                 {/* {post.tags.map((item) =>{
                return <p>{item}</p>
            })} */}
            </div>
           
            <img src={post.imageUrl} alt="" /> <br />
            <p>{post.desc} </p> <br /> <br />
             <Comments postId={postId}/> 
        </div>
    );
};

export default Article;