export const BASE_URL = 'http://localhost:3000';

export const posts = [
    {
        id: 1,
        user:{
            imgOfPublisher: "https://habrastorage.org/r/w32/getpro/habr/avatars/27b/f35/f6f/27bf35f6f595fc136b70c384752ba387.jpg",
            name: "OlegSivchenko ",
            dateOfPublication: new Date().toTimeString()
        } ,
        tags: ["Научно-популярное" ,"Физика", "Астрономия"],
        title: "Координаты чудес. Как сверхновые осветили путь к современной астрофизике",
        titleDesc:"Научно-популярное, Физика, Астрономия",
        date:"15.03.2022",
        desc:"Около 10 лет назад я вторично начал вести блог в «Живом журнале» (и вел его около полутора лет). Там я пробовал писать, в том числе, на научно-популярные, философские и религиозные темы и, в частности, о высоком Средневековье (в тот период я читал и перечитывал Жака ле Гоффа, Анри де Любака, Нормана Дэвиса и Йохана Хёйзингу).",
        countComments:"0",
        imageUrl:"https://www.jotdown.es/wp-content/uploads/2020/11/1.jpg"
    },
    {
        id: 2,
        user:{
            imgOfPublisher: "https://cdn-icons-png.flaticon.com/512/3667/3667249.png",
            name: "AlinaBondarenko ",
            dateOfPublication: new Date().toTimeString()
        } ,
        tags: ["Блог компании Lineate, JavaScript", "Программирование" , "Node.JS", "Serverless"],
        title:"Разработчик в стране Serverless: первые шаги, первая лямбда",
        titleDesc:"Блог компании Lineate, JavaScript *, Программирование *, Node.JS *, Serverless *",
        date:"18.03.2022",
        desc:"Serverless подход в разработке уже давно пользуется большой популярностью. По разным опросам, разработчики отмечают следующие преимущества в serverless технологиях: гибкое масштабирование; быстрота разработки; уменьшение времени или затрат на администрирование приложений; быстрые релизы.",
        countComments:"14",
        imageUrl:"https://habrastorage.org/r/w1560/getpro/habr/upload_files/739/5c6/bb7/7395c6bb767a121158429dd793438d52.png"
    }
    
]

export const popularPosts = [
    {
        id: 0,
        img: "https://img.freepik.com/free-vector/astronaut-hanging-moon-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3500.jpg",  
        theme: "Lorem",
        desc: "Sed mattis nunc"         
    },
    {
        id: 1,
        img: "https://img.freepik.com/free-vector/couple-astronaut-sitting-moon-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3395.jpg?size=338&ext=jpg",  
        theme: "Ipsum",
        desc: "Praes tinci sed"   
    },
    {
        id: 2,
        img: "https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",  
        theme: "Dorum",
        desc: "Ultricies congue"   
    },
    {
        id: 3,
        img: "https://img.freepik.com/free-vector/astronaut-drinking-coffee-sitting-planet_185029-959.jpg",  
        theme: "Mingsum",
        desc: "Lorem ipsum dipsum"   
    }
]

export const tags = [
    {
        id: 0,
        text: "New York"
    },
    {
        id: 1,
        text: "IKEA"
    },
    {
        id: 2,
        text: "NORWAY"
    },
    {
        id: 3,
        text: "Ideas"
    },
    {
        id: 4,
        text: "Baby"
    },
    {
        id: 5,
        text: "News"
    },
    {
        id: 6,
        text: "Clothing"
    },
    {
        id: 7,
        text: "Sports"
    },
    {
        id: 8,
        text: "Games"
    }
]

export const comments = [
    {
        id: 0,
        img: "https://thumbs.dreamstime.com/b/%D1%81%D0%BC%D0%B5%D1%88%D0%BD%D0%BE%D0%B9-%D0%BF%D0%BE%D1%80%D1%82%D1%80%D0%B5%D1%82-%D0%BA%D0%BE%D1%82%D0%B0-%D0%B2-%D0%BA%D1%80%D1%83%D0%B3%D0%BB%D0%BE%D0%B9-%D1%80%D0%B0%D0%BC%D0%BA%D0%B5-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B9-141764869.jpg", 
        name: 'Aijan Aidarova,  3 месяца назад',
        comment: 'Разве Браге работал с оптическими инструментами? Вроде бы у него были только угломерные приборы, а первый телескоп создал Галилей, уже после смерти Браге. Или я не прав?А за статью спасибо, было интересно почитать. А таблица Менделеева с источниками происхождения элементов - вообще бомба.' 
    },
    {
        id: 1,
        img: "https://i.pinimg.com/originals/f0/c7/29/f0c729013ede15a59a7dd9d1f1ce2ceb.jpg", 
        name: 'Aigerim Bekbolotova,  4 месяца назад',
        comment: 'Мне кажется, упущена одна важная вещь, которая объясняет, почему сверхновые настолько значимы. Если грубо, есть сверхновые типа Ia и все остальные, не-Ia. Последние -- это так называемые core-collapse supernovae, т.е. результат коллапса массивных звезд на последнем этапе жизни. Типов этих core-collapse - великое множетсво, их спектры и кривые блеска (изменение яркости со временем) зависят от кучи факторов, включая химический состав. ' 
    },
    {
        id: 2,
        img: "https://p.favim.com/orig/2018/08/09/creativity-animals-naomi-lord-Favim.com-6137536.jpg", 
        name: 'Meerim Egemberdieva,  6 месяца назад',
        comment: 'Ну и интересное замечание -- thermal runaway и core-collapse это процессы, отличающиеся друг от друга, а главное происходящие с совершенно разными объектами (крохотный БК массой 1.44Msun vs ядро в несколько масс (иногда десятков масс) Солнца в сверхмассивной звезде), но их наблюдаемые характеристики достаточно схожи, чтобы изначально поместить их в одну категорию "сверхновые" и только спустя некоторое время понять, что Ia (и подтипы) отличаются от всех остальных сверхновых.' 
    }
]

