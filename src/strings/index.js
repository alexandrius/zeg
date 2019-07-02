import Localization from './localization';
import { useLocale } from 'hooks';

function t(key) {
    const { locale } = useLocale();
    const keys = key.split('.');
    return Localization[keys[0]][keys[1]][locale];
}

export default t;   