import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from './screen/SplashScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './screen/LoginScreen';
import RegistrasiScreen from './screen/RegistrasiScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/HomeScreen';
import IconHome from './assets/home.svg';
import GempaTerkini from './screen/GempaTerkini';
import IconGempa from './assets/maps.svg';
import Profil from './assets/profile.svg';
import ProfilScreen from './screen/ProfilScreen';
import LokasiGempa from './screen/LokasiGempa';
import InformasiPenting from './screen/InformasiPenting';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabBottom() {
  return (
    <Tab.Navigator screenOptions={{tabBarStyle: {backgroundColor: '#0E1539'}}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: tabState => {
            return (
              <IconHome
                width={32}
                height={32}
                fill={tabState.focused ? '#3461CB' : '#BDBDBD'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="GempaTerkini"
        component={GempaTerkini}
        options={{
          headerShown: false,
          tabBarIcon: tabState => {
            return (
              <IconGempa
                width={32}
                height={32}
                fill={tabState.focused ? '#3461CB' : '#BDBDBD'}
              />
            );
          },
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="ProfilScreen"
        component={ProfilScreen}
        options={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: tabState => {
            return (
              <Profil
                width={32}
                height={32}
                fill={tabState.focused ? '#3461CB' : '#BDBDBD'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegistrasiScreen"
          component={RegistrasiScreen}
          options={{
            headerStyle: {backgroundColor: '#273B69'},
            headerTitle: 'Account Registration',
            headerTintColor: '#FFFFFF',
          }}
        />

        <Stack.Screen
          name="TabBottom"
          component={TabBottom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LokasiGempa"
          component={LokasiGempa}
          options={{
            headerStyle: {backgroundColor: '#273B69'},
            headerTitle: 'Lokasi Gempa',
            headerTintColor: '#FFFFFF',
          }}
        />
        <Stack.Screen
          name="InformasiPenting"
          component={InformasiPenting}
          options={{
            headerStyle: {backgroundColor: '#273B69'},
            headerTitle: 'Nomor Penting',
            headerTintColor: '#FFFFFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
