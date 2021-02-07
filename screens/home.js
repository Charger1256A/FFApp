import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Footer from '../components/footer';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
        this._logout = this._logout.bind(this);
        this._chooseTeams = this._chooseTeams.bind(this);
        this._home = this._home.bind(this);
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.getParam('team')} | Home`,
            headerLeft: null,
        };
    };
    componentDidMount(){
        this._getTeam()
    }

    _chooseTeams(){
        this.props.navigation.navigate('chooseTeamsScreen', {team: this.props.navigation.getParam('team'), teams: this.state.teams})
    }
    _home(){
        this.props.navigation.navigate('homeScreen');
    }

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

    _getTeam() {
        let fetchTeams = async () => {
            let response = await fetch(`https://6bb6debf4fc0.ngrok.io/${this.props.navigation.getParam('team')}/teams`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                  },
            })
            try {
                var data = await response.json();
                delete data[0];
                data = Object.values(data)
                this.setState({ teams: data });
            }
            catch(err) {
                alert(err);
            }
            // console.log(`data: ${this.state.teams}`);
        }
        fetchTeams();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {this.state.teams.map((bot, i) => {
                        return <Text style={styles.botText} key={i}>{i + 1}. {bot.toString()}</Text>
                    })}
                </ScrollView>
                <View style={styles.footer}>
                    <Footer logout={this._logout} chooseTeams={this._chooseTeams} home={this._home} />
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
    },
    botText: {
        fontFamily: 'Cochin',
        fontSize: 30,
    }
})

export default Home;