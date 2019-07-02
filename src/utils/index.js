import Defaults from './defaults';
import Consts from './consts';
import * as Settings from './settings';
import { Platform } from 'react-native';


const showErrorToast = () => {

}

const isAndroid = () => {
    return Platform.OS === 'android';
}


export {
    Defaults,
    Consts,
    Settings,
    showErrorToast,
    isAndroid
}