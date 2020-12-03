import React from 'react'
import {ScrollView} from 'react-native'
import NaviBar from '../src/components/NaviBar'
import ExchangeDetails from '../src/components/ExchangeDetails'
function Exchange({navigation}) {
    return (
        <>
            <ScrollView persistentScrollbar={true}>
                <NaviBar navigation={navigation}/>
                <ExchangeDetails/>
            </ScrollView>
        </>
    )
}

export default Exchange
