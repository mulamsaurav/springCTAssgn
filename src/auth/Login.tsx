import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {height, width} from '../utils/dimentions.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {storeData} from '../utils/asyncStorage.ts';

type LoginScreenProps = NativeStackScreenProps<StackParamList, 'Login'>;

const Login: React.FC<LoginScreenProps> = ({navigation}) => {
  const [username, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onSubmit = async () => {
    if (!username || !password) {
      return Alert.alert('Please enter Username and Passord');
    }

    try {
      const response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: username, password: password}),
      });

      const finalResponse = await response.json();
      if (finalResponse.token) {
        storeData('token', finalResponse.token);
        storeData('email', username);
        navigation.navigate('TabNavigator');
      } else {
        Alert.alert(finalResponse?.error);
      }
    } catch (e) {
      //@ts-ignore
      Alert.alert(e?.error);
    }

    //
  };

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ScrollView
        automaticallyAdjustKeyboardInsets
        keyboardDismissMode="interactive"
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Username"
          value={username}
          autoCapitalize="none"
          onChangeText={v => setUserName(v)}
          style={{
            borderWidth: 1,
            width: width * 0.8,
            height: height * 0.05,
            borderRadius: 10,
            padding: 5,
            marginVertical: 5,
            color: 'black',
          }}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={v => setPassword(v)}
          secureTextEntry
          style={{
            borderWidth: 1,
            width: width * 0.8,
            height: height * 0.05,
            borderRadius: 10,
            padding: 5,
            marginVertical: 5,
            color: 'black',
          }}
        />

        <TouchableOpacity
          style={{
            width: width * 0.8,
            height: height * 0.05,
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 10,
            borderRadius: 10,
          }}
          onPress={() => onSubmit()}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
