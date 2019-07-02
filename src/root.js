import React from 'react';
import { View } from 'react-native';
import { Common } from 'styles';
import { Route } from './navigator';

function Root() {
    const Navigator = Route()

    return (
        <View style={Common.fill}>
            <Navigator />
        </View>
    )
}

export default Root;