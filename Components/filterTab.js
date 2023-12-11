import {View, Text, TextInput, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useState, useContext} from 'react';
import Context from './Context';

export default JobCard = ({Title, setMainData, mainData, mainDataBackUp}) => {

  const [logedin, setLogedin, token, setToken, name, setName, email, setEmail, main, setMain, user, setUser, noTabNav, setNoTabNav] = useContext(Context);

  const [buttonPressed, setButtonPressed] = useState(true);

  const navigation = useNavigation();

  const filterJobs = (email) => {

      setMainData(mainDataBackUp.filter((data) => (data.Assigned_to_email === email)));

      setButtonPressed(!buttonPressed);
  }

  const allJobs = () => {
      setMainData(mainDataBackUp);
      setButtonPressed(!buttonPressed);
  }

	return(
		<View style={styles.topTabs}>
			<View style={buttonPressed?styles.allJobs:styles.allJobs2} onPress={() => allJobs()}>
				<Text style={buttonPressed?styles.allJobsText:styles.allJobsText2} onPress={() => allJobs()}>All {Title}</Text>
			</View>

			<View style={buttonPressed?styles.myJobs:styles.myJobs2} onPress={() => filterJobs(email)}>
				<Text onPress={() => filterJobs(email)} style={buttonPressed?styles.allJobsText2:styles.allJobsText}>My {Title}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	topTabs:{
  	 marginTop: 25,
  	 marginBottom: 25,
  	 display: 'fleax',
  	 flexDirection: 'row',
  	 width: 350,
  	 alignSelf: 'center',
  	 justifyContent: 'center',
  	 margin: 'auto',
  	 alignItems:'center',
  	},

  allJobs:{
  	//width: 185,
  	backgroundColor: 'green',
  	textAlighn: 'center',
  	padding: 10,
  	color: "#666",
  	//margin: 'auto',
  	//alignSelf: 'center',
  	alignItems:'center',
  	cursor: 'pointer',
  	flex: .5,
  	borderWidth: 1,
  	borderColor: 'green',
  },
  allJobsText:{
  	color: "#fff",
  },
  allJobsText2:{
  	color: "#000",
  },
  allJobs2:{
  	//width: 185,
  	backgroundColor: '#fff',
  	textAlighn: 'center',
  	padding: 10,
  	color: "#000",
  	//margin: 'auto',
  	//alignSelf: 'center',
  	alignItems:'center',
  	cursor: 'pointer',
  	flex: .5,
  	borderWidth: 1,
  	borderColor: '#999',
  },
  myJobs:{
  	//width: 185,
  	//alignSelf: 'center',
  	alignItems:'center',
  	flex: .5,
  	padding: 10,
  	borderWidth: 1,
    borderColor: "#9f9f9f",
    backgroundColor: '#fff',
  },
  myJobs2:{
  	//width: 185,
  	//alignSelf: 'center',
  	alignItems:'center',
  	flex: .5,
  	padding: 10,
  	borderWidth: 1,
    borderColor: "green",
    backgroundColor: 'green',
    color: "#666",
  }

});