import React from 'react'
import {View, StyleSheet, Button} from 'react-native'
import * as SecureStore from 'expo-secure-store';
import { ScrollView } from 'react-native-gesture-handler';

import ProfileHeader from './ProfileHeader'
import SavedPhoto from './SavedPhoto'

export default function Profile() {
    // const token = SecureStore.getItemAsync("token")
    // console.log("stored token", token)
    // const id = SecureStore.getItemAsync("user_id")
    // console.log("stored id", id)
    // const name = SecureStore.getItemAsync("user_name")
    // console.log("stored name", name)

    const displaySavedPhotos = () => {
        const photos = ["photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo","photo"]
        return photos.map( photo => <SavedPhoto/> )
    }

    read = async () => {
        try {
            const credentials = await SecureStore.getItemAsync('userInfo');
            console.log('value of credentials: ', credentials);

            // if (credentials) {
            // const myJson = JSON.parse(credentials);
            // this.setState({
            //     email: myJson.email,
            //     password: myJson.password,
            // });
            // }
        } catch (e) {
            console.log(e);
        }
    };

    const readToken = async () => {
        try {
            const credentials = await SecureStore.getItemAsync('userInfo');
            
            if (credentials) {
                const myJson = JSON.parse(credentials);
                console.log('value of token:', myJson.token);
            
            // this.setState({
            //     email: myJson.email,
            //     password: myJson.password,
            // });
            }
        } catch (e) {
            console.log(e);
        }
    };

    return(
        <View>
            <ScrollView>
                <ProfileHeader></ProfileHeader>
                <View style={styles.photosContainer}>
                    {displaySavedPhotos()}
                </View>
                <Button title="show credentials" onPress={read}/>
                <Button title="show token" onPress={readToken}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    photosContainer: {
        backgroundColor: 'hsl(198, 100%, 42%)', 
        justifyContent: 'center', 
        flex: 1, 
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        marginTop: 5
    }

})