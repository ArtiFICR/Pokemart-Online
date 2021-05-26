const INITIAL_STATE = {
    sections: [
        {
            title: 'potions',
            imageUrl: 'http://static.pokemoncrossroads.com/wp-content/uploads/2016/08/28214134/Potion.jpg',
            id: 1,
            linkUrl: 'shop/potions',
        },
        {
            title: 'pokeballs',
            imageUrl: 'https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/5ibffemzqxsihxvr_1610352861.jpeg?tr=w-758,h-433 ',
            id: 2,
            linkUrl: 'shop/pokeballs'
        },
        {
            title: 'berries',
            imageUrl: 'https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/dataimagejpegbase649j4AAQSkZJRgABAQAAAQABAAD2wBDAA-3468d2817a60b23eee417272c1af4fa6.jpg',
            id: 3,
            linkUrl: 'shop/berries'
        },
        {
            title: 'statushealers',
            imageUrl: 'https://static3.gamerantimages.com/wordpress/wp-content/uploads/2021/01/Pokemon-TCG-Max-Revive-Card-Art.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
            size: 'large',
            id: 4,
            linkUrl: 'shop/statushealers'
        },
        {
            title: 'pokestones',
            imageUrl: 'https://i0.wp.com/media.criticalhit.net/2017/11/Poke-stones-2-2.jpg?resize=850%2C478',
            size: 'large',
            id: 5,
            linkUrl: 'shop/pokestones'
        }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;