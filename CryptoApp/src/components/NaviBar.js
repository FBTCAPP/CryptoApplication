import React,{useState} from 'react'
import {View,StyleSheet,Text,Dimensions, TouchableWithoutFeedback, Linking} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
const Height=Dimensions.get("window").height;
const Width=Dimensions.get("window").width;

function NaviBar({navigation}) {
    const [toggle,setToggle]=useState(false);
    return (
        <View style={{backgroundColor:"#3f64a6",marginBottom:7}}>
            <View style={{flexDirection:"row",padding:Height/40,paddingLeft:Height/50,paddingRight:Height/50,justifyContent:"space-between",alignItems:"center"}}>
                <FontAwesome5 size={30} name={'coins'} style={{paddingLeft:10}} color="#fbd208"/>
                <Text style={{fontWeight:"bold",fontSize:30,color:"#fff"}}>
                    CRYPTO
                </Text>
                <TouchableWithoutFeedback onPress={() => setToggle(!toggle)}>
                    {
                        toggle ? (
                            <FontAwesome5 size={30}  name={'arrow-circle-up'} color="#fff"/>
                        ) :
                        (<FontAwesome5 size={30}  name={'bars'} color="#fff"/>)
                    }
                </TouchableWithoutFeedback>
            </View>
            {
                toggle ? (
                    <View style={{borderWidth:0.25,borderColor:"#232632",borderTopColor:"#d8d8d8"}}>
                        <Text style={styles.texts} onPress={() => {setToggle(false),navigation.navigate('KriptoList')}}>Ana Sayfa</Text>
                        <Text style={styles.texts} onPress={() => {setToggle(false),navigation.navigate('ExchangeP')}}>Birim Çevirici</Text>
                        <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginBottom:25}}>
                            <FontAwesome5 onPress={() => Linking.openURL('http://www.twitter.com')} size={30} name={'twitter'} color="#d8d8d8" style={{padding:15}}/>
                            <FontAwesome5 onPress={() => Linking.openURL('http://www.facebook.com')} size={30} name={'facebook'} color="#d8d8d8" style={{padding:15}}/>
                            <FontAwesome5 onPress={() => Linking.openURL('http://www.instagram.com')} size={30} name={'instagram'} color="#d8d8d8" style={{padding:15}}/>
                        </View>
                    </View>
                ) :
                (<></>)
            }
        </View>
    )
}
const styles=StyleSheet.create({
    texts:{
        color:"#d8d8d8",
        fontSize:25,
        textAlign:"center",
        padding:15
    }
})

export default NaviBar
