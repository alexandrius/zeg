import React from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import t from 'strings';

export default function Auth() {
    return (
        <SafeAreaView style={{ flex: 1, paddingVertical: 75 }}>

            <Text>{t('auth.welcome')}</Text>

        </SafeAreaView>
    )
}