export const menu = [
    {
        path: '/',
        id: 'main',
        name: 'Главная'
    },
    {
        path: '/about',
        id: 'about',
        name: 'О компании'
    },
    {
        path: '/services',
        id: 'services',
        name: 'Услуги',
        children: [
            {
                path: '/services/season-service',
                id: 'season-service',
                name: 'Сезонное обслуживание'
            },
            {
                path: '/services/regular-service',
                id: 'regular-service',
                name: 'Регулярное обслуживание'
            },
            {
                path: '/services/cleaning',
                id: 'cleaning',
                name: 'Чистка'
            },
            {
                path: '/services/split-systems',
                id: 'split-system',
                name: 'Обслуживание сплит-систем'
            },
            {
                path: '/services/service',
                id: 'service',
                name: 'Ремонт'
            },
            {
                path: '/services/montag',
                id: 'montag',
                name: 'Монтаж'
            },
            {
                path: '/services/diagnostics',
                id: 'diagnostics',
                name: 'Диагностика неисправностей'
            },
            {
                path: '/services/poisk-utechki',
                id: 'poisk-utechki',
                name: 'Поиск утечки'
            },
        ]
    },
    {
        path: '/contacts',
        id: 'contacts',
        name: 'Контакты',
    },
]