const dataIn = () => {
    const dataset = [
        {
            price: 300,
            image: "https://d37kg2ecsrm74.cloudfront.net/web/ikea4/images/382/0238233_PE377690_S5.jpg",
            title: "Стул",
            descr: "Супер стул",
            available: true,
            id: "",
        },
        {
            price: 450,
            image: "https://i.pinimg.com/originals/7b/ea/ce/7beacee768d4e1da094f6d8bba4f3f34.jpg",
            title: "Чайник",
            descr: "Чайник",
            available: true,
            id: "",
        },
        {
            price: 250,
            image: "https://komsomolsk-na-amure.el43.ru/lyustri/f62cc9a5c2e8242b15ec3cd88f4e4afe.jpeg",
            title: "Настольная лампа",
            descr: "Светит",
            available: false,
            id: "",
        },
        {
            price: 250,
            image: "http://rdm-printer.ru/images/cms/data/1233_80_2_jpg_1000x1000.jpg",
            title: "Жёлтый зонт",
            descr: "Зонт",
            available: true,
            id: "",
        },
        {
            price: 30,
            image: "https://wallbox.ru/wallpapers/main/201507/bb0f1d758972e17.jpg",
            title: "Банан",
            descr: "Из Эквадора",
            available: false,
            id: "",
        },
        {
            price: 890,
            image: "https://www.chuvsu.ru/images/stories/novosty/2019/2/050219_4.jpg",
            title: "Мяч",
            descr: "Баскетбольный",
            available: false,
            id: "",
        },
        {
            price: 340,
            image: "https://www.mochacasa.com/wp-content/uploads/2015/08/tea-cup-stool-orange.jpg",
            title: "Чашка",
            descr: "Для воды",
            available: false,
            id: "",
        },
        {
            price: 18000,
            image: "https://getbg.net/upload/full/www.GetBg.net_Creative_Wallpaper_Black_pomegranate_on_a_white_background_095507_.jpg",
            title: "Граната",
            descr: "Боевая",
            available: true,
            id: "",
        },
        {
            price: 9,
            image: "https://cdn.st100sp.com/pictures/153599700",
            title: "Шарик 1",
            descr: "Чёрный",
            available: true,
            id: "",
        },
        {
            price: 140,
            image: "http://grafamania.net/uploads/posts/2013-10/1380962041_szltc2bpqwkuaxm.jpeg",
            title: "Скалка",
            descr: "Для готовки",
            available: true,
            id: "",
        },
        {
            price: 20,
            image: "https://avatars.mds.yandex.net/get-pdb/1004346/cec6bfc1-a9f6-4072-95c2-9b37a4c87b7b/s1200?webp=false",
            title: "Яблоко",
            descr: "С дерева",
            available: true,
            id: "",
        },
        {
            price: 37000,
            image: "https://i.pinimg.com/736x/44/4e/39/444e39d0ef6762619f7863ee3d92cbfc.jpg",
            title: "Лошадь",
            descr: "Белая",
            available: false,
            id: "",
        },
        {
            price: 12000,
            image: "https://dom74mebeli.ru/files/originals/kvadro-1-optima-036.jpg",
            title: "Диван",
            descr: "Мягкий",
            available: true,
            id: "",
        },
        {
            price: 14000,
            image: "https://avatars.mds.yandex.net/get-marketpic/373002/market_9eJndV5xL9G5F-FRUKSgzw/orig",
            title: "Кресло",
            descr: "Мягкое",
            available: true,
            id: "",
        },
        {
            price: 2200,
            image: "https://cdn.inmyroom.ru/uploads/photo/file/c4/c4ca/c4ca56e1-c68a-4ec3-b656-698790de9bbe.jpg",
            title: "Комод",
            descr: "Зелёный",
            available: true,
            id: "",
        },
        {
            price: 450,
            image: "https://i.pinimg.com/originals/7b/ea/ce/7beacee768d4e1da094f6d8bba4f3f34.jpg",
            title: "Чайник",
            descr: "Чайник",
            available: true,
            id: "",
        },
        {
            price: 250,
            image: "https://komsomolsk-na-amure.el43.ru/lyustri/f62cc9a5c2e8242b15ec3cd88f4e4afe.jpeg",
            title: "Настольная лампа",
            descr: "Светит",
            available: false,
            id: "",
        },
        {
            price: 250,
            image: "http://rdm-printer.ru/images/cms/data/1233_80_2_jpg_1000x1000.jpg",
            title: "Жёлтый зонт",
            descr: "Зонт",
            available: true,
            id: "",
        },
        {
            price: 140,
            image: "http://grafamania.net/uploads/posts/2013-10/1380962041_szltc2bpqwkuaxm.jpeg",
            title: "Скалка",
            descr: "Для готовки",
            available: true,
            id: "",
        },
        {
            price: 20,
            image: "https://avatars.mds.yandex.net/get-pdb/1004346/cec6bfc1-a9f6-4072-95c2-9b37a4c87b7b/s1200?webp=false",
            title: "Яблоко",
            descr: "С дерева",
            available: true,
            id: "",
        },
    ];

    let data_return = [];
    for (let i=0; i < 3000/20; i++) {
        for (let j=0; j < 20; j++) {
            data_return.push(JSON.parse(JSON.stringify(dataset[j])));
            data_return[j+i*20].id = "item"+(j+i*20);
        }
    }

    return data_return;
}

let data = dataIn();

export default data;
