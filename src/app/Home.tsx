import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {getData, removeValue} from '../utils/asyncStorage.ts';

type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'Home'>,
  NativeStackScreenProps<StackParamList>
>;

const Home: React.FC<HomeScreenProps> = ({navigation}) => {
  const [userEmail, setUserEmail] = useState<string>('');

  useEffect(() => {
    (async () => {
      setUserEmail(await getData('email'));
    })();
  }, []);

  const onPressLogout = async () => {
    removeValue('token');
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
        }}>
        <Text>User Email: {userEmail}</Text>
        <Text onPress={() => navigation.navigate('AddEmployee')}>
          Add Employee
        </Text>
      </View>

      <Text
        style={{alignSelf: 'center', fontSize: 18}}
        onPress={() => onPressLogout()}>
        Logout
      </Text>
    </SafeAreaView>
  );
};

export default Home;
