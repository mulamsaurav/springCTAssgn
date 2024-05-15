import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {height, width} from '../utils/dimentions.ts';
import {useDispatch, useSelector} from 'react-redux';
import {EmployeeType, saveEmployee} from '../redux/slices/employeeSlice.ts';
import {RootState} from '../redux/store.ts';

type AddEmployeeScreenProps = NativeStackScreenProps<
  StackParamList,
  'AddEmployee'
>;

const AddEmployee: React.FC<AddEmployeeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  //   const {} = useSelector((state:RootState)=>state.employee)
  const [employeeDetails, setEmployeeDetails] = useState<EmployeeType>({
    address: '',
    age: '',
    city: '',
    name: '',
  });

  const onAddEmployee = () => {
    dispatch(saveEmployee(employeeDetails));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text onPress={() => navigation.goBack()}>Go Back</Text>
      <ScrollView
        automaticallyAdjustKeyboardInsets
        keyboardDismissMode="interactive"
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TextInput
          placeholder="Enter your name"
          value={employeeDetails?.name}
          onChangeText={v => setEmployeeDetails(prev => ({...prev, name: v}))}
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
          placeholder="Enter your age"
          value={employeeDetails?.age}
          onChangeText={v => setEmployeeDetails(prev => ({...prev, age: v}))}
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
          placeholder="Enter your address"
          value={employeeDetails?.address}
          onChangeText={v =>
            setEmployeeDetails(prev => ({...prev, address: v}))
          }
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
          placeholder="Enter your city"
          value={employeeDetails?.city}
          onChangeText={v => setEmployeeDetails(prev => ({...prev, city: v}))}
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
          onPress={() => onAddEmployee()}>
          <Text style={{color: 'white'}}>Add Employee</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddEmployee;
