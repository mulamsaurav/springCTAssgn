import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store.ts';
import {EmployeeType} from '../redux/slices/employeeSlice.ts';
import {height, width} from '../utils/dimentions.ts';

const Employee = () => {
  const {employees} = useSelector((state: RootState) => state.employee);

  const renderEmployeeDetails = ({item}: {item: EmployeeType}) => {
    return (
      <View
        style={{
          borderWidth: 1,
          padding: 10,
          width: width * 0.9,
          borderRadius: 10,
          alignSelf: 'center',
        }}>
        <Text style={{fontSize: 18, color: 'black', fontWeight: '700'}}>
          Name: {item.name}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Age: {item.age}</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: width * 0.5,
            }}>
            <Text>Address: {item.address}</Text>
            <Text>City: {item.city}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={employees}
        renderItem={renderEmployeeDetails}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: 'red',
              width: width * 0.8,
              alignSelf: 'center',
              marginVertical: 10,
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Employee;
