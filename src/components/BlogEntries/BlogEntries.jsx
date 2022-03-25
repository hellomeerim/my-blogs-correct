import React from "react";
import BlogItem from "./BlogItem";
import {posts} from "../../constant";

const BlogEntries = () => {
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