import React from "react";
import {View } from 'react-native';

const CardSection = (props) =>{
    return (
        <View style = {styles.containerStyle} >
        
        {props.children};
        </View>
    );
};

const styles = {
    containerStyle:{
    
     borderBottomWidth: 1,
     backgroundColor: '#fff',
     justifyContent: 'flex-start',//
     flexDirection: 'row',//
     borderColor: '#000',
     borderBottomWidth: 2,
     position:'relative',
     backgroundColor: 'white',
     marginVertical: 30,
     marginHorizontal: 30,
    }
};
export  {CardSection};