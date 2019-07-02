import React, { useState } from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { Colors } from 'styles';
import { isAndroid } from 'utils';
import { useLocale } from 'hooks';
import { Consts } from 'utils';

const { ka } = Consts.locale;
//Needs work on android texts are cut off
function Text({ children, style }) {
    const [height, setHeight] = useState(-1);
    const { locale } = useLocale();

    let fixedStyle = {
        color: Colors.mainBlack
    }

    // const needsStyleFix = isAndroid() && locale === ka && style && style.fontSize;

    // if (needsStyleFix) {
    //     fixedStyle = {
    //         ...fixedStyle,
    //         height: height > 0 ? height : undefined,
    //         opacity: height > 0 ? 1 : 0
    //     }
    // }

    fixedStyle = StyleSheet.flatten([fixedStyle, style]);

    return <RNText
        // onLayout={({ nativeEvent }) => {
        //     if (height < 0 && needsStyleFix) {
        //         setHeight(nativeEvent.layout.height + (style.fontSize * 0.2));
        //     }
        // }}
        style={fixedStyle}>{children}</RNText>
}

Text.propTypes = {
    style: RNText.propTypes.style
}

export default Text;