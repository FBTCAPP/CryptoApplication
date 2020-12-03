import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity, Dimensions} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
let Height=Dimensions.get("window").height;
let Width=Dimensions.get("window").width;


function KriptoDetail(props) {
    return (
        <TouchableOpacity>
                <View style={styles.card}>
                    <View style={styles.insideCard}>
                        <View style={{display:"flex"}}>
                                <Text style={styles.text}> {props.deger} </Text>
                        </View>
                        <View style={{flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-end",flexWrap:"wrap"}}>
                            <Text style={styles.text}>{props.Type}</Text>
                            <View style={{width:45,alignItems:"center"}}>
                                <FontAwesome5 size={30} name={props.icon} color={props.color}/>
                            </View>
                        </View>
                    </View>
                </View>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    card:{
        backgroundColor:"#fff",
        paddingBottom:Height/50,
        paddingTop:Height/50,
        borderRadius:10,
        margin:13,
        marginTop:7,
        marginBottom:7,
        elevation: 5
    },
    insideCard:{
        justifyContent:"space-between",
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        marginLeft:Width/50,
        marginRight:Width/50,
        paddingRight:Width/40,
        paddingLeft:Width/40,
        flexWrap:"wrap"
    },
    text:{
        fontSize:18,
        color:"#000",
        fontWeight:"500"
    },
    detailCard:{
        justifyContent:"space-between",
        display:"flex",
        flexDirection:"column",
        marginTop:Height/50,
        marginLeft:Width/50,
        marginRight:Width/50,
        borderWidth:0.5,
        borderTopColor:"#A9A9A9",
        borderColor:"#fff",
        paddingTop:Height/50
    }
})
export default KriptoDetail
