import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { Logs } from 'expo';
import pickNpay from './assets/PIK.JO_BIG.png';
import catalog1 from './assets/HYGTPH23560_Hypermarket-Specials.jpg'
import Icon from 'react-native-vector-icons/FontAwesome';
{/*<Icon name="rocket" size={30} color="#900" />;*/}
import Home from './Components/Pages/Home';
import Jobs from './Components/Pages/Jobs';
import Customers from './Components/Pages/Customers';
import CreateJob from './Components/Pages/createJob';
import CreateCustomers from './Components/Pages/CreateCustomers';
import Login from './Components/Pages/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Context from './Components/Context';
import { useState, useContext } from "react";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';
import { ToastProvider } from 'react-native-toast-notifications';
import { useRoute } from '@react-navigation/native';



Logs.enableExpoCliLogging()

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const icon = <FontAwesome5 name={'home'} />;
const icon2 = <FontAwesome5 name={'briefcase'} />;
const icon3 = <FontAwesome5 name={'users'} />;



const StackNav = () => {
    
    return(
      <Stack.Navigator >
          <Stack.Screen name="HomePage" component={Home} options={{headerShown: false}} />
          <Stack.Screen name="CreateJob" component={CreateJob} />
          <Stack.Screen name="CreateCustomers" component={CreateCustomers} options={{tabBarStyle: 'none'}} />
      </Stack.Navigator>
    )
}

const TabNav = (props) => {
    //const route = useRoute();
    //const hide = route.name == "CreateJob";
    const hide = props.routeName === "CreateJob";
    const [logedin, setLogedin, token, setToken, name, setName, email, setEmail, main, setMain, user, setUser, noTabNav, setNoTabNav] = useContext(Context);
    return(

        <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
            <Tab.Screen name="Home" component={StackNav} options={{
                tabBarIcon: ({ focused }) => (
                  <View>
                    <Text style={{alignSelf: 'center', fontWeight:'bold', color: focused ? 'green' : '#999', fontSize:20}}>{icon}</Text>
                    <Text style={{color: focused ? 'green' : '#999'}}>Home</Text>
                  </View>
                ),
              headerShown: false, tabBarStyle: { display: !noTabNav ? "none" : "flex" }  }} />
            <Tab.Screen name="Jobs" component={Jobs} options={{
                tabBarIcon: ({ focused }) => (
                  <View>
                    <Text style={{alignSelf: 'center', fontWeight:'bold', color: focused ? 'green' : '#999', fontSize:20}}>{icon2}</Text>
                    <Text style={{color: focused ? 'green' : '#999'}}>Jobs</Text>
                  </View>
                ),
              }} />
            <Tab.Screen name="Customers" component={Customers} options={{
                tabBarIcon: ({ focused }) => (
                  <View>
                    <Text style={{alignSelf: 'center', fontWeight:'bold', color: focused ? 'green' : '#999', fontSize:20}}>{icon3}</Text>
                    <Text style={{color: focused ? 'green' : '#999'}}>Customers</Text>
                  </View>
                ),
              }} />
        </Tab.Navigator>

    )

}

export default function App() {
  const [logedin, setLogedin] = useState(false);
  const [token, setToken] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [main, setMain] = useState();
  const [user, setUser] = useState();
  const [noTabNav, setNoTabNav] = useState(true);

  const Stack = createStackNavigator();

  const styles = StyleSheet.create({
  
  });

  

  
//const route = useRoute();
//const hide = route.name == "CreateJob";
  return (

    <ToastProvider>
      

      <Context.Provider value={[logedin, setLogedin, token, setToken, name, setName, email, setEmail, main, setMain, user, setUser, noTabNav, setNoTabNav]}  >
        {logedin?
        <>
          <NavigationContainer>
              
            <TabNav />

          </NavigationContainer>
        </>
        :
        <NavigationContainer>
        <Tab.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Login" component={Login} options={{tabBarStyle: {display: 'none'}}} />
        </Tab.Navigator>
        </NavigationContainer>
        }
      </Context.Provider>

      
    </ToastProvider>
  )


    
};
