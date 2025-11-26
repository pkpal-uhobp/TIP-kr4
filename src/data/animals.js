const animals = [
    {
        id: 1,
        name: "Лев",
        nameEn: "Lion",
        image: "https://yastatic.net/naydex/yandex-search/12JG5kc44/bb85bbfGUy/RfZxma-iblA0ahSU4ppAFgo5yAcd9QdtTc0k3ucwN6zG2OEETH93kBeqDgwvXku7yHTD-QOPwfdC_q9wfQYyYgulWsqljh98EVtlotG9Yzo8bscMDb8YJkuVHu8",
        images: [
            "https://i.pinimg.com/736x/cd/1b/e2/cd1be23204b469bf77887229fccca66f.jpg",
            "https://i.pinimg.com/736x/ad/7a/29/ad7a2968a1e409ccaf5aefef0c7ffe16.jpg"
        ],
        category: "Хищники",
        habitat: "Африка",
        description: "Лев — царь зверей. Обладает густой гривой и мощным рыком, который слышен на километры.",
        lifespan: "10-14 лет",
        weight: "190 кг",
        diet: "Мясо",
        conservation: "Уязвимый"
    },
    {
        id: 2,
        name: "Слон",
        nameEn: "Elephant",
        image: "https://s.yimg.com/ny/api/res/1.2/IBhrHOk_UHfQg7sKfbljCQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02ODg7Y2Y9d2VicA--/https://media.zenfs.com/en/the_cool_down_737/6ae9291b7aae8725096a7b1acdcc46d2",
        images: [
            "https://i.pinimg.com/1200x/0e/9c/0b/0e9c0bb30850999a813ea6b11af12dee.jpg",
            "https://i.pinimg.com/736x/92/24/cb/9224cbaeb6edcdf9fd3e0b7052def1f8.jpg"
        ],
        category: "Травоядные",
        habitat: "Африка, Азия",
        description: "Слоны — самые большие наземные животные. У них невероятная память и интеллект.",
        lifespan: "70 лет",
        weight: "6000 кг",
        diet: "Растения",
        conservation: "Уязвимый"
    },
    {
        id: 3,
        name: "Панда",
        nameEn: "Panda",
        image: "https://s.yimg.com/ny/api/res/1.2/sxAgw7Zr2XYOtmajcTn3dA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyNDI7aD02OTk7Y2Y9d2VicA--/https://media.zenfs.com/en/southern_living_806/6ce6df3541b78a551ccdc94351f2d62a",
        images: [
            "https://i.pinimg.com/736x/54/08/c5/5408c5a173c8f7c30829a14a1fdfe359.jpg",
            "https://i.pinimg.com/1200x/5f/d5/86/5fd58653fd3e37bf4d20f2952b082505.jpg"
        ],
        category: "Травоядные",
        habitat: "Китай",
        description: "Панда — символ Китая. 99% её рациона составляет бамбук.",
        lifespan: "20 лет",
        weight: "100 кг",
        diet: "Бамбук",
        conservation: "Уязвимый"
    },
    {
        id: 4,
        name: "Тигр",
        nameEn: "Tiger",
        image: "https://scx1.b-cdn.net/csz/news/800a/2025/bengal-tigers-are-enda.jpg",
        images: [
            "https://i.pinimg.com/736x/64/e3/98/64e398fba93bcc638b3cd606693dcce6.jpg",
            "https://i.pinimg.com/736x/d4/58/2d/d4582dbf2e51ec30c31fd46fbcb2b503.jpg"
        ],
        category: "Хищники",
        habitat: "Азия",
        description: "Тигр — самая крупная дикая кошка. Каждая особь имеет уникальный узор полос.",
        lifespan: "15 лет",
        weight: "300 кг",
        diet: "Мясо",
        conservation: "Вымирающий"
    },
    {
        id: 5,
        name: "Жираф",
        nameEn: "Giraffe",
        image: "https://yastatic.net/naydex/yandex-search/12JG4kc46/bb85bbfGUy/RfZxma-iblA0ahSU4ppAFgo5yAcd9QdtTc0k3ucwN6zG2OEETH93kBejDgglUUWk1nfB_gSOzPtI-rEMGGN6K2bIN4CCjgF8EkZ1v8qzbT0LdsgGDKJOeky_Hg",
        images: [
            "https://i.pinimg.com/1200x/fc/20/4a/fc204ac667001f6f6af9c0c88499b75c.jpg",
            "https://i.pinimg.com/736x/7e/22/65/7e2265ddfea0b6a9a279aac9e968859f.jpg"
        ],
        category: "Травоядные",
        habitat: "Африка",
        description: "Жираф — самое высокое животное. Его язык может достигать 50 см в длину.",
        lifespan: "25 лет",
        weight: "1200 кг",
        diet: "Листья",
        conservation: "Уязвимый"
    },
    {
        id: 6,
        name: "Пингвин",
        nameEn: "Penguin",
        image: "https://i.pinimg.com/736x/5c/f4/ed/5cf4edb5dfdda77c90e2844f3540e845.jpg",
        images: [
            "https://i.pinimg.com/1200x/4a/43/16/4a4316d67c73fc1d9af72b36de5d5636.jpg",
            "https://i.pinimg.com/736x/23/28/44/232844ea9165110eb719db1209a75903.jpg"
        ],
        category: "Птицы",
        habitat: "Антарктида",
        description: "Пингвины не умеют летать, но отлично плавают в ледяной воде.",
        lifespan: "20 лет",
        weight: "30 кг",
        diet: "Рыба",
        conservation: "Разный"
    },
    {
        id: 7,
        name: "Медведь",
        nameEn: "Bear",
        image: "https://i.pinimg.com/1200x/8c/c8/08/8cc8083b3c198c2a0517059ea3155d5b.jpg",
        images: [
            "https://i.pinimg.com/1200x/2a/7a/40/2a7a4010ee848a51c5e191fd1e70ff28.jpg",
            "https://i.pinimg.com/1200x/78/ba/9c/78ba9c99dfc3578156d7624a50a7a4f6.jpg"
        ],
        category: "Хищники",
        habitat: "Евразия",
        description: "Бурый медведь — один из крупнейших наземных хищников. Зимой впадает в спячку.",
        lifespan: "25 лет",
        weight: "600 кг",
        diet: "Всеядный",
        conservation: "Вызывает опасения"
    },
    {
        id: 8,
        name: "Волк",
        nameEn: "Wolf",
        image: "https://i.pinimg.com/originals/72/9c/2c/729c2ccca8709dfb49efe10077e79a75.jpg",
        images: [
            "https://i.pinimg.com/1200x/05/62/6e/05626ea28034148e9f312e226d93076b.jpg",
            "https://i.pinimg.com/1200x/a5/56/70/a55670a5dff64a7e9bbe38a0079321cb.jpg"
        ],
        category: "Хищники",
        habitat: "Леса",
        description: "Волки живут стаями со строгой иерархией. Они предки всех домашних собак.",
        lifespan: "8 лет",
        weight: "80 кг",
        diet: "Мясо",
        conservation: "Стабильный"
    },
    {
        id: 9,
        name: "Дельфин",
        nameEn: "Dolphin",
        image: "https://i.pinimg.com/1200x/dc/45/54/dc45543b13e0b19674ae3ee099928cf0.jpg",
        images: [
            "https://i.pinimg.com/1200x/ef/a5/2b/efa52b9bbf87455044587f7395223a1a.jpg",
            "https://i.pinimg.com/736x/4c/0f/f5/4c0ff5d7f3da231ddaf82be91c18934d.jpg"
        ],
        category: "Морские",
        habitat: "Океан",
        description: "Дельфины обладают сложным языком общения и помогают друг другу в беде.",
        lifespan: "40 лет",
        weight: "300 кг",
        diet: "Рыба",
        conservation: "Разный"
    },
    {
        id: 10,
        name: "Орёл",
        nameEn: "Eagle",
        image: "https://i.pinimg.com/1200x/36/69/ac/3669ac0171f60ca02a01357057d4b74f.jpg",
        images: [
            "https://i.pinimg.com/1200x/02/56/54/025654b08974b839eb95073cb1499e56.jpg",
            "https://i.pinimg.com/736x/0b/a0/80/0ba080b394a9ca90dcdc98523d4625a4.jpg"
        ],
        category: "Птицы",
        habitat: "Горы",
        description: "Орлы парят высоко в небе и видят добычу на расстоянии нескольких киломров.",
        lifespan: "30 лет",
        weight: "6 кг",
        diet: "Мясо",
        conservation: "Стабильный"
    },
    {
        id: 11,
        name: "Кенгуру",
        nameEn: "Kangaroo",
        image: "https://i.pinimg.com/1200x/b7/93/97/b79397cfbb22fb85765d23ca97a48fef.jpg",
        images: [
            "https://i.pinimg.com/1200x/40/9b/af/409baf603471bab5f156a4d77791e4b4.jpg",
            "https://i.pinimg.com/1200x/9c/38/db/9c38dbbefe460674e98c94f228734f5d.jpg"
        ],
        category: "Сумчатые",
        habitat: "Австралия",
        description: "Кенгуру — единственное крупное животное, использующее прыжки для передвижения.",
        lifespan: "15 лет",
        weight: "85 кг",
        diet: "Трава",
        conservation: "Стабильный"
    },
    {
        id: 12,
        name: "Коала",
        nameEn: "Koala",
        image: "https://i.pinimg.com/1200x/ef/93/bd/ef93bd6514a1b5ed6a6dd388da40d8c6.jpg",
        images: [
            "https://i.ytimg.com/vi/8eX1yx7bjFQ/maxresdefault.jpg"
        ],
        category: "Сумчатые",
        habitat: "Австралия",
        description: "Коалы спят до 20 часов в сутки из-за низкой калорийности их диеты.",
        lifespan: "15 лет",
        weight: "12 кг",
        diet: "Эвкалипт",
        conservation: "Уязвимый"
    }
];

export default animals;