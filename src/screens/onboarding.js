import React, { useState, useRef } from 'react';
import { ScrollView, Image, View, Dimensions } from 'react-native';
import { Common, Colors } from 'styles';
import { Text, RoundButton } from 'components';
import t from 'strings';
import { Settings, isAndroid } from 'utils';

const { width } = Dimensions.get('window');
const androidFixWidth = ~~width;

const PAGES = [{
    image: require('../../assets/scooter_girl.png'),
    title: 'Scooters',
    content: 'ლორემ იპსუმ ხოხბის ნამცხვრები ამოჭრილი\nკოჭლობდა ნიშნების, მოვიმოქმედე დამძიმებულ'
}, {
    image: require('../../assets/scooter_girl.png'),
    title: 'Scooters',
    content: 'ლორემ იპსუმ ხოხბის ნამცხვრები ამოჭრილი\nკოჭლობდა ნიშნების, მოვიმოქმედე დამძიმებულ'
}, {
    image: require('../../assets/scooter_girl.png'),
    title: 'Scooters',
    content: 'ლორემ იპსუმ ხოხბის ნამცხვრები ამოჭრილი\nკოჭლობდა ნიშნების, მოვიმოქმედე დამძიმებულ'
}]

function Onboarding({ navigation }) {
    const [swipeIndex, setSwipeIndex] = useState(0);
    const scrollView = useRef(null);

    const onScrollEnd = (x) => {
        setSwipeIndex(Math.floor(x / androidFixWidth));
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.backgroundColor }}>
            <ScrollView
                ref={scrollView}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={({ nativeEvent }) => {
                    onScrollEnd(nativeEvent.contentOffset.x)
                }}
                horizontal>
                {PAGES.map((p, i) => (
                    <View key={i.toString()}
                        style={[{
                            width: width,
                            marginTop: 115,
                            justifyContent: 'space-between',
                            alignItems:'center',
                        }, Common.horizontalPadding]}>
                        <Image source={p.image} />
                        <View style={{ flex: 1 }} />
                        <Text style={{
                            marginBottom: 28,
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}>{p.title}</Text>
                        <Text style={{
                            marginBottom: 50,
                            fontSize: 12,
                            color: Colors.placeholder
                        }}>{p.content}</Text>
                    </View>
                ))}
            </ScrollView>

            <View style={[{
                flexDirection: 'row',
                marginBottom: 50,
                justifyContent: 'space-between',
                alignItems: 'center'
            }, Common.horizontalMargin]}>
                <View style={{
                    width: 50,
                    height: 5,
                    flexDirection: 'row'
                }}>
                    {PAGES.map((_, i) => (
                        <View
                            key={i.toString()}
                            style={{
                                marginLeft: i === 0 ? 0 : 5,
                                backgroundColor: i === swipeIndex ? Colors.mainBlack : Colors.disabled,
                                height: 4,
                                width: 4,
                                borderRadius: 2
                            }} />
                    ))}
                </View>

                <RoundButton
                    title={t('common.next')}
                    onPress={() => {
                        if (swipeIndex < PAGES.length - 1) {
                            const x = (swipeIndex + 1) * width;
                            scrollView.current.scrollTo({ x });
                            if (isAndroid()) {
                                onScrollEnd(x);
                            }
                        }
                        else {
                            Settings.setOnboardingWasShown(true);
                            navigation.navigate('Login')
                        }
                    }} />
            </View>

        </View>
    )
}

export default Onboarding;