import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Header} from './components/common/Header';
import Content from './components/Content';
import Screen2 from './components/Screen2';
import Lastscreen from './components/LastScreen'


class App extends Component {
    render(){
        return (
            <ScrollView>
                 <Content/> 
                  <Screen2/> 
                 <Lastscreen/>
            </ScrollView>
        )
    }
};


export default App;