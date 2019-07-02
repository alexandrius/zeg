import { AsyncStorage } from 'react-native';

const LOCALE = 'LOCALE';
const ONBOARDING = 'ONBOARDING';

const getLocale = () => {
    return AsyncStorage.getItem(LOCALE);
}

const setLocale = (locale) => {
    AsyncStorage.setItem(LOCALE, locale);
}

const onboardingWasShown = () => {
    return AsyncStorage.getItem(ONBOARDING)
}

const setOnboardingWasShown = (shown) => {
    AsyncStorage.setItem(ONBOARDING, shown.toString());
}

export {
    getLocale,
    setLocale,
    onboardingWasShown,
    setOnboardingWasShown
}