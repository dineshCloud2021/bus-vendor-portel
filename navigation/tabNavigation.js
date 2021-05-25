import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import busStackNavigator from './busNavigator'
import {View } from 'react-native';
import { Ionicons, FontAwesome5} from '@expo/vector-icons';
import React from 'react';

const Tab = createBottomTabNavigator();

const Tabs = () => {
   
    return(
        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                backgroundColor: '#fff'
            }}}>
            <Tab.Screen name = "bus" component={busStackNavigator}  options={{
                tabBarIcon: ({focused}) => (
                    <View>
                        <FontAwesome5
                        name="bus-alt"
                        size={18}
                        color={focused ? '#00cc00' : '#000'}
                    />
                    </View>
                ),
            }}/>
        </Tab.Navigator>
    );
    
}

export default Tabs;