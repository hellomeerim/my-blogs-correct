import React, {useState} from 'react';
import { tags } from '../../constant';

const Tags = () => {
    const [tag, setTag] = useState('New York');

    console.log(tag);

    const clickTag = () => {
        if (tag === 'New York'){
            setTag('London');
        } else{
            setTag('London');
        }
        
    }

    return (
        <div>
            <div className="w3-card w3-margin">
                <div className="w3-container w3-padding">
                    <h4 onClick={clickTag}>{tag}</h4>
                </div>
                <div className="w3-container w3-white">
                <p><span className="w3-tag w3-black w3-margin-bottom">Travel</span>
                    {tags.map((item) => {
                        return  <span key={item.id} className="w3-tag w3-light-grey w3-small w3-margin-bottom" style={{marginRight:"10px"}}>{item.text}</span> 
                    })}
                </p>
              </div>
           </div>
        </div>
    );
};

export default Tags;
