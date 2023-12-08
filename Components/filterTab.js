import {View, Text, TextInput, StyleSheet} from 'react-native';

export default JobCard = ({Title}) => {

	return(
		<View style={styles.topTabs}>
			<View style={styles.allJobs}>
				<Text style={{color: '#fff'}}>All {Title}</Text>
			</View>

			<View style={styles.myJobs}>
				<Text>My {Title}</Text>
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
  myJobs:{
  	//width: 185,
  	//alignSelf: 'center',
  	alignItems:'center',
  	flex: .5,
  	padding: 10,
  	borderWidth: 1,
    borderColor: "#9f9f9f",
    backgroundColor: '#fff',
  }

});