import React from "react";
import {View } from 'react-native';

const NoBorder = (props) =>{
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
     flexDirection: 'row',
     alignItems: 'center',
     
     position:'relative',
     backgroundColor: 'white',
     borderColor: 'white',
    marginLeft: 30,
    marginBottom: 10,
     
    }
};
export  {NoBorder};