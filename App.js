/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Button,
    View
} from 'react-native';

import clear from 'react-native-clear-app-cache';

export default class App extends Component {

    constructor () {
        super();
        this.state = {
            cacheSize:"",
            unit:"",
        };
        clear.getAppCacheSize((value,unit)=>{
            this.setState({
                cacheSize:value, //缓存大小
                unit:unit  //缓存单位
            })
        });
    }

    handlerClearAppCache = () => {
        clear.clearAppCache(() => {
            console.log("清除成功");
            clear.getAppCacheSize((value, unit) => {
                this.setState({
                    cacheSize: value, //缓存大小
                    unit: unit  //缓存单位
                })
            });
        });
    };

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20,textAlign: 'center',margin: 10}}>
                    缓存大小{this.state.cacheSize}{this.state.unit}
                </Text>
                <Button title="清除缓存" onPress={this.handlerClearAppCache.bind(this)}/>
            </View>
        );
    }
}
