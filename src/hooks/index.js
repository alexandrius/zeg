import { modalLoadingStore, useModalLoading } from './modalLoadingHook';
import { useLocale, localeStore } from './localeHook';
import useLogin from './loginHook';

const stores = [modalLoadingStore, localeStore];

export {
    stores,
    useModalLoading,
    useLocale,
    useLogin,
}