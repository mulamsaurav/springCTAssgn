import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {imageConstants} from '../utils/assetsConstants.ts';
import {height, width} from '../utils/dimentions.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {getData} from '../utils/asyncStorage.ts';

type SplashScreenProps = NativeStackScreenProps<StackParamList, 'SplashScreen'>;

const SplashScreen: React.FC<SplashScreenProps> = ({navigation}) => {
  useEffect(() => {
    let isUserLoggedIn: null | string;
    (async () => {
      isUserLoggedIn = await getData('token');
    })();

    setTimeout(() => {
      if (!isUserLoggedIn) {
        navigation.navigate('Login');
      } else {
        navigation.navigate('TabNavigator');
      }
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        source={imageConstants.splashLogo}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          resizeMode: 'contain',
        }}
      />
    </View>
  );
};

export default SplashScreen;
