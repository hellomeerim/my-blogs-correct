import React, {useState} from 'react';
import styles from "./Comments.module.css"
import { BASE_URL, comments } from '../../constant';

const Comments = () => {
    const [name, setName] = useState('');
    const [comment, setComment] = useState('')

    const getName = (event) => {
        setName(event.currentTarget.value);
    }

    const getComment =(event) => {
        setComment(event.currentTarget.value);
    }

    const addUsers = () => {
        const url = BASE_URL + "/users";
    
        const user = {
          name: setName,
          comment: setComment
        }
    
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        }
    
        fetch(url,options)
            .then((response) => response.json())
            .then((data) => console.log(data))
      }

    return (
        <div className={styles.comments}>
            <h4>Комментарии</h4>
            <div className={styles.container}>
                <img src="https://sevelina.ru/images/uploads/2014/02/287.png" alt="" />
                <input onChange={getName} className={styles.container1} type="text" placeholder='Введите имя'/>
                <input onChange={getComment}  type="text" placeholder='Введите текст комментария'/>
                <button onClick={addUsers}>Оставить комментарий</button> 
            </div><br /> <br />
            <h5>122 комментариев {
                 comments.map((item) => {
                     return <>
                                <div key={item.id} className={styles.container}>
                                    <img src={item.img} alt="" />
                                    <p>{item.name}</p> <br /> 
                                </div>
                                <p>{item.comment}</p>
                                <h6>Ответить</h6>
                            </>
                 })
            }
            </h5> 
        </div>
    );
};

export default Comments;