import React from 'react';
import { useParams } from 'react-router-dom';

import styles from "./Article.module.css"
import Comments from './Comments';
import { posts } from '../../constant';


const Article = () => {
    const params = useParams();
    const postId = parseInt(params.id);
    const postData = posts.find((item) =>{
        return item.id === postId;
    })

    console.log(postData);

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <img src={postData.user.imgOfPublisher} alt="" />
                <p>{postData.user.name} {postData.user.dateOfPublication}</p> <br />
            </div>
            <h1>{postData.title}</h1>
            <div className={styles.rowTags}>
                 {postData.tags.map((item) =>{
                return <p>{item}</p>
            })}
            </div>
           
            <img src={postData.imageUrl} alt="" /> <br />
            <p>{postData.desc} </p> <br /> <br />
             <Comments/>
        </div>
    );
};

export default Article;