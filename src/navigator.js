import { Login, Authorized, Onboarding } from 'screens';
import { Defaults } from 'utils';

import {
    createStackNavigator,
    createSwitchNavigator,
    createAppContainer
} from "react-navigation";


export const Route = () => createAppContainer(createSwitchNavigator({
    Onboarding,
    Login,
    Main: createStackNavigator({
        Authorized
    }),
},
    {
        initialRouteName: getInitialRouteName()
    }
));

function getInitialRouteName() {
    if (!Defaults.onBoardingWasShown /*|| __DEV__*/)
        return 'Onboarding';

    if (Defaults.token)
        return 'Main'

    return 'Login';
}