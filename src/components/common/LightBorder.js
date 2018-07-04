import React from "react";
import {View } from 'react-native';

const LightBorder = (props) =>{
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
     borderColor: '#ABABAB',
     position:'relative',
     backgroundColor: 'white',
     marginVertical: 15,
     marginHorizontal: 30,
    }
};
export  {LightBorder};
