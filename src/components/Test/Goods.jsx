import React, { useEffect, useState } from "react";
import styles from "../Test/Goods.module.css";
import classNames from "classnames";
import Button from "../Button/Button";
import { BASE_URL } from "../../constant";
import toast from "react-hot-toast";


const GoodsCard = ({item}) => {
  const [count,setCount] = useState(1);

  const addCart = () => {
    let cartStorage = localStorage.getItem('cart');

    const id = item.id;
    let object = {
      [id]: {
        ...item,
        count
    }
    }

    if(cartStorage){
      cartStorage = JSON.parse(cartStorage);
      object = {
        ...object,
        ...cartStorage
      }
    
    }
    localStorage.setItem("cart", JSON.stringify(object));
  };

  const increase = () => {
    setCount(count+1)
 }

 const decrease = () => {
   if(count > 1) {
     setCount(count-1)
   }
 }

  return (<div key={item.id} className={classNames(styles.goodsCard)}>
      <h1>{item.name}</h1>
      <p>{item.ing}</p>
      <h3>
        <span>{item.price}</span>сом
      </h3>
      <button onClick={increase}>+</button>
      <button onClick={decrease} >-</button>
      <p><strong>{count}</strong></p>
      <Button myClass="mainBtn" handleClick={() => addCart(item)}>
        В корзину
      </Button>
    </div>
  )
  
}

const Goods = () => {
  const [goods, setGoods] = useState([]);
  
  const getGoods = () => {
    const url = BASE_URL + "/goods";

    fetch(url)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          toast.error("Что-то пошло не так. Обновите страницу");
        }
      })
      .then((data) => setGoods(data));
  };

  useEffect(() => {
    getGoods();
  }, []);

  return (
    <>
      <a href="">Корзина</a>
      <div className={classNames(styles.container)}>
        {goods.map(item => <GoodsCard key={item.id} item={item}/>)}
      </div>
    </>
  )
}

export default Goods;
