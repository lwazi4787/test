import {Text, TextInput, View, Button} from 'react-native';
import {useState, useEffect} from 'react';
import { useToast } from "react-native-toast-notifications";
import { ALERT_TYPE, Dialog, AlertNotificationRoot, Toast } from 'react-native-alert-notification';

export default createJob = () => {

  const [thisName, setThisName] = useState();
  const [last, setLast] = useState();
  const [thisEmail, setThisEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();


  const addJob = async() => {
  const res = await fetch('https://api.te-amo.co.za/public/api/customers/add', {

            method: 'POST',
            headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({'company': 'task', 'name': thisName, 'last': last, 'phone': phone, 'email': thisEmail, 'address': address}),

          });

          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
            console.log(res.status);
        }
        else{

            Dialog.show({
                  type: ALERT_TYPE.SUCCESS,
                  title: 'Success',
                  textBody: 'Customer was added succefully!!!',
                });

            setThisName('');
            setLast('');
            setThisEmail('');
            setPhone('');
            setAddress('');
        }
  }

  return(
    <AlertNotificationRoot>
      <View style={{marginTop: 50, width: 340, alignSelf: 'center'}}>
        <TextInput style={{backgroundColor: '#fff', padding: 20, borderColor: "#dfdfdf", marginBottom: 15, borderWidth: 1, borderRadius: 5,}} value={thisName} onChangeText={(e) => setThisName(e) } placeholder="Enter Name" placeholderTextColor="grey" />

        <TextInput style={{backgroundColor: '#fff', padding: 20, borderColor: "#dfdfdf", marginBottom: 15, borderWidth: 1, borderRadius: 5,}} value={last} onChangeText={(e) => setLast(e) } placeholder="Enter Surname" placeholderTextColor="grey" />

        <TextInput style={{backgroundColor: '#fff', padding: 20, borderColor: "#dfdfdf", marginBottom: 15, borderWidth: 1, borderRadius: 5,}} value={phone} onChangeText={(e) => setPhone(e) } placeholder="Enter Phone" placeholderTextColor="grey" />

        <TextInput style={{backgroundColor: '#fff', padding: 20, borderColor: "#dfdfdf", marginBottom: 15, borderWidth: 1, borderRadius: 5,}} value={thisEmail} onChangeText={(e) => setThisEmail(e) } placeholder="Enter Email" placeholderTextColor="grey" />

        <TextInput style={{backgroundColor: '#fff', padding: 20, borderColor: "#dfdfdf", marginBottom: 15, borderWidth: 1, borderRadius: 5,}} value={address} onChangeText={(e) => setAddress(e) } placeholder="Enter Location" placeholderTextColor="grey" />

        <Button
          style={{padding: 20}}
          onPress={addJob}
          title="Add Customer"
          color="green"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    </AlertNotificationRoot>
  )
} 
