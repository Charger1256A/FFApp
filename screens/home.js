import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';
class Home extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('team')
        };
    };

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text>Body</Text>
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.footerBox}>
                        <Text style={styles.footerText}>Box 1</Text>
                    </View>
                    <View style={styles.footerBox}>
                        <Text style={styles.footerText}>Box 2</Text>
                    </View>
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
        flexDirection: 'row',
        backgroundColor: 'grey'
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