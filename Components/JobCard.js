import {View, Text, TextInput, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default JobCard = ({Customer, Task_Name, id, created_at}) => {
	const icon = <FontAwesome5 name={'user'} />;
	const icon2 = <FontAwesome5 name={'map-marker'} />;
	const icon3 = <FontAwesome5 name={'briefcase'} />;
	const icon4 = <FontAwesome5 name={'wrench'} />;

	return(
		<View style={{alignItems: 'center', marginBottom: 15, backgroundColor: '#fff'}}>
				<View style={{width: 350, borderWidth: 1, borderColor: "#dfdfdf", padding: 20, borderRadius: 5, fontSize: 1,}}>
					<View style={{flexDirection: 'row', marginBottom: 20}}>
						<Text style={{fontWeight: 'bold'}}>Job Created</Text>
						
						<Text style={{marginLeft: 'auto', alignItems: 'flex-end', color: '#999', fontSize: 11}}>{created_at.slice(0, 10)}</Text>
						
					</View>

					<View>
						<View style={{marginBottom: 30}}>
							<View style={{flexDirection: 'row'}}>
								<Text style={{marginRight: 5}}>{icon}</Text>
								<Text style={{color: '#999'}}> Contact</Text>
							</View>
							<Text style={{fontWeight: 'bold'}}>{Customer}</Text>
						</View>

						<View style={{marginBottom: 30}}>
							<View style={{flexDirection: 'row'}}>
								<Text style={{marginRight: 5}}>{icon2}</Text>
								<Text style={{color: '#999'}}>Location</Text>
							</View>
							<Text style={{color: '#999'}}>No location added</Text>
						</View>

						<View style={{marginBottom: 30}}>
							<View style={{flexDirection: 'row'}}>
								<Text style={{marginRight: 5}}>{icon3}</Text>
								<Text style={{color: '#999'}}>Services</Text>
							</View>
							<Text>{Task_Name}</Text>
						</View>

						<View style={{flexDirection: 'row'}}>
							<Text style={{marginRight: 5}}>{icon4}</Text>
							<Text>JB{id}</Text>
						</View>
					</View>
				</View>
			</View>
	)
}