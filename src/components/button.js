import React from 'react';
import Touchable from './touchable';
import { ViewPropTypes } from 'react-native';
import Text from './text';
import { Colors, Dimens } from 'styles';

const { primary } = Colors;

function Button({ title, style, textStyle, onPress }) {
    return (
        <Touchable onPress={onPress} style={[{
            borderRadius: 20,
            backgroundColor: primary,
            height: Dimens.FIELD_HEIGHT,
            alignItems: 'center',
            justifyContent: 'center'
        }, style]}>
            <Text style={[{
                color: 'white',
                fontWeight: '500',
                fontSize: 14
            }, textStyle]}>{title}</Text>
        </Touchable>)
}

Button.propTypes = {
    style: ViewPropTypes.style
}

export default Button;