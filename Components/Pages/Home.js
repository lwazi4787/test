import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Button, TouchableHighlight, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser  } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import { Logs } from 'expo';
import Icon from 'react-native-vector-icons/FontAwesome';
{/*<Icon name="rocket" size={30} color="#900" />;*/}
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import Context from '../Context';
import {useState, useContext, useEffect} from 'react';
import SmallCard from '../smallCard';

Logs.enableExpoCliLogging()
const icon = <FontAwesome5 name={'plus-square'} />;


const handleButtonPress = () =>
  {
    console.log('We are good');
  }
export default function App({navigation}) {

  const [logedin, setLogedin, token, setToken, name, setName, email, setEmail, main, setMain, user, setUser, noTabNav, setNoTabNav] = useContext(Context);

  const navigation2 = useNavigation();

  const [totalTasks, setTotalTasks] = useState();
  const [activeTasks, setActiveTasks] = useState();
  const [completedTasks, setCompletedTasks] = useState();
  const [mainData, setMainData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingTotal, setIsLoadingTotal] = useState(true);
  

  useEffect(() => {
    setNoTabNav(true);
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.te-amo.co.za/public/api/tasks/total");
        
        if (!response.ok) {
          // Handle non-OK responses (e.g., 404 Not Found)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          // If the response is JSON, parse it
          const json = await response.json();

          //setTotalTasks(response.text());
        } else {
          // Handle non-JSON responses (e.g., HTML)
          const text = await response.text();
          console.log("Non-JSON response:", text);
          // You might want to set an error state or handle this case appropriately
          setTotalTasks(text);
          setIsLoadingTotal(false);
        }
      } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // You might want to handle the error state here if needed
      }
    };

    // Use setTimeout to introduce the delay
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      fetchData();
    }, delay);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);





  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.te-amo.co.za/public/api/tasks/total/status/Active");
        
        if (!response.ok) {
          // Handle non-OK responses (e.g., 404 Not Found)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          // If the response is JSON, parse it
          const json = await response.json();

          //setTotalTasks(response.text());
        } else {
          // Handle non-JSON responses (e.g., HTML)
          const text = await response.text();
          console.log("Non-JSON response:", text);
          // You might want to set an error state or handle this case appropriately
          setActiveTasks(text);
        }
      } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // You might want to handle the error state here if needed
      }
    };

    // Use setTimeout to introduce the delay
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      fetchData();
    }, delay);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.te-amo.co.za/public/api/tasks/total/status/Completed");
        
        if (!response.ok) {
          // Handle non-OK responses (e.g., 404 Not Found)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          // If the response is JSON, parse it
          const json = await response.json();

          //setTotalTasks(response.text());
        } else {
          // Handle non-JSON responses (e.g., HTML)
          const text = await response.text();
          console.log("Non-JSON response:", text);
          // You might want to set an error state or handle this case appropriately
          setCompletedTasks(text);
        }
      } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // You might want to handle the error state here if needed
      }
    };

    // Use setTimeout to introduce the delay
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      fetchData();
    }, delay);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);





  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.te-amo.co.za/public/api/tasks_home");
        
        if (!response.ok) {
          // Handle non-OK responses (e.g., 404 Not Found)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          // If the response is JSON, parse it
          const json = await response.json();

          setMainData(json);
          setIsLoading(false);
        } else {
          // Handle non-JSON responses (e.g., HTML)
          console.log("Non-JSON response:", await response.text());
          // You might want to set an error state or handle this case appropriately
        }
      } catch (error) {
        console.log('There has been a problem with your fetch operation: ' + error.message);
        // You might want to handle the error state here if needed
      }
    };

    // Use setTimeout to introduce the delay
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      fetchData();
    }, delay);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);



  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      
      <View style={{backgroundColor: "green"}}>
        <View style={{alignItems: "center"}}>
          <View style={styles.Header}>
            <View>

              <View style={styles.topBar}>
              </View>
              <View style={styles.topBar}>
              </View>
              <View style={styles.topBar}>
              </View>
            </View>

            <View style={styles.greeting}>
              <Text style={styles.Welcome}>Welcome Back</Text>
              <Text style={styles.Name}>{name}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{alignItems: "center"}} >
        <View style={styles.IntroCard}>
          <View style={styles.IntroCardTop}>
            <Text style={styles.IntroCardTopH}>Job Tracker</Text>
            <Text style={{marginLeft: 'auto', color: 'green', fontSize: 12}}>Last 7 Days</Text>
          </View>

          <View style={styles.IntroCardMidle}>
            <Text style={{fontWeight: 'bold', fontSize: 20,}}>{isLoadingTotal?<Text style={{width: 40, height: 40, backgroundColor:'#dfdfdf', borderRadius: 3}}></Text>:totalTasks}</Text>
            <Text style={{fontSize: 10, color: "#999"}}>Jobs</Text>
          </View>

          <View style={styles.IntroCardBottom}>
            <View>
              <Text style={{fontSize: 12}}>Open: {activeTasks}</Text>
              <Text style={{fontSize: 12}}>Closed: {completedTasks}</Text>
            </View>

            <View style={{marginLeft: 100, textAlign: 'center'}}>
                <Text style={{fontWeight: 'bold', fontSize: 20, alignSelf: 'center'}}>{Math.round((completedTasks/totalTasks)*100)}%</Text>
                <Text style={{fontSize: 12}}>Closed Jobs</Text>
            </View>
          </View>
        </View>
      </View>


      <View style={{alignItems: "center"}} >
        <View style={styles.cardArea}>
          <View style={{marginTop: 20, marginBottom: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 15,}}>Today's Jobs</Text>
            <Text style={{marginTop: 10}}>No jobs for today</Text>
          </View>

          <View style={{marginTop: 20, marginBottom: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 15,}}>Today's Appointments</Text>
            <Text style={{marginTop: 10}}>There are no jobs for today</Text>
          </View>

          <View style={{marginTop: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 15, marginBottom: 10}}>Recent Jobs</Text>

            {!isLoading?(
              mainData?.map((data) => (
                <SmallCard key={data.id} Name={data.Customer} Task_Name ={data.Task_Name} id={data.id} made_at={data.created_at} />
              ))):(
            <>
            <Text style={{marginTop: 30, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
            <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
            <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
            <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
            </>)
            }
          </View>
        </View>
      </View>

      <View>

      </View>

      </ScrollView>

      {/*<View style={styles.jobBtn}>
        <Text>Create a job</Text>
      </View>*/}

      
      <StatusBar style="auto" />

      <View style={styles.container2}>
        {/* Your main content goes here */}

        {/* Fixed Bottom-Right Button */}
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('CreateJob')}>{icon} Create Job</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //width: 350,
    margin: 'auto',
    backgroundColor: '#efefef',
  },
  Header: {
    //flex: 1,
    //backgroundColor: 'green',
    width: 350,
    //textAlign: 'center',
    padding: 5,
    marginTop: 50,
    //borderRadius: 5,
    //marginLeft: 15,
    height: 150,
  },
  topBar: {
    width: 25,
    height: 3,
    backgroundColor: "#dfdfdf",
    marginBottom: 5,
    borderRadius: 5,
  },
  greeting: {
    marginTop: 40,
  },
  Welcome: {
    fontSize: 12,
    color: "#dfdfdf",
  },
  Name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#fff",
  },
  IntroCard: {
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 350,
    borderWidth: 1,
    borderColor: "#dfdfdf",
    fontSize: 1,
    //display: "absolute",
    top: -30
  },
  IntroCardTop: {
    flexDirection: 'row',
  },
  IntroCardTopH: {
    //marginRight: 100,
    fontSize: 12,
  },
  IntroCardMidle: {
    marginTop: 20,
  },
  IntroCardBottom: {
    flexDirection: 'row',
    marginTop: 20,
  },
  NavItem: {
    marginTop: 20,
    backgroundColor: '#143757',
    color: '#fff',
    padding: 50,
    borderRadius: 5,
    marginRight: 6,
    fontWeight: 'bold',
    fontSize: 40
  },
  catalogImg: {
    width: 100,
    height: 100,
  },
  cardArea: {
    //marginTop: 20,
    //marginLeft: 15,
    marginBottom: 50,
    width: 350,
  },
  card: {
    flexDirection: 'row',
    width: 350,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#dfdfdf"
  },
  cardText: {
    marginLeft: 20,
  },
  cardHeading: {
    marginTop: 10,
  },
  cardDate: {
    color: '#666',
    fontSize: 10,
    marginBottom: 15,
  },

  seeMoreButton: {
    marginTop: 5,
    borderRadius: 5,
  },


  container2: {
      flex: 1,
      // Add your main content styles here
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      backgroundColor: 'green',
      padding: 15,
      borderRadius: 5,
      elevation: 3, // Shadow for Android
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  
});
