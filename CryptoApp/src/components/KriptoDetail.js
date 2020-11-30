import React,{useEffect, useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity, Dimensions,Image,} from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
let Height=Dimensions.get("window").height;
let Width=Dimensions.get("window").width;
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('a.db')
function KriptoDetail(props) {
    const [detay,setDetay]=useState(false)
    const [fav,setFav]=useState(false)
    useEffect(()=>{
        db.transaction(tx => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS cryptoList (id INTEGER PRIMARY KEY AUTOINCREMENT,coin TEXT UNIQUE);'
            );
          },
          (_, error) => { console.log(""); },
          (_, success) => { console.log("")
        }
        )
    },[])
    useEffect(()=>{
        db.transaction(
            tx => {
              tx.executeSql(
                'select * from cryptoList WHERE coin = (?)',[props.icon],
                (_, { rows }) =>
                 rows.length !==0 ? setFav(true) : ""
              );
            },
            (t, error) => { console.log("") },
            (_t, _success) => { console.log("") }
          );
    },[])
    return (
        <TouchableOpacity onPress={()=> setDetay(!detay)}>
                <View style={styles.card}>
                    <View style={styles.insideCard}>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <View style={{width:45,alignItems:"center"}}>
                                <FontAwesome5 size={30} name={props.icon} color={props.color}/>
                            </View>
                            <Text style={styles.text}>{props.Type}</Text>
                        </View>

                        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Text style={styles.text}> ₺{props.token.last}  {
                                parseFloat(props.token.percentChange) > 0 ? <Text style={{color:"#008000"}}>▲</Text> : <Text style={{color:"#f00"}}>▼</Text>
                            } </Text>
                            <TouchableOpacity >
                                    {
                                        fav ? <FontAwesome  size={30} name="star" color={"#ffd43b"}/>
                                        : <FontAwesome5 size={25} name="star" color={"#555"}/>
                                    }
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    
                    {
                    detay ? (
                        <View style={styles.detailCard}>
                            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",flex:1}}>
                                    <Text style={{color:"#000",fontWeight:"bold"}}>24S En Düşük:</Text>
                                 <Text style={{color:"#f00",fontWeight:"bold"}}>{props.token.low24hr}</Text>
                            </View>
                            
                            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",flex:1}}>
                                <Text style={{color:"#000",fontWeight:"bold"}}>24S Ortalama:</Text>
                                <Text style={{color:"#ff8300",fontWeight:"bold"}}>{String(props.token.avg24hr).substring(0,String(props.token.avg24hr).indexOf(".")+3)}</Text>
                            </View>

                            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",flex:1}}>
                                <Text style={{color:"#000",fontWeight:"bold"}}>24S En Yüksek:</Text>
                                <Text style={{color:"#008000",fontWeight:"bold"}}>{props.token.high24hr}</Text>
                            </View>
                        </View>
                    )
                    :(<></>)
                }
                </View>
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
