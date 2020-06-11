import ru from './ru';

const translates = { ru };

export const getTranslatesByLocale = locale => {
    return translates[locale];
}