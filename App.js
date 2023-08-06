import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home';
import Details from './screens/Details';
import AddField from './screens/AddField';
import FieldsScreen from './screens/FieldsScreen';
import Testing from './screens/Test';
import BottomSheet from './components/BottomSheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
    <GestureHandlerRootView style={{flex:1}}>
    <StatusBar style='auto'/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{animationTypeForReplace:'push', animation: 'slide_from_right', title: 'AgriTech' }} />
        <Stack.Screen name="Details" component={Details}  options={{animationTypeForReplace:'push', animation: 'slide_from_right', title: 'Ρυθμίσεις' }}  />
        <Stack.Screen name="AddField" component={AddField}  options={{animationTypeForReplace:'push', animation: 'none', title: 'Προσθήκη Χωραφιού' }}  />
        <Stack.Screen name="FieldsScreen" component={FieldsScreen}  options={{animationTypeForReplace:'pop', animation: 'none'}}  />
        <Stack.Screen name="Testing" component={Testing}  options={{animationTypeForReplace:'pop', animation: 'none', headerShown: false}}/>
        <Stack.Screen name="BottomSheet" component={BottomSheet}  options={{animationTypeForReplace:'pop', animation: 'none'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </GestureHandlerRootView>
    </>
  );
}
