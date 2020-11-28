import React,{useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity, Dimensions,Image,} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
let Height=Dimensions.get("window").height;
let Width=Dimensions.get("window").width;


function KriptoDetail(props) {
    const [detay,setDetay]=useState(false)
    return (
        <TouchableOpacity onPress={()=> setDetay(!detay)}>
            <>
                <View style={styles.card}>
                    <View style={styles.insideCard}>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{width:45,alignItems:"center"}}>
                                <FontAwesome5 size={30} name={props.icon} color={props.color}/>
                            </View>
                            <Text style={styles.text}>{ props.Type}</Text>
                        </View>
                        
                        <View style={{display:"flex"}}>
                            <Text style={styles.text}> ₺{props.token.last}  {
                                parseFloat(props.token.percentChange) > 0 ? <Text style={{color:"#008000"}}>▲</Text> : <Text style={{color:"#f00"}}>▼</Text>
                            } </Text>
                            
                        </View>
                        
                    </View>
                    {
                    detay ? (
                        <View style={styles.detailCard}>
                            <Text style={{color:"#f00",fontWeight:"bold"}}>{props.token.low24hr}</Text>
                            <Text style={{color:"#ff8300",fontWeight:"bold"}}>{String(props.token.avg24hr).substring(0,String(props.token.avg24hr).indexOf(".")+3)}</Text>
                            <Text style={{color:"#008000",fontWeight:"bold"}}>{props.token.high24hr}</Text>
                        </View>
                    )
                    :(<></>)
                }
                </View>
            </>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    card:{
        borderWidth:1,
        borderColor:"#fff",
        borderBottomColor:"#232632",
        backgroundColor:"#fff",
        paddingBottom:Height/30,
        paddingTop:Height/30
    },
    insideCard:{
        justifyContent:"space-between",
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        marginLeft:Width/50,
        marginRight:Width/50,

    },
    text:{
        fontSize:20,
        color:"#000",
        fontWeight:"500"
    },
    detailCard:{
        justifyContent:"space-between",
        display:"flex",
        alignItems:"center",
        flexDirection:"row",
        marginTop:Height/50,
        marginLeft:Width/50,
        marginRight:Width/50,
        borderWidth:0.5,
        borderTopColor:"#A9A9A9",
        borderColor:"#fff"
    }
})
export default KriptoDetail
