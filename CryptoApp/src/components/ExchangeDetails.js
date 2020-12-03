import React,{useEffect,useState} from 'react'
import {View,Picker,Dimensions,TextInput} from 'react-native'
import axios from 'axios'
import {Name} from '../../utils/coinName'
import {Icon} from '../../utils/coinIcon'
import {Color} from '../../utils/coinColor'
import KED from './KriptoExhangeDetails'
let Height=Dimensions.get("window").height;
let Width=Dimensions.get("window").width;
function ExchangeDetails() {
    const [selectedValue, setSelectedValue] = useState("BTC_TL");
    const [kripto,setKripto]=useState({});
    const [value, setValue] = useState("1");
    useEffect(()=>{
        axios.get("https://www.paribu.com/ticker")
        .then( res => setKripto(res.data))
        .catch( err=> console.log(err))
    },[])
    useEffect(()=>{
        const interval = setInterval(() => {
        axios.get("https://www.paribu.com/ticker")
        .then( res => setKripto(res.data))
        .catch( err=> console.log(err))
    }, 15000);
        return () => clearInterval(interval);
    },[])
    if(Object.keys(kripto).length > 0){
    return (
        <View style={{backgroundColor:"#fff"}}>
            <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",margin:10}}>

                    <View style={{borderRadius:8,flexDirection:"row",elevation: 3}}>
                        <TextInput
                                style={{textAlign:"center",fontSize:30,paddingLeft:30,paddingRight:10}}
                                placeholder={String(value)}
                                onChangeText={text => setValue(text)}
                                defaultValue={value}
                        />
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: Width/2}}
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
                        {Object.keys(kripto).map((key,id) => (Name(key) !== "" &&
                                <KED key={id} Type={Name(key)} icon={Icon(key)}
                                    color={Color(key)}
                                    deger={
                                        (((kripto[selectedValue].last)*parseFloat(value))/(kripto[key].last)) > 0.00005 
                                        ? (   String(((kripto[selectedValue].last)*parseFloat(value))/(kripto[key].last)).includes(".") 
                                                ? ((((kripto[selectedValue].last)*parseFloat(value))/(kripto[key].last)) > 1 
                                                    ? String(((kripto[selectedValue].last)*parseFloat(value))/(kripto[key].last)).substring(0,String(((kripto[selectedValue].last)*parseFloat(value))/(kripto[key].last)).indexOf(".")+3) 
                                                    : String(((kripto[selectedValue].last)*parseFloat(value))/(kripto[key].last)).substring(0,String(((kripto[selectedValue].last)*parseFloat(value))/(kripto[key].last)).indexOf(".")+6)
                                                ):(kripto[selectedValue].last)*parseFloat(value)/(kripto[key].last)
                                        ) 
                                        : "< 0.00005"
                                    }
                                />
                            )
                        )
                        }
            </View>
        </View>
    )}
    else{
        return(<></>)
    }
}

export default ExchangeDetails
