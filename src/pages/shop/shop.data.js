const SHOP_DATA = [
    {
        id: 1,
        title: 'Potions',
        routeName: 'potions',
        items: [
            {
                id: 1,
                name: 'Potion',
                imageUrl: 'https://img.rankedboost.com/wp-content/uploads/2016/08/Potion-Pokemon-Go.png',
                price: 200
            },
            {
                id: 2,
                name: 'Super Potion',
                imageUrl: 'https://img.rankedboost.com/wp-content/uploads/2016/08/Super-Potion-Pokemon-Go.png',
                price: 700
            },
            {
                id: 3,
                name: 'Hyper Potion',
                imageUrl: 'https://img.rankedboost.com/wp-content/uploads/2016/08/Hyper_Potion-Pokemon-Go.png',
                price: 1500
            },
            {
                id: 4,
                name: 'Max Potion',
                imageUrl: 'https://img.rankedboost.com/wp-content/uploads/2016/08/Pokemon-Go-Potion.png',
                price: 2500
            }
        ]
    },
    {
        id: 2,
        title: 'Pokeballs',
        routeName: 'pokeballs',
        items: [
            {
                id: 5,
                name: 'Pokeball',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/8/87/Pok%C3%A9_Ball.png/revision/latest/scale-to-width-down/700?cb=20200918005128',
                price: 100
            },
            {
                id: 6,
                name: 'Great Ball',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/a/ac/Great_Ball_Artwork.png/revision/latest?cb=20200918010231',
                price: 300
            },
            {
                id: 7,
                name: 'Ultra Ball',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/f/f1/UltraBallArt.png/revision/latest?cb=20101106022319',
                price: 500
            },
            {
                id: 8,
                name: 'Heavy Ball',
                imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/016cd9a5-7bee-44c1-b903-9a4867cfd9ea/d86asra-2718bf03-8c79-422c-97a7-fc36dc845061.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNmNkOWE1LTdiZWUtNDRjMS1iOTAzLTlhNDg2N2NmZDllYVwvZDg2YXNyYS0yNzE4YmYwMy04Yzc5LTQyMmMtOTdhNy1mYzM2ZGM4NDUwNjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wLmZYpvMlUPV9LYB2bzLpwdV8tWCOQ-2MXaCcwIEtv0',
                price: 400
            },
            {
                id: 9,
                name: 'Timer Ball',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/4/46/Timer_Ball.png/revision/latest/scale-to-width-down/350?cb=20151003164314',
                price: 400
            },
            {
                id: 10,
                name: 'Dive Ball',
                imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/016cd9a5-7bee-44c1-b903-9a4867cfd9ea/d86asso-1a842c14-85ab-4e22-a0c1-2db76f892c4b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNmNkOWE1LTdiZWUtNDRjMS1iOTAzLTlhNDg2N2NmZDllYVwvZDg2YXNzby0xYTg0MmMxNC04NWFiLTRlMjItYTBjMS0yZGI3NmY4OTJjNGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EMmXeqBMoq0quLuThjvPOSgAJvMTeFdJ-jlHRyqYNoI',
                price: 400
            }
        ]
    },
    {
        id: 3,
        title: 'Berries',
        routeName: 'berries',
        items: [
            {
                id: 11,
                name: 'Oran Berry',
                imageUrl: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/13954.png',
                price: 50
            },
            {
                id: 12,
                name: 'Rawst Berry',
                imageUrl: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/13949.png',
                price: 70
            },
            {
                id: 13,
                name: 'Chesto Berry',
                imageUrl: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/13946.png',
                price: 70
            },
            {
                id: 14,
                name: 'Pecha Berry',
                imageUrl: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/13948.png',
                price: 70
            },
            {
                id: 15,
                name: 'Cheri Berry',
                imageUrl: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/13944.png',
                price: 100
            }
        ]
    },
    {
        id: 4,
        title: 'Status Healers',
        routeName: 'status healers',
        items: [
            {
                id: 16,
                name: 'Antidote',
                imageUrl: 'https://static.wikia.nocookie.net/ethereal-gates/images/7/7a/Antidote_Art.png/revision/latest/scale-to-width-down/165?cb=20161126184527',
                price: 200
            },
            {
                id: 17,
                name: 'Burn Heal',
                imageUrl: 'https://static.wikia.nocookie.net/ethereal-gates/images/b/b2/Burn_Heal_Art.png/revision/latest/scale-to-width-down/165?cb=20161128044909',
                price: 300
            },
            {
                id: 18,
                name: 'Ice Heal',
                imageUrl: 'https://static.wikia.nocookie.net/ethereal-gates/images/6/61/Ice_Heal_Art.png/revision/latest/scale-to-width-down/165?cb=20161128150650',
                price: 100
            },
            {
                id: 19,
                name: 'Paralyze Heal',
                imageUrl: 'https://static.wikia.nocookie.net/ethereal-gates/images/a/a4/Paralyze_Heal_Art.png/revision/latest/scale-to-width-down/165?cb=20161126205910',
                price: 300
            },
            {
                id: 20,
                name: 'Awakening',
                imageUrl: 'https://static.wikia.nocookie.net/ethereal-gates/images/8/87/Awakening_Art.png/revision/latest/scale-to-width-down/165?cb=20161127031258',
                price: 100
            },
            {
                id: 21,
                name: 'Revive',
                imageUrl: 'https://cdn2.bulbagarden.net/upload/thumb/6/62/GO_Revive.png/200px-GO_Revive.png',
                price: 2000
            }
        ]
    },
    {
        id: 5,
        title: 'PokeStones',
        routeName: 'pokestones',
        items: [
            {
                id: 22,
                name: 'Thunder Stone',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/8/87/Thunder_Stone_anime.png/revision/latest/scale-to-width-down/1000?cb=20140603003050',
                price: 1000
            },
            {
                id: 23,
                name: 'Water Stone',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/b/ba/Water_Stone_anime.png/revision/latest/scale-to-width-down/1000?cb=20140603003034',
                price: 1000
            },
            {
                id: 24,
                name: 'Fire Stone',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/d/d1/Fire_Stone_anime.png/revision/latest/scale-to-width-down/1000?cb=20140603003024',
                price: 1000
            },
            {
                id: 25,
                name: 'Leaf Stone',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/b/bb/Leaf_Stone_anime.png/revision/latest/scale-to-width-down/1000?cb=20140603003108',
                price: 1000
            },
            {
                id: 26,
                name: 'Sun Stone',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/3/3f/Sun_Stone_anime.png/revision/latest/scale-to-width-down/1000?cb=20140603003247',
                price: 1500
            },
            {
                id: 27,
                name: 'Moon Stone',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/7/7e/Moon_Stone_anime.png/revision/latest/scale-to-width-down/1000?cb=20140603003134',
                price: 1500
            }
        ]
    }
]

export default SHOP_DATA;

