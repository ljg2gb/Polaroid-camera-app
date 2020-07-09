import React, { Component } from 'react';
import {View, Text, StyleSheet} from "react-native";
import * as SecureStore from 'expo-secure-store';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function ProfileHeader() {

    handleLogout = () => {
        this.logout()
        this.props.navigation.navigate('Viewfinder')
    }

    handleRetake = () => {
        const { userInfo } = this.state
        this.props.navigation.navigate('Viewfinder', { userInfo })
    }

    logout = async () => {
        try {
            await SecureStore.deleteItemAsync('userInfo');
        } catch (e) {
            console.log(e);
        }
    }

    return(
        <View style={styles.welcomeContainer}>
            <Text style={styles.welcome}>{this.props.name}</Text>

            <TouchableOpacity onPress={this.handleLogout}>
                <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handleRetake}>
                <Text style={styles.logout}>Retake Photo</Text>
            </TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    welcomeContainer: {
        backgroundColor: '#282C34',
        paddingVertical: 20,
        paddingHorizontal: 15,
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    welcome: {
        fontFamily: 'HelveticaNeue',
        fontSize: 30,
        color: 'white'

    },

    logout: {
        fontFamily: 'Courier',
        color: '#F7B227',
        textDecorationLine: 'underline'

    }
})