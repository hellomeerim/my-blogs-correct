import React from "react";
import { Link } from "react-router-dom";

const BlogItem = (props) => {

    return(
        <>
        <div className="w3-card-4 w3-margin w3-white">
          <img src={props.imageUrl} alt="Nature" style={{width: '100%', height: '500px'}} />
          <div className="w3-container">
            <h3><b>{props.title}</b></h3>
            <h5>{props.titleDesc} <span className="w3-opacity">{props.date}</span></h5>
          </div>
          <div className="w3-container">
            <p> {props.desc}</p>
            <div className="w3-row">
              <div className="w3-col m8 s12">
                <p>
                 <Link to={`/post/${props.id}`}><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></Link>
                  </p>
              </div>
              <div className="w3-col m4 w3-hide-small">
                <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">{props.countComments}</span></span></p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        </>
    )
}

export default BlogItem;