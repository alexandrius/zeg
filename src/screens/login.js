import React, { useState } from 'react';
import { View, Image, SafeAreaView } from 'react-native';
import { Text, TextInput, Button, CheckBox } from 'components';
import { Common, Colors } from 'styles';
import t from 'strings';
import { useLocale, useLogin } from 'hooks';

function Login() {
    const { setLocale, locale } = useLocale();
    const login = useLogin();


    return (
        <SafeAreaView style={Common.fill}>

            <Text style={{
                marginLeft: 25,
                color: Colors.text,
                fontSize: 24
            }}>{t('auth.welcome')}</Text>

            <Button title='Switch locale' translatable={false} onPress={() => {
                setLocale(locale === 'ka' ? 'en' : 'ka');
            }} />

            <Image style={{ marginHorizontal: 6 }}
                source={require('../../assets/scooter_girl.png')} />

            <View style={Common.horizontalMargin}>
                {/* <TextInput label={t('auth.username')} value={login.username} onChangeText={(text) => {
                    login.setUsername(text)
                }} />
                <View style={{ height: 20 }} />
                <TextInput label={t('auth.password')} value={login.password} onChangeText={(text) => {
                    login.setPassword(text)
                }} /> */}

                {/* <View style={{ height: 20 }} />
                <CheckBox style={{ height: 30, width: 30 }} title={t('auth.remember')} checked={login.remembers} onCheck={(checked) => {
                    login.setRemembers(checked)
                }} /> */}

                <View style={{ height: 20 }} />
                <Button title={t('auth.login')} onPress={() => {
                    login.login()
                }} />

            </View>
        </SafeAreaView>
    )
}

export default Login;