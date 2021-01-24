import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from '../components/footer';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this._logout = this._logout.bind(this);
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('team')
        };
    };

    
    _logout = async () => {
        this.props.navigation.navigate('loginScreen');
        try {
            await AsyncStorage.removeItem('name');
            return true;
        }
        catch(exception) {
            return false;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>Body</Text>
                </ScrollView>
                <View style={styles.footer}>
                    <Footer logout={this._logout}/>
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
    footer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerBox: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    footerText: {
        fontSize: 18
    }
})

export default Home;