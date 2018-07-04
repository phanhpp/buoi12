import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Card, CardSection, Input, Button, Header, NoBorder, LightBorder} from './common';


const Screen2 = () => {
    const { 
        headStyle,
        headText,
        textStyle,
        moneytContainer,
        moneyText,
        splitView,
        imageStyle,
        imageContainer,
        lastView
    } = styles
    return (
        <Card>
            <View style = {headStyle}>
                <Text style = {headText}>Add bill</Text>
                <TouchableOpacity>
                    <Text
                style = {{
                    fontSize: 20,
                    fontWeight: '600',
                    marginLeft: 75,
                    color: '#373839'
                }}
                >SAVE</Text>
                </TouchableOpacity>
                
            </View>
            <LightBorder>
                <Text style = {{
                    fontSize: 35,
                    fontWeight: '800',
                    marginBottom: 8,
                    color: '#373839'
             
                }}>Gas for road trip</Text>
            </LightBorder>

            <LightBorder>
                <View style = {moneytContainer}>
                    <Text style = {{
                        fontSize:35,
                        fontWeight: '800',
                        alignSelf: 'center',
                        color: '#373839',
                        marginLeft: 2
                       
                    }}>$</Text>
                </View>
                <Text style = {moneyText}>43</Text>
            </LightBorder>

            <NoBorder>
               
                <Text style = {
                    { fontSize: 25,
                        fontWeight: '800',
                        marginBottom: 8,
                    marginRight: 35,
                    color: '#373839'
                }}>
                 Paid by
                </Text>
                
                <LightBorder>
                <Text style = {textStyle}>
                 Chris Jackson
                </Text>
                </LightBorder>

            </NoBorder>

             <NoBorder>
                
                <Text style = {{ fontSize: 25,
                        fontWeight: '800',
                        marginBottom: 8,
                    marginRight: 40,
                    color: '#373839'
                }}>
                 for
                </Text>
                
                <LightBorder>
                <Text style = {textStyle}> 
                 you, Jason, Freida
                </Text>
                </LightBorder>

            </NoBorder>
            
            <View style = {lastView}>
                <TouchableOpacity>
                <View style = {splitView}>
                <Text style = {
                    { fontSize: 25,
                        fontWeight: '800',
                        marginVertical: 5,
                        alignSelf: 'center',
                        color: '#373839'
                    }
                }>
                 Split equally :
                </Text>
                </View>
                </TouchableOpacity>
                
                <TouchableOpacity style = {imageContainer}>
                    <Image
                    style = {imageStyle}
                     source = {require('./common/camera.png')}
                     />
                </TouchableOpacity>

            </View>



        </Card>
    )
}

const styles = {
    headStyle : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    headText : {
       fontSize: 25,
       fontWeight: '600',
       color: '#373839'
    },
    textStyle: {
       fontSize: 25,
       fontWeight: '800',
       marginBottom: 8,
       color: '#373839'

    },
    moneytContainer:{
       height : 50,
       width: 50,
       borderRadius: 50,
       borderColor: '#C3C2C3',
       borderWidth: 5,
       marginBottom: 8,
    },
    moneyText: {
       fontSize:40,
       fontWeight: '800',
       marginLeft: 20,
       color: '#373839'
    },
    splitView: {
        height : 55,
        width: 200,
        borderRadius: 27,
        borderColor: '#C3C2C3',
        borderWidth: 5,
        marginBottom: 8,
    },
    imageContainer: {
        height : 60,
       width: 60,
       borderRadius: 60,
       borderColor: '#C3C2C3',
       borderWidth: 5,
       
    },
    imageStyle : {
        height: 35,
        width: 35,
        alignSelf: 'center',
        marginTop:6
    },
    lastView: {
        borderBottomWidth: 1,
     backgroundColor: '#fff',
     justifyContent: 'space-around',//
     flexDirection: 'row',
     alignItems: 'center',
     
     position:'relative',
     backgroundColor: 'white',
     borderColor: 'white',
    
    marginBottom: 10,

    }
}

export default Screen2;