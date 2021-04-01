import React, {Component} from 'react';
import { TouchableOpacity } from 'react-native';
import {Text, View} from 'react-native';
import { DrawerItems } from "react-navigation-drawer";
import firebase from "firebase";

export default class CustomSideBarMenu extends Component{
    render(){
        return(
            <View>
                <View>
                    <DrawerItems {...this.props}>

                    </DrawerItems>
                </View>
                <View> 
                    <TouchableOpacity onPress = {() => {
                        this.props.navigation.navigate('LoginScreen');
                        firebase.auth().signOut();
                    }}><Text> Logout </Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}