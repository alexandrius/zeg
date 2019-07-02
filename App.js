import React, { useState } from 'react';
import { View } from 'react-native';
import Root from './src/root';
import { Provider } from 'outstated';
import { stores } from 'hooks';
import { Settings, Consts, Defaults } from 'utils';
import { AppLoading } from 'expo';

const { en } = Consts.locale;

function App() {
  const [settingsLoaded, setSettingsLoaded] = useState(false);
  Settings.setOnboardingWasShown(false);

  const loadSettings = async () => {
    await loadLocale();
    await loadOnboardingWasShown();
  }

  const loadLocale = async () => {
    let locale = await Settings.getLocale();
    if (!locale) {
      locale = en;
    }
    Defaults.locale = locale;
    console.log('Locale', Defaults.locale);
  }

  const loadOnboardingWasShown = async () => {
    Defaults.onBoardingWasShown = (await Settings.onboardingWasShown()) === 'true';
    console.log('onBoardingWasShown', Defaults.onBoardingWasShown);
  }

  if (!settingsLoaded) {
    return (
      <AppLoading
        startAsync={loadSettings}
        onFinish={() => {
          setSettingsLoaded(true);
        }}
        onError={() => { alert('Please restart the app') }} />)
  }

  return (
    <View style={{ flex: 1 }}>
      <Provider stores={stores}>
        <Root />
      </Provider>
    </View>
  )
}

export default App;