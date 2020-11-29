import React,{useEffect,useState} from 'react'
import {View,Picker,Dimensions, Text,TextInput} from 'react-native'
import KriptoDetail from '../src/components/KriptoDetail';
import axios from 'axios'
import {Name} from '../utils/coinName'
let Height=Dimensions.get("window").height;
let Width=Dimensions.get("window").width;
function Exchange() {
    const [selectedValue, setSelectedValue] = useState("BTC_TL");
    const [kripto,setKripto]=useState({});
    const [value, setValue] = useState("1");
    useEffect(()=>{
        console.log("req")
        axios.get("https://www.paribu.com/ticker")
        .then( res => setKripto(res.data))
        .catch( err=> console.log(err))
    },[])
    useEffect(()=>{
        const interval = setInterval(() => {
        console.log("req")
        axios.get("https://www.paribu.com/ticker")
        .then( res => setKripto(res.data))
        .catch( err=> console.log(err))
    }, 15000);
        return () => clearInterval(interval);
    },[])
    if(Object.keys(kripto).length > 0){
    return (
        <View >
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",margin:10}}>

                    <View style={{borderWidth:1,margin:0,padding:0,borderRadius:10,flexDirection:"row"}}>
                        <TextInput
                                style={{textAlign:"center",fontSize:30,paddingLeft:20,paddingRight:10}}
                                placeholder={String(value)}
                                onChangeText={text => setValue(text)}
                                defaultValue={value}
                        />
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: Width/2 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Bitcoin (BTC)" value="BTC_TL" />
                            <Picker.Item label="Ethereum (ETH)" value="ETH_TL" />
                            <Picker.Item label="Ripple (XRP)" value="XRP_TL" />
                            <Picker.Item label="Cardano (ADA)" value="ADA_TL" />
                            <Picker.Item label="Tether (USDT)" value="USDT_TL" />
                            <Picker.Item label="Tezos (XTZ)" value="XTZ_TL" />
                            <Picker.Item label="Cosmos (ATOM)" value="ATOM_TL" />
                            <Picker.Item label="Tron (TRX)" value="TRX_TL" />
                            <Picker.Item label="Waves (WAVES)" value="WAVES_TL" />
                            <Picker.Item label="Stellar (XLM)" value="XLM_TL" />
                            <Picker.Item label="Bitcoin Cash (BCH)" value="BCH_TL" />
                            <Picker.Item label="Neo (NEO)" value="NEO_TL" />
                            <Picker.Item label="Eos (EOS)" value="EOS_TL" />
                            <Picker.Item label="Dogecoin (DOGE)" value="DOGE_TL" />
                            <Picker.Item label="Chiliz (CHZ)" value="CHZ_TL" />
                        </Picker>
                    </View>

            </View>
            <View>
                {
                    <View style={{alignItems:"flex-end",flex:1,marginLeft:5}}>
                        {Object.keys(kripto).map(key => (Name(key) !== "" &&
                            <Text>{String((kripto[selectedValue].last*parseFloat(value))/kripto[key].last).substring(0,String(kripto[selectedValue].last/kripto[key].last).indexOf(".")+6)}  {Name(key)}</Text>)
                        )
                        }
                    </View>
                }
            </View>
        </View>
    )}
    else{
        return(<></>)
    }
}

export default Exchange
