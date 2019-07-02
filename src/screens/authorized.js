import React from 'react';
import { View } from 'react-native';
import { Text } from 'components';
import t from 'strings';

function Authorized() {

    return (
        <View>
            <Text>{t('auth.username')}</Text>
        </View>
    )
}

export default Authorized;