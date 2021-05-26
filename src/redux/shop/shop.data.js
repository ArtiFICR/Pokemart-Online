const SHOP_DATA = {
    potions: {
        id: 1,
        title: 'Potions',
        routeName: 'potions',
        items: [
            {
                id: 1,
                name: 'Potion',
                imageUrl: 'https://img.rankedboost.com/wp-content/uploads/2016/08/Potion-Pokemon-Go.png',
                price: 2
            },
            {
                id: 2,
                name: 'Super Potion',
                imageUrl: 'https://img.rankedboost.com/wp-content/uploads/2016/08/Super-Potion-Pokemon-Go.png',
                price: 7
            },
            {
                id: 3,
                name: 'Hyper Potion',
                imageUrl: 'https://img.rankedboost.com/wp-content/uploads/2016/08/Hyper_Potion-Pokemon-Go.png',
                price: 15
            },
            {
                id: 4,
                name: 'Max Potion',
                imageUrl: 'https://img.rankedboost.com/wp-content/uploads/2016/08/Pokemon-Go-Potion.png',
                price: 25
            }
        ]
    },
    pokeballs: {
        id: 2,
        title: 'Pokeballs',
        routeName: 'pokeballs',
        items: [
            {
                id: 5,
                name: 'Pokeball',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/8/87/Pok%C3%A9_Ball.png/revision/latest/scale-to-width-down/350?cb=20200918005128',
                price: 1
            },
            {
                id: 6,
                name: 'Great Ball',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/a/ac/Great_Ball_Artwork.png/revision/latest/scale-to-width-down/589?cb=20200918010231',
                price: 3
            },
            {
                id: 7,
                name: 'Ultra Ball',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/f/f1/UltraBallArt.png/revision/latest/scale-to-width-down/635?cb=20101106022319',
                price: 5
            },
            {
                id: 8,
                name: 'Heavy Ball',
                imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/016cd9a5-7bee-44c1-b903-9a4867cfd9ea/d86asra-2718bf03-8c79-422c-97a7-fc36dc845061.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNmNkOWE1LTdiZWUtNDRjMS1iOTAzLTlhNDg2N2NmZDllYVwvZDg2YXNyYS0yNzE4YmYwMy04Yzc5LTQyMmMtOTdhNy1mYzM2ZGM4NDUwNjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wLmZYpvMlUPV9LYB2bzLpwdV8tWCOQ-2MXaCcwIEtv0',
                price: 7
            },
            {
                id: 9,
                name: 'Quick Ball',
                imageUrl: 'https://static.wikia.nocookie.net/pokemon/images/b/be/Quick_Ball.png/revision/latest/scale-to-width-down/664?cb=20110615192330',
                price: 7
            },
            {
                id: 10,
                name: 'Dive Ball',
                imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/016cd9a5-7bee-44c1-b903-9a4867cfd9ea/d86asso-1a842c14-85ab-4e22-a0c1-2db76f892c4b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNmNkOWE1LTdiZWUtNDRjMS1iOTAzLTlhNDg2N2NmZDllYVwvZDg2YXNzby0xYTg0MmMxNC04NWFiLTRlMjItYTBjMS0yZGI3NmY4OTJjNGIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EMmXeqBMoq0quLuThjvPOSgAJvMTeFdJ-jlHRyqYNoI',
                price: 7
            }
        ]
    },
    berries: {
        id: 3,
        title: 'Berries',
        routeName: 'berries',
        items: [
            {
                id: 11,
                name: 'Oran Berry',
                imageUrl: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/13954.png',
                price: 5
            },
            {
                id: 12,
                name: 'Rawst Berry',
                imageUrl: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/13949.png',
                price: 7
            },
            {
                id: 13,
                name: 'Chesto Berry',
                imageUrl: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/13946.png',
                price: 7
            },
            {
                id: 14,
                name: 'Pecha Berry',
                imageUrl: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/13948.png',
                price: 7
            },
            {
                id: 15,
                name: 'Cheri Berry',
                imageUrl: 'https://gamewith-en.akamaized.net/article/thumbnail/rectangle/13944.png',
                price: 10
            }
        ]
    },
    statushealers: {
        id: 4,
        title: 'Status Healers',
        routeName: 'statushealers',
        items: [
            {
                id: 16,
                name: 'Antidote',
                imageUrl: 'https://static.wikia.nocookie.net/ethereal-gates/images/7/7a/Antidote_Art.png/revision/latest/scale-to-width-down/165?cb=20161126184527',
                price: 2
            },
            {
                id: 17,
                name: 'Burn Heal',
                imageUrl: 'https://static.wikia.nocookie.net/ethereal-gates/images/b/b2/Burn_Heal_Art.png/revision/latest/scale-to-width-down/165?cb=20161128044909',
                price: 3
            },
            {
                id: 18,
                name: 'Ice Heal',
                imageUrl: 'https://static.wikia.nocookie.net/ethereal-gates/images/6/61/Ice_Heal_Art.png/revision/latest/scale-to-width-down/165?cb=20161128150650',
                price: 2
            },
            {
                id: 19,
                name: 'Paralyze Heal',
                imageUrl: 'https://static.wikia.nocookie.net/ethereal-gates/images/a/a4/Paralyze_Heal_Art.png/revision/latest/scale-to-width-down/165?cb=20161126205910',
                price: 3
            },
            {
                id: 20,
                name: 'Awakening',
                imageUrl: 'https://www.serebii.net/itemdex/sprites/pgl/awakening.png',
                price: 2
            },
            {
                id: 21,
                name: 'Revive',
                imageUrl: 'https://cdn2.bulbagarden.net/upload/thumb/6/62/GO_Revive.png/200px-GO_Revive.png',
                price: 20
            }
        ]
    },
    pokestones: {
        id: 5,
        title: 'PokeStones',
        routeName: 'pokestones',
        items: [
            {
                id: 22,
                name: 'Thunder Stone',
                imageUrl: 'https://i2.wp.com/media.criticalhit.net/2017/11/Poke-stones-3.jpg?resize=850%2C478',
                price: 10
            },
            {
                id: 23,
                name: 'Water Stone',
                imageUrl: 'https://i0.wp.com/media.criticalhit.net/2017/11/Poke-stones-2-2.jpg?resize=850%2C478',
                price: 10
            },
            {
                id: 24,
                name: 'Fire Stone',
                imageUrl: 'https://i1.wp.com/media.criticalhit.net/2017/11/Poke-stones-1-2.jpg?resize=850%2C478',
                price: 10
            },
            {
                id: 25,
                name: 'Leaf Stone',
                imageUrl: 'https://i0.wp.com/media.criticalhit.net/2017/11/Poke-stones-4.jpg?resize=850%2C478',
                price: 10
            },
            {
                id: 26,
                name: 'Sun Stone',
                imageUrl: 'https://i2.wp.com/media.criticalhit.net/2017/11/Poke-stones-6.jpg?resize=850%2C478',
                price: 15
            },
            {
                id: 27,
                name: 'Moon Stone',
                imageUrl: 'https://i2.wp.com/media.criticalhit.net/2017/11/Poke-stones-5.jpg?resize=850%2C478',
                price: 15
            }
        ]
    }
}

export default SHOP_DATA;

