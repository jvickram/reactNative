// Index.ios.js - place code in here for IOS!!!


// Import a library to help create a componenet
import React from 'react'
import {View, Text, AppRegistry} from 'react-native'
import Header from './src/components/header'
import AlbumList from './src/components/AlbumList'

// Crate a component
const App = () => (
    <View style= {{flex: 1}}>
        <Header headerText = {'Albums!'} />
        <AlbumList />
    </View>
    
    )


// Render it to the device
AppRegistry.registerComponent('albums',() => App)