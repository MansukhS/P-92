import React,{Component} from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import MyHeader from './Component/MyHeader';


export default class AlarmScreen extends Component{
    render(){
        return(
            <View>
             <MyHeader title = 'Alarm Screen'/>
           
            
            <View>
            <TouchableOpacity>
                <Text>
                Add Alarm
                </Text>
            </TouchableOpacity>
                   
            <TouchableOpacity>
                <Text>
                Delete Alarm
                </Text>
            </TouchableOpacity>
            </View>
            </View>
        )

    }
}

