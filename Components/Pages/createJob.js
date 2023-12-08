import {Text, TextInput, View, Button} from 'react-native';
import {useState, useEffect, useContext} from 'react';
import { useToast } from "react-native-toast-notifications";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import Context from '../Context';

export default createJob = () => {
	const [logedin, setLogedin, token, setToken, name, setName, email, setEmail, main, setMain, user, setUser, noTabNav, setNoTabNav] = useContext(Context);
	const [customer, setCustomer] = useState();
	const [phone, setPhone] = useState();
	const [thisEmail, setThisEmail] = useState();
	const [task, setTask] = useState();
	setNoTabNav(false);

	const addJob = async() => {
	const res = await fetch('http://bb4e-41-193-208-37.ngrok-free.app/api/tasks/add', {

	          method: 'POST',
	          headers: {
	                  'Content-Type': 'application/json',
	                },
	                body: JSON.stringify({'job': task, 'name': customer, 'customer_id': 1, 'main': 'lwazi47872@gmail.com', 'admin': 'lwazi47872@gmail.com'}),

	        });

	        if (!res.ok) {
	          throw new Error(`HTTP error! Status: ${res.status}`);
	          console.log(res.status);
	    	}
	    	else{
	    		Dialog.show({
		          type: ALERT_TYPE.SUCCESS,
		          title: 'Success',
		          textBody: 'Job was created succefully!!!',
		        });
		        setCustomer('');
		        setPhone('');
		        setThisEmail('');
		        setTask('');
	    	}
	}

	return(
		<AlertNotificationRoot>
			<View style={{marginTop: 50, width: 340, alignSelf: 'center'}}>
				<TextInput style={{backgroundColor: '#fff', padding: 20, borderColor: "#dfdfdf", marginBottom: 15, borderWidth: 1, borderRadius: 5,}} value={customer} onChangeText={(e) => setCustomer(e) } placeholder="Enter Customer" placeholderTextColor="grey" />

				<TextInput style={{backgroundColor: '#fff', padding: 20, borderColor: "#dfdfdf", marginBottom: 15, borderWidth: 1, borderRadius: 5,}} value={phone} onChangeText={(e) => setPhone(e) } placeholder="Enter Phone No:" placeholderTextColor="grey" />

				<TextInput style={{backgroundColor: '#fff', padding: 20, borderColor: "#dfdfdf", marginBottom: 15, borderWidth: 1, borderRadius: 5,}} value={thisEmail} onChangeText={(e) => setThisEmail(e) } placeholder="Enter email" placeholderTextColor="grey" />

				<TextInput style={{backgroundColor: '#fff', padding: 20, borderColor: "#dfdfdf", marginBottom: 15, borderWidth: 1, borderRadius: 5,}} value={task} onChangeText={(e) => setTask(e) } placeholder="Enter Task" placeholderTextColor="grey" />

				<Button
				  style={{padding: 20}}
				  onPress={addJob}
				  title="Add Job"
				  color="green"
				  accessibilityLabel="Learn more about this purple button"
				/>
			</View>
		</AlertNotificationRoot>
	)
} 