import React from 'react';
import { popularPosts } from '../../constant';


const PopularPosts = () => {
    return (
        <>
                <div className="w3-card w3-margin">
                    <div className="w3-container w3-padding">
                        <h4>Popular Posts</h4>
                    </div>
                    <ul className="w3-ul w3-hoverable w3-white">
                    {popularPosts.map((item) => {
                    return  <li key={item.id} className="w3-padding-16">
                        <img src={item.img} alt="Image" className="w3-left w3-margin-right" style={{width: '50px'}} />
                        <span className="w3-large">{item.theme}</span><br />
                        <span>{item.desc}</span>
                     </li>
                })}
                    </ul>       
                </div>
            <hr />
        </>
    );
};

export default PopularPosts;

