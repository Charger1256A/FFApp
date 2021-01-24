import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.getData();
        this.state = {
            teamName: '',
            PIN: '',
        }
    }

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('name')

            if (value !== null){
                this.props.navigation.navigate('homeScreen', {team: value});
                // this.setState({ teamName: value })
            }
        } catch(e) {

        }
    }

    _login(){
        console.log("hi")
        let fetchLogin = async () => {
            let response = await fetch('http://localhost:4000/login/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    teamName: this.state.teamName,
                    pin: this.state.PIN,
                })
            })
            try {
                var data = await response.json()
            }
            catch(err) {
                alert("Incorrect Username or Password");
            }
            
            console.log(data)
            if (data["PIN"] == this.state.PIN){
                try {
                    await AsyncStorage.setItem('name', this.state.teamName)
                }
                catch(err) {
                    console.log(err)
                }
                this.props.navigation.navigate('homeScreen', {team: this.state.teamName})
                return;
            }
            // const AsyncAlert = async () => new Promise((resolve) => {
            //     alert("Incorrect")
            // })
              
            // await AsyncAlert();
        
    }
    fetchLogin();
}
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.label}>
                        <Text style={styles.label}>Team Name:</Text>
                    </View>
                    <TextInput
                        placeholder="team name"
                        onChangeText={(text) => this.setState({ teamName: text })}
                        style={styles.input}
                    />
                </View>
                <View style={styles.row}>
                    <View style={styles.label}>
                        <Text style={styles.label}>PIN:</Text>
                    </View>
                    <TextInput
                        placeholder="PIN"
                        secureTextEntry={true}
                        onChangeText={(text) => this.setState({ PIN: text })}
                        style={styles.input}
                    />
                </View>
                <View style={styles.row}>
                    <Button 
                    title="Login" 
                    onPress={() => {
                        // alert("hi")
                        this._login()
                    }}
                    />
                </View>
            </View>

        )
    }

}
const styles = StyleSheet.create({
    container: {
        margin: 30,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginLeft: 30,
        fontSize: 20,
        borderColor: "#03572C",
        borderBottomWidth: 3,
        marginBottom: 20,
        flex: 0.6
    },
    row: {
        flexDirection: "row",
        paddingVertical: 20
    },
    label: {
        fontSize: 20,
        flex: 0.4
    }
})

export default Login;