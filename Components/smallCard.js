import {View, Text, TextInput, StyleSheet} from 'react-native';

export default SmallCard = ({Name, made_at, id}) => {

	return(
		<View style={{alignItems: 'center'}}>
		<View style={{flexDirection: 'row', padding: 15, backgroundColor: "#fff", borderRadius: 5, marginBottom: 10, width: 350}}>
	        <Text style={{
	          backgroundColor: "green",
	           padding: 5, color: "#fff",
	           width: 30, height: 30, 
	           borderRadius: 30/2, alignSelf: 'center'}}><Text style={{alignSelf: 'center'}}>{Name.slice(0, 2)}</Text></Text>
	        <View style={{marginLeft: 20}}>
	          <Text style={{fontWeight: 'bold'}}>{Name}</Text>
	          <Text style={{marginTop: 10, color:"#999"}}>Post outer order</Text>
	        </View>
	        <View style={{marginLeft: 'auto', color: "#999"}}>
	          <Text style={{color: "#999", fontSize: 10, alignSelf: 'center'}}>{made_at.slice(0, 10)}</Text>
	        </View>
	    </View>
	    </View>
	)
}

const styles = StyleSheet.create({



});