import React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import Footer from '../components/footer';

class ChooseTeam extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: this.props.navigation.getParam('teams'),
            selectedTeams: [],
        }
        this._logout = this._logout.bind(this);
        this._chooseTeams = this._chooseTeams.bind(this);
        this._home = this._home.bind(this);
        this._addTeam = this._addTeam.bind(this);
    }
    static navigationOptions = ({ navigation }) => {
        return {
            title: `${navigation.getParam('team')} | Team Selection`,
            headerLeft: null,
        };
    };
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
    _addTeam(bot){
        var selected = this.state.selectedTeams;
        if (selected.includes(bot)){
            var index = selected.indexOf(bot);
            selected.splice(index, 1);
        } else {
            selected.push(bot);
        }
        this.setState({ selectedTeams: selected});
        console.log(this.state.selectedTeams)
    }
    render(){
        // console.log(this.state.teams);
        return(
            <View style={styles.container}>
                <ScrollView>
                {this.state.teams.map((bot, i) => (
                    this.state.selectedTeams.includes(bot) ? (
                        <TouchableOpacity style={styles.highlightedButton} key={i} onPress={() => this._addTeam(bot)}>
                            <Text style={styles.botText}>{i + 1}: {bot}</Text> 
                        </TouchableOpacity>
                    ):(
                        <TouchableOpacity key={i} onPress={() => this._addTeam(bot)}>
                            <Text style={styles.botText}>{i + 1}: {bot}</Text> 
                        </TouchableOpacity>
                    )

                ))}
                </ScrollView>
                <View style={styles.footer}>
                    <Footer logout={this._logout} chooseTeams={this._chooseTeams} home={this._home}/>
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
        color: 'black'
    },
    highlightedButton:{
        borderWidth: 3,
        borderColor: '#ffff00'
    }
})

export default ChooseTeam