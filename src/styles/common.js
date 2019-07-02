import { StyleSheet } from 'react-native';

const Dimens = {
    DEFAULT_MARGIN: 30,
    FIELD_HEIGHT: 42
}

const Common = StyleSheet.create({
    fill: {
        flex: 1
    },
    horizontalMargin: {
        marginHorizontal: Dimens.DEFAULT_MARGIN
    },
    horizontalPadding: {
        paddingHorizontal: Dimens.DEFAULT_MARGIN
    }
})

export {
    Common,
    Dimens
};