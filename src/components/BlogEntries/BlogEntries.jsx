import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import {BASE_URL} from "../../constant";

const BlogEntries = () => {
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        const url = BASE_URL + '/posts';
        fetch(url)
        .then((response) => response.json())
        .then((data) => setPosts(data))
    },[])

    console.log(posts)
    return(
        <div className="w3-col l8 s12">
            {
                posts.map((item,index) => {
                    return <BlogItem
                        key={index}
                        title={item.title}
                        titleDesc={item.titleDesc}
                        date={item.date}
                        desc={item.desc}
                        countComments={item.countComments}
                        imageUrl={item.imageUrl}
                        id = {item.id}
                     />
                })
            }
        </div>
    )
}

export default BlogEntries;


//Каким образом передаются props
// title
//title description
//date
//description/desc
//countComments
//image