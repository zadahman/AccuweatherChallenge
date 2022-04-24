navigator.geolocation = require('@react-native-community/geolocation');

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, StyleSheet, Text, View } from 'react-native';
import Weather from './components/weather';
import WeatherDetailsScreen from './components/weatherDetails';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Get Current Weather Conditions"
        onPress={() => {
          navigation.navigate('CurrentWeather');
        }}
      />
    </View>
  );
}

function CurrentWeatherScreen({ navigation }) {
  return (
    <Weather navigate={navigation} />
  );
}

export default class App extends React.Component {
  render() {
    const  Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CurrentWeather" component={CurrentWeatherScreen} />
          <Stack.Screen name="WeatherDeets" component={WeatherDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}