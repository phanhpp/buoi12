import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Card, CardSection, Input, Button, Header, NoBorder} from './common';


const Content =() => {
   const {
       headContainer,
       headText,
       touchContainer,
       touchStyle1,
       touchStyle2,
       touchNumber,
       touchText,
       imageStyle,
       imageText,
       
    } = styles
    
        return (
            <Card>
                <View style = {headContainer}>
                    <Text style = {headText}>Money split</Text>

                </View>
                <View style = {touchContainer}>
                    <View style = {touchStyle1}>
                        <Text style = {touchText}>YOU OWE</Text>
                        <Text style = {touchNumber}>80$</Text>
                    </View>
                
                    <View style = {touchStyle2}>
                        <Text style = {touchText}>OWE YOU</Text>
                        <Text style = {touchNumber}>230$</Text>
                    </View>
                </View>

                <CardSection>
                    <Text 
                    style = {{
                        fontSize: 25, 
                        fontWeight: '600',
                        marginBottom: 5,
                        color: '#373839'
                        }}>People you owe</Text>
                </CardSection>

                  
                <NoBorder>
                   <Image
                   
                    style = {imageStyle}
                    source ={require('./common/shin1.jpg')}
                    />
                    <Text style = {imageText}>John Oliver</Text>
                    <Text style = {{
                            
                            fontSize: 25,
                            fontWeight: '600',
                            color: '#F55A4E',
                            marginLeft: 80

                         
                      }}> 42$</Text>
                </NoBorder>
                      
                <NoBorder>
                 <Image
                 style = {imageStyle}
                 source ={require('./common/rabbit.jpg')}
                 />
                <Text style = {imageText}>Alex Martinez</Text>
                <Text style = {{
                            
                            fontSize: 25,
                            fontWeight: '600',
                            color: '#F55A4E',
                            marginLeft: 60 
                      }}>38$ </Text>
                </NoBorder>
                  
                  
                <CardSection>
                    <Text 
                    style = {{
                        fontSize: 25, 
                        fontWeight: '600',
                        marginBottom: 5,
                        color: '#373839'
                        }}>People who owe you</Text>
                 </CardSection>

                 
                      <NoBorder>   
                        <Image
                             style = {imageStyle}
                             source = {require('./common/molang.jpg')}
                        /> 
                          <Text style = {imageText}>Chris Porter</Text>
                          <Text 
                          style = {{
                                fontSize: 25,
                                fontWeight: '600',
                                color: '#4A984C',
                                marginLeft: 65
                          }}
                          >230$</Text>
                      </NoBorder>

                      
                      
                  


                

            </Card>


        )
    
}

const styles = {
    headContainer:{
      
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 15,

    },
    headText:{
     fontSize:35,
     fontWeight: '700',
     color: '#4C4D4E'
    },

    touchContainer: {
     
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginHorizontal: 20,
      marginVertical: 10
      

    },
    touchStyle1: {
        backgroundColor: '#F1485B',
        width: 145,
        height:145,
        borderRadius: 145,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 3,
        shadowOpacity: 0.1,
        shadowColor: '#000',
       
    },
    touchStyle2: {
        backgroundColor: '#4A984C',
        width: 145,
        height:145,
        borderRadius: 145,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {width: 3, height: 3},
        shadowRadius: 3,
        shadowOpacity: 0.1,
        shadowColor: '#000',
       
        
    },
    touchText: {
      color: '#EAECEF',
      fontSize: 20,
      alignSelf: 'center',
      marginBottom: 5,
      fontWeight: '600'
      

    },
    touchNumber:{
     color: 'white',
     fontSize: 28,
     fontWeight: '600',
     
     alignItems: 'center',
    },

    imageStyle : {
        height:50,
        width: 50,
        borderRadius: 25,
        
    },
    imageText: {
        fontSize:23,
        fontWeight: '600',
       color: '#373839',
        marginLeft: 15,
        marginBottom: 10,
    },
    
}

export default Content;