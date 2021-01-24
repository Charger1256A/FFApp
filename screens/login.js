import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamName: '',
            PIN: '',
        }
    }
    _login(){
        console.log("hi")
        let fetchLogin = async () => {
            let response = await fetch('https://d7793bbb1208.ngrok.io/login/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    teamName: this.state.teamName,
                    pin: parseInt(this.state.PIN),
                })
            })
            let data = await response.json()
            console.log(data)
            if (data["PIN"] == this.state.PIN){
                this.props.navigation.navigate('homeScreen', {team: this.state.teamName})
                return;
            }
        
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