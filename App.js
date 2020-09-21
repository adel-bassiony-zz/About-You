import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import WorkDetails from './components/WorkDetails/WorkDetails';
import Avatar from './components/Avatar/Avatar';
import EmailVerification from './components/EmailVerification/EmailVerification';
import Success from './components/Success/Success';
import ProgressBar from './components/ProgressBar/ProgressBar';

const Stack = createStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <ProgressBar />
            <NavigationContainer>  
                <Stack.Navigator initialRouteName="PersonalDetails">
                <Stack.Screen name="PersonalDetails" component={PersonalDetails} options={{ headerShown: false }} />
                <Stack.Screen name="WorkDetails" component={WorkDetails} options={{ headerShown: false }} />
                <Stack.Screen name="Avatar" component={Avatar} options={{ headerShown: false }} />
                <Stack.Screen name="EmailVerification" component={EmailVerification} options={{ headerShown: false }} />
                <Stack.Screen name="Success" component={Success} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}
