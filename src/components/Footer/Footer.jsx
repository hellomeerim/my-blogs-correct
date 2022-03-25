import React from 'react';
//import "../../index.css"
import facebook from "../../img/icons/facebook.png";
import twitter from "../../img/icons/twitter.png";
import behance from "../../img/icons/behance.png";
import styles from "./Footer.module.css"

const container = {
    backgroundColor:'#000',
    color:'white',
}

const text = {
    textAlign: 'center',
    fontSize: '30px'
}

const Footer = () => {
    return (
        <div>
            <footer className="w3-container w3-padding-32 w3-margin-top my-container">
                <p style={text}>Copyright 2022 Bishkek</p>
                <ul className={styles.socialContainer}>
                    <li><img src={facebook} alt="" /></li>
                    <li><img src={twitter} alt="" /></li>
                    <li><img src={behance} alt="" /></li>
                </ul>
            </footer>
        </div>
    );
};

export default Footer;



/*   

Version1
<footer style={{backgroundColor:'grey'}}> inline style sample

const container = {
    backgroundColor:'#000',
    color:'white',
}

 <footer style={container} className="w3-container w3-padding-32 w3-margin-top">



Version2
import "../../index.css"
 <footer className="my-container">
*/