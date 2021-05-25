import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import busScreen from '../component/busScreen/busScreen';
import loginScreen from '../component/busScreen/loginScreen';
import registerScreen from '../component/busScreen/registerScreen';
import upLoadFirstBusSceen from '../component/busScreen/upLoadFirstBusSceen';
import upLoadBusSceen from '../component/busScreen/upLoadBusSceen';
import seatCountBusSceen from '../component/busScreen/seatCountBusSceen';
import verificationBusScreen from '../component/busScreen/verificationBusScreen';
import sleeperBusScreen from '../component/busScreen/sleeperBusScreen';
import busLayoutScreen from '../component/busScreen/busLayoutScreen';
import busBookingScreen from '../component/busScreen/busBookingScreen';
import busSettingLayoutScreen from '../component/busScreen/busSettingLayoutScreen';
import upLoadDriverSceen from '../component/busScreen/upLoadDriverSceen';
import busTripLayoutScreen from '../component/busScreen/busTripLayoutScreen';
import busPendingSettingLayoutScreen from '../component/busScreen/busPendingSettingLayoutScreen';
import yourBusScreenLayout from '../component/busScreen/yourBusScreenLayout';
import liveMapBusScreen from '../component/busScreen/liveMapBusScreen';
import upLoadLocationScreen from '../component/busScreen/upLoadLocationScreen';

const Stack = createStackNavigator();

const screenOptionStyle ={
    headerShown : false
}

const busStackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
                name="loginScreen"
                component={loginScreen}
            />
            <Stack.Screen 
                name="registerScreen"
                component={registerScreen}
            />
             <Stack.Screen 
            name="busScreen"
            component={busScreen}
            />
            <Stack.Screen 
            name="upLoadFirstBusSceen"
            component={upLoadFirstBusSceen}
            />
            <Stack.Screen 
            name="upLoadBusSceen"
            component={upLoadBusSceen}
            />
            <Stack.Screen 
            name="seatCountBusSceen"
            component={seatCountBusSceen}
            />
            <Stack.Screen 
            name="sleeperBusScreen"
            component={sleeperBusScreen}
            />
             <Stack.Screen 
            name="verificationBusScreen"
            component={verificationBusScreen}
            />
            <Stack.Screen 
            name="busLayoutScreen"
            component={busLayoutScreen}
            />
            <Stack.Screen 
            name="busSettingLayoutScreen"
            component={busSettingLayoutScreen}
            />
            <Stack.Screen 
            name="busBookingScreen"
            component={busBookingScreen}
            />
            <Stack.Screen 
            name="upLoadDriverSceen"
            component={upLoadDriverSceen}
            />
            <Stack.Screen 
            name="busTripLayoutScreen"
            component={busTripLayoutScreen}
            />
            <Stack.Screen 
            name="busPendingSettingLayoutScreen"
            component={busPendingSettingLayoutScreen}
            />
            <Stack.Screen 
            name="yourBusScreenLayout"
            component={yourBusScreenLayout}
            />
            <Stack.Screen 
            name="liveMapBusScreen"
            component={liveMapBusScreen}
            />
            <Stack.Screen 
            name="upLoadLocationScreen"
            component={upLoadLocationScreen}
            />
        </Stack.Navigator>
    )
}
export default busStackNavigator;