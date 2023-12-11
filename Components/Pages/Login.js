import {Text, View, TextInput, Button} from 'react-native';
import {useState, useContext} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import Context from '../Context';

export default Login = () =>
{
	const [logedin, setLogedin, token, setToken, name, setName, email, setEmail, main, setMain, user, setUser, noTabNav, setNoTabNav] = useContext(Context);

	const [thisEmail, thisSetEmail] = useState();
	const [password, setPasword] = useState();
	const [occupationField, setOccupationField] = useState('ceo');

	const login = async () => {
		console.log('we Good');
		console.log(thisEmail);
		console.log(password);

		const res = await fetch('https://api.te-amo.co.za/public/api/login', {

          method: 'POST',
          headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({'email': thisEmail, 'password': password, 'occupation': "office"}),

        });

        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
          console.log(res.status);
        }

        const data = await res.json();

        if(data.message === "bad creds")
        {
        	console.log(data.message);
        }
        else{
        	setLogedin(true);
        	console.log('We good again...');
        	setToken(data.token);
        	setName(data.user['name']);
        	setEmail(data.user['email']);
        	setMain(data.user['main']);
        	setUser(occupationField.value);
        	//localStorage.setItem("logedIn", "true");
			
        }
	}
	const countries = ["Egypt", "Canada", "Australia", "Ireland"]
	return(

		<View style={{justifyContent: 'center', flex: 1}}>
		<View style={{width: 320, alignSelf:'center', justifyContent: 'center'}}>
			<Text style={{fontWeight: 'bold', fontSize: 20, color: 'green', alignSelf: "center", marginBottom: 10}}>Login</Text>

			<RNPickerSelect
            onValueChange={(value) => console.log(value)}
            items={[
                { label: 'Football', value: 'office' },
                { label: 'Baseball', value: 'baseball' },
                { label: 'Hockey', value: 'hockey' },
	            ]}
	        />

			<TextInput style={{backgroundColor: '#fff', padding: 10, borderColor: "#dfdfdf", marginBottom: 5, borderWidth: 1, borderRadius: 5,}} onChangeText={(e) => thisSetEmail(e) } value={thisEmail} placeholder="Enter email" placeholderTextColor="grey" />
			<TextInput style={{backgroundColor: '#fff', padding: 10, borderColor: "#dfdfdf", marginBottom: 25, borderWidth: 1, borderRadius: 5}} onChangeText={(e) => setPasword(e) } value={password} placeholder="Enter password" placeholderTextColor="grey" />

			<Button
			  onPress={login}
			  title="Login"
			  color="green"
			  accessibilityLabel="Learn more about this purple button"
			/>

		</View>
		</View>

		)
}
