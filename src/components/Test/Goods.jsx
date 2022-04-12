import React, { useEffect, useState } from "react";
import styles from "../Test/Goods.module.css";
import classNames from "classnames";
import Button from "../Button/Button";
import { BASE_URL } from "../../constant";
import toast from "react-hot-toast";

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
    <div className={classNames(styles.container)}>
      {goods.map((item) => {
        return (
          <div className={classNames(styles.goodsCard)}>
            <h1>{item.name}</h1>
            <p>{item.ing}</p>
            <h3>
              <span>{item.price}</span>сом
            </h3>
            <button>+</button>
            <button>-</button>
            <Button
              myClass="mainBtn"
              handleClick={() => {
                alert("worked");
              }}
            >
              В корзину
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Goods;
