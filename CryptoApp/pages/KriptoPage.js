import React from 'react'
import {View,Text,ScrollView} from 'react-native'
import NaviBar from '../src/components/NaviBar'
import Kriptolar from '../src/components/Kriptolar'
function KriptoPage({navigation}) {
    return (
        <>
            <ScrollView persistentScrollbar={true}>
                <NaviBar  navigation={navigation}/>
                <Kriptolar/>
            </ScrollView>
        </>
    )
}

export default KriptoPage
