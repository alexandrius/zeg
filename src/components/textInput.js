import React from 'react';
import { Colors } from 'styles';
import { TextInput as RNTextInput } from 'react-native';

function TextInput(props) {
    return (
        <RNTextInput theme={{
            roundness: 10,
            colors: {
                disabled: 'black',
                text: Colors.text,
                primary: Colors.placeholder,
                placeholder: Colors.placeholder,
                backgroundColor: Colors.input
            }
        }} {...props} />
    )
}

export default TextInput;