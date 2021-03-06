import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <View style={styles.footer}>
                <View style={styles.footerBox}>
                <Button 
                    color = "black"
                    title="Choose Teams"
                    onPress={() => {
                        this.props.chooseTeams()
                    }}
                    />
                </View>
                <View style={styles.footerBox}>
                    <Button 
                        color = "black"
                        title="Home"
                        onPress={() => {
                            this.props.home()
                        }}
                        />
                </View>
                <View style={styles.footerBox}>
                    <Button 
                    color = "black"
                    title="Logout"
                    onPress={() => {
                        this.props.logout()
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
    footer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey'
    },
    footerBox: {
        flex: 1/3,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: 'black'
        
    },
    footerText: {
        fontSize: 18,
    }
})

export default Footer;