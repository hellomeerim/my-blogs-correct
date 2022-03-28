import React , {useState} from 'react';

import styles from "../Test/Test.module.css"


const Test = () => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);

    const plusBtn = () => setCount(count + 1);

    const minusBtn = () => setCount(count - 1);

    const getData = () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then((response) => response.json())
        .then((data) => setData(data)); 
    }

    return (
        <div>
            {/* <button onClick={plusBtn} className={styles.counter}>+1</button>
            <button onClick={minusBtn} className={styles.counter}>-1</button>
            <p className={styles.counter}>Результат {count} </p> */}

            <button className={styles.click} onClick={getData}>Запрос данных</button>
            
         
            {
                data.map((item) =>{
                    return(
                        <>
                     {/* <p key={item.id}>{item.name}</p> */}
                     <div className={styles.container}>
                        <div className={styles.button}>
                        <div > 
                            <h5>{item.name}</h5>  
                        </div>
                        <div>
                            <button>Follow</button>
                        </div>
                    </div>
                    
                    <h6>{item.email}</h6>
                    <p> Phone number:{item.phone}, Website: {item.website}, Company name: {item.company.name}</p>
                    <h6>15K Followers &#9679; 7K Following &#9679; Since April 30,2017</h6> 
                    </div>
                    </>
                    )
                })
            }
           
       
           

        
        {/* див ретерна */}
        </div>
    );
};

export default Test;

 /*fetch(url)
            .then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data)
            }) */

 /* GET, POST, PUT, DELETE

    C - POST
    R-  GET
    U-  PUT
    D-  DELETE */