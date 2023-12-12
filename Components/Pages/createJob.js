
import {Text, TextInput, View, Button, StyleSheet} from 'react-native';

//import {Text, TextInput, View, Button} from 'react-native';

import {useState, useEffect, useContext} from 'react';
import { useToast } from "react-native-toast-notifications";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';
import Context from '../Context';

import SelectDropdown from 'react-native-select-dropdown';


export default createJob = () => {
	const [logedin, setLogedin, token, setToken, name, setName, email, setEmail, main, setMain, user, setUser, noTabNav, setNoTabNav] = useContext(Context);
	const [customer, setCustomer] = useState();
	const [phone, setPhone] = useState();
	const [thisEmail, setThisEmail] = useState();
	const [task, setTask] = useState();

	const [dropDownTask, setDropDownTask] = useState([]);
	let countries = ["Egypt", "Canada", "Australia", "Ireland"];

	setNoTabNav(false);

	const addJob = async() => {
	const res = await fetch('https://api.te-amo.co.za/public/api/tasks/add', {

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

	const Focus = async () => {
		let customers = [];
		const res = await fetch('https://api.te-amo.co.za/public/api/customers');
		const data = await res.json();

		//console.log(...data[0].Name);

		data.forEach((task) => {
			customers.push(task.Name);
		});
		setDropDownTask(customers);
		console.log(customers);
	}

	return(
		
		<AlertNotificationRoot>
			<View style={{marginTop: 50, width: 340, alignSelf: 'center'}}>

					<View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
					{/*<SelectDropdown onFocus={() => Focus()}
						data={dropDownTask}
						onSelect={(selectedItem, index) => {
							console.log(selectedItem, index);
						}}
						buttonTextAfterSelection={(selectedItem, index) => {
							// text represented after item is selected
							// if data array is an array of objects then return selectedItem.property to render after item is selected
							return selectedItem
						}}
						rowTextForSelection={(item, index) => {
							// text represented for each item in dropdown
							// if data array is an array of objects then return item.property to represent item in dropdown
							return item
						}}

						defaultButtonText="Select customer"
						defaultButtonTextStyle={styles.placeholderText}
						buttonStyle={styles.dropdownButton}
				        buttonTextStyle={styles.dropdownButtonText}
				        dropdownStyle={styles.dropdownContainer}
					/>*/}
					</View>

					{/*<TextInput style={{backgroundColor: '#fff', padding: 20, borderColor: "#dfdfdf", marginBottom: 15, borderWidth: 1, borderRadius: 5, marginTop: 30,}} value={customer} onChangeText={(e) => setCustomer(e) } placeholder="Enter Customer" placeholderTextColor="grey" />*/}

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

const styles = StyleSheet.create({
	/*dropdownButton: {
    width: 200,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: "#dfdfdf",
    zIndex: 1000,

  },*/
  dropdownButtonText: {
    color: 'white',
    fontSize: 16,
  },
  dropdownContainer: {
    width: 200,
    borderRadius: 8,
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
  },
  placeholderText: {
    color: '#757575', // Customize the placeholder text color
  },

})

			

