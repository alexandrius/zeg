import React from 'react';
import {
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    ViewPropTypes,
    StyleSheet
} from 'react-native';
import { isAndroid } from 'utils';

function Touchable({ style, children, onPress }) {
    if (isAndroid()) {
        const flattenStyle = StyleSheet.flatten(style);

        const outerStyle = {
            overflow: 'hidden'
        };
        const innerStyle = { ...flattenStyle };

        if (style) {
            outerStyle.margin = flattenStyle.margin;
            outerStyle.marginHorizontal = flattenStyle.marginHorizontal;
            outerStyle.marginVertical = flattenStyle.marginVertical;
            outerStyle.borderRadius = flattenStyle.borderRadius;

            innerStyle.margin = undefined;
            innerStyle.marginHorizontal = undefined;
            innerStyle.marginVertical = undefined;
            innerStyle.borderRadius = undefined;
        }

        return (
            <View style={outerStyle}>
                <TouchableNativeFeedback
                    useForeground
                    onPress={onPress}>
                    <View style={innerStyle}>
                        {children}
                    </View>
                </TouchableNativeFeedback>
            </View>)
    }

    return (
        <TouchableOpacity onPress={onPress} style={style}>
            {children}
        </TouchableOpacity>)
}

Touchable.propTypes = {
    style: ViewPropTypes.style
}

export default Touchable;