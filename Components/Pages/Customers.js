import {View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import JobCard from '../JobCard';
import FilterTabs from '../filterTab';
import SmallCard from '../smallCard';
import { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
//import LoaderKit from 'react-native-loader-kit';
//import { Bubbles, DoubleBounce, Bars, Pulse } from 'react-native-loader';


export default Customer = () => {

	const icon = <FontAwesome5 name={'plus-square'} />;

	const navigation = useNavigation();
	
	const [mainData, setMainData] = useState([]);
  const [mainDataBackUp, setMainDataBackUp] = useState([]);
	const [isLoading, setIsLoading] = useState(true);


  const onChangeText = (value) => {
    setMainData(mainDataBackUp.filter((data) => (data.Name.toLowerCase().includes(value.toLowerCase()) )));
  }

	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.te-amo.co.za/public/api/customers");
        
        if (!response.ok) {
          // Handle non-OK responses (e.g., 404 Not Found)
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          // If the response is JSON, parse it
          const json = await response.json();

          setMainData(json);
          setMainDataBackUp(json);
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

if(isLoading)
	return(

		<View style={{flex: 1, marginTop: 50,}}>
		  <View style={{width: 350, height: 40, backgroundColor: '#dfdfdf', alignSelf: 'center', borderRadius: 3}}>
		  		<Text style={{width: 350, height: 40, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  </View>

		  <Text style={{marginTop: 40, width: 350, height: 40, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>

		  <Text style={{marginTop: 30, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		  <Text style={{marginTop: 20, width: 350, height: 70, backgroundColor:'#dfdfdf', alignSelf: 'center', borderRadius: 3}}></Text>
		</View>

	)
else
	return(
		<>
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{flex: 1, marginTop: 50,}}>
				<TextInput
			        style={styles.input}
			        onChangeText={(e) => onChangeText(e)}
			        placeholder="Search" placeholderTextColor="grey"
			      />
			</View>

			<FilterTabs Title = "Customers" />

			
			{mainData?.map((data) => (
      <SmallCard key={data.id} Name={data.Name} made_at = {data.created_at} id={data.id} />
    ))}

			

			
		</ScrollView>

		<View style={styles.container2}>
        {/* Your main content goes here */}

        {/* Fixed Bottom-Right Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('CreateCustomers')}>{icon} Add Customer</Text>
        </TouchableOpacity>
      </View>

    </>
	)


}

const styles = StyleSheet.create({

	input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#dfdfdf',
    padding: 10,
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: 350,
    borderRadius: 3,
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

})
