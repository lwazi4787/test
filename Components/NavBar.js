import {View, Text, TouchableHighlight} from 'react-native';

export default NavBar = () => {

	return(
		<View style={styles.mainviewStyle}>
          <View style={styles.footer}>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText} onPress={() => navigation.navigate('Home')}>A</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText} onPress={() => navigation.navigate('Jobs')}>B</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>C</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.bottomButtons}>
              <Text style={styles.footerText}>D</Text>
          </TouchableHighlight>
          </View>
      </View>
	)

}

const style = StyleSheet.create({

	mainviewStyle: {
  flex: 1,
  flexDirection: 'column',
},
footer: {
  position: 'absolute',
  flex:0.1,
  left: 0,
  right: 0,
  bottom: -10,
  backgroundColor:'#fff',
  color: "#666",
  flexDirection:'row',
  height:50,
  alignItems:'center',
},
bottomButtons: {
  alignItems:'center',
  justifyContent: 'center',
  flex:1,
},
footerText: {
  color:'#999',
  fontWeight:'bold',
  alignItems:'center',
  fontSize:18,
},
textStyle: {
  alignSelf: 'center',
  color: 'orange'
},
active: {
  color: "green",
},
jobBtn: {
  position: 'absolute',
  bottom: -20,
  color: "#000",
  backgroundColor: "#000"
}

})