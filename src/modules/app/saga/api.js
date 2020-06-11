import Photo from '../../../../assets/profilePhoto.png';

export function getUserDataFromServer() {
    return {
        name: 'Вероника Ростова',
        photo: Photo,
        status: 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны',
        position: 'Менеджер по продажам',
        services: [
            {
                label: 'Пакетные туры',
                count: 3,
            },
            {
                label: 'Отели',
                count: 1,
            },
            {
                label: 'Ручное бронирование',
                count: 11,
            },
        ],
    };
};