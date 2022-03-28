import React from 'react';
import styles from "./Article.module.css"
import Comments from './Comments';
import { posts2 } from '../constant';

const Article = () => {
    return (
        <>
        <div className={styles.main}>
            <div className={styles.container}>{
                posts2.map ((item) => {
                    return <>
                    <img src={item.imgOfPublisher} alt="" />
                    <p>{item.name} {item.dateOfPublication}</p> <br/>
                    </>
                })
            }
            </div>
            <h1>Координаты чудес. Как сверхновые осветили путь к современной астрофизике</h1>{
                posts2.map ((tags) => {
                    return <>
                        <p>{tags.tag1}{tags.tag2} {tags.tag3}</p>
                    </>
                })
            }
        
            <img src="https://madisonlib.org/wp-content/uploads/2017/11/Stary-Night.jpg" alt="" /> <br />
            <p>Около 10 лет назад я вторично начал вести блог в «Живом журнале» (и вел его около полутора лет). Там я пробовал писать, в том числе, на научно-популярные, философские и религиозные темы и, в частности, о высоком Средневековье (в тот период я читал и перечитывал Жака ле Гоффа, Анри де Любака, Нормана Дэвиса и Йохана Хёйзингу). XV-XVI века в истории Европы интересовали меня как «самая долгая ночь перед рассветом» в истории Западной цивилизации, когда на встречных курсах шли распад единой католической ойкумены, стремительная кристаллизация естественнонаучной картины мира на индийском и исламском субстрате, расширение географии – и все это в условиях жестокого религиозного мракобесия. Бушевавшая в XIV-XVII веках серия эпидемий чумы массово выкосила образованных клириков (ведь именно священники оказались в эпицентре антисанитарии и скученности, целования зачумленных крестов и причащения больных прихожан). На их место пришли те недоучки и фанатики, которые превратили христианскую проповедь в охоту на ведьм.</p>
            <p>Наука освобождалась от магии и суеверий рывками. Первый настоящий физик Галилео Галилей жил в 1564-1642 годах. При этом к моменту смерти престарелого Галилея 15 лет исполнилось Роберту Бойлю, последнему ученому, всерьез занимавшемуся алхимией (1627-1691). Старшим современником Галилея был великий астроном и конструктор астрономических приборов Тихо Браге (1546-1601), а младшим – великий астроном и астролог Иоганн Кеплер (1571-1630), чья мать, трактирщица Катарина Кеплер (1547-1622) была обвинена в ведовстве. Всего через год после смерти Галилея родился Исаак Ньютон (1643-1727), учившийся у Бойля физике (и алхимии), а также претендовавший на авторство настолько законченной и непротиворечивой теории естествознания, что позволил себе сравнить Вселенную с заводными часами.</p>
            <p>Тем не менее, именно на жизнь последнего поколения перед Ньютоном и Бойлем (в частности, на зрелые годы Катарины Кеплер) пришлись сразу два события, наверняка заставившие средневековых европейцев в предпоследний и последний раз усомниться в незыблемости небес и понадеяться на Второе Пришествие. Это были взрывы сверхновых, произошедшие в 1572 году (сверхновая Браге) и 1604 (сверхновая Кеплера), на века вперед определившие развитие астрономии и более не повторявшиеся до 1987 года. Отчетливо сознавая, что этот пост не вполне соответствует тематике Хабра, далее я напомню обо всех достоверно известных семи сверхновых, зажигавшихся в небе Земли на протяжении истории человечества – и об их роли в развитии астрономии и астрофизики. </p> <br /> <br />
             <Comments/>
        </div>
       
        </>
    );
};

export default Article;