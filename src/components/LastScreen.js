import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card, CardSection, Input, Button, Header, NoBorder, LightBorder, LongLightBorder} from './common';

const LastScreen = () => {
    const {
        imageStyle,
        tinyText,
        smallText,
        headView,
        imageContainer
    } = styles;
   return(
       <Card>
           <TouchableOpacity>
           <Text style = {{ fontSize:20,
        fontWeight: '600',
        color: '#827F80',
        marginBottom: 10,
        marginLeft: 10}}>Back</Text>
           </TouchableOpacity>
           <View style = {headView}>
              <View style = {imageContainer}> 
               <Image
               
               style = {imageStyle}
               source = {require('./common/rabbit.jpg')}
               /> 
               </View>
               <View style= {{flexDirection: 'column', marginLeft: 15}}>
                   <Text style = {{ 
                       fontWeight: '800',
                       color: '#F55A4E',
                       fontSize:30,
                       marginBottom: 5,
                       marginTop: 35
                    }}>Dan Abramov</Text>
                   <Text
                   style = {{
                    fontWeight: '800',
                    color: '#F55A4E',
                    fontSize:20,
                    marginBottom: 10
                   }}
                   >you owe 50$</Text>
               </View>
           </View>
           
          
        <Text style = {{
            fontSize:23,
            fontWeight: '800',
            color: '#373839',
            marginLeft: 15
          }}>Jun 2018</Text>
          
           <LongLightBorder>
           
           <View >
               
               <Text style = {smallText}>Drinks in British Hub</Text>
               <Text style = {tinyText}>Dan paid 20$</Text>
           </View>
             <Text style ={{
                fontSize:35,
                fontWeight: '600',
                color: '#F55A4E',
                fontSize:35,
                marginLeft:70}
             }>20$</Text>
            
           </LongLightBorder>

           <LongLightBorder>
           <View >
               <Text style = {smallText}>Water bottles</Text>
               <Text style = {tinyText}>You paid 2$</Text>
           </View>
             
             <Text style ={{
                 fontSize:35,
                 fontWeight: '600',
                 color: '#4A984C',
                 fontSize:35,
                  marginLeft:160,
                }}>2$ </Text>

           </LongLightBorder>

           <LongLightBorder>
           <View >
               <Text style = {smallText}>Taxi trip</Text>
               <Text style = {tinyText}>Dan paid 60$</Text>
           </View>
             <Text style ={{ fontSize:35,
             fontWeight: '600',
             color: '#F55A4E',
             fontSize:35,
             marginLeft: 175
             }}>9$</Text>
           </LongLightBorder>

           <Text style = {{
            fontSize:23,
            fontWeight: '800',
            color: '#373839',
            marginLeft: 15,
            marginTop: 30
          }}>May 2018</Text>
          
           <LongLightBorder>
           
           <View >
               
               <Text style = {smallText}>Drinks in British Hub</Text>
               <Text style = {tinyText}>Dan paid 20$</Text>
           </View>
             <Text style ={{
                fontSize:35,
                fontWeight: '600',
                color: '#F55A4E',
                fontSize:35,
                marginLeft:70}
             }>30$</Text>
            
           </LongLightBorder>

           <LongLightBorder>
           <View >
               <Text style = {smallText}>Water bottles</Text>
               <Text style = {tinyText}>You paid 2$</Text>
           </View>
             
             <Text style ={{
                 fontSize:35,
                 fontWeight: '600',
                 color: '#4A984C',
                 fontSize:35,
                  marginLeft:160,
                }}>2$ </Text>

           </LongLightBorder>

           <LongLightBorder>
           <View >
               <Text style = {smallText}>Taxi trip</Text>
               <Text style = {tinyText}>Dan paid 60$</Text>
           </View>
             <Text style ={{ fontSize:35,
             fontWeight: '600',
             color: '#F55A4E',
             fontSize:35,
             marginLeft: 175
             }}>9$</Text>
           </LongLightBorder>
       </Card>
   )
}

const styles = {
    imageStyle : {
        backgroundColor: '#F1485B',
        width: 140,
        height:140,
        borderRadius: 70,
        borderColor: 'red',
        borderWidth: 3,
        
        
    },
    imageContainer: {
      marginBottom: 15,
    },
    headView: {
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',//
        flexDirection: 'row',//
        borderColor: '#ABABAB',
        position:'relative',
        backgroundColor: 'white',
       marginBottom: 15,
       marginTop: 10,
        marginHorizontal: 15,
        justifyContent: 'center'
    },
   
    smallText: {
        
        fontWeight: '600',
        color: '#373839',
         fontSize:23,
        marginBottom: 10,
    },
    tinyText: {
        fontSize:20,
        fontWeight: '600',
        color: '#827F80',
        marginBottom: 10,
    }
   
}
export default LastScreen;