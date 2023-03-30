/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {Alert, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import AppInput from '../components/appinput';
import auth from '@react-native-firebase/auth';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Login: React.FC<Props> = ({navigation: {navigate}}) => {
    const [values, setValues] = useState({email: '', password: ''});
    const updateInputval = (val:any, key:any) => {
      const value = {...values};
      value[key] = val;
      setValues({...value});
    };

    const loginSubmit = () =>{
        if(!values.email && !values.password){
            Alert.alert("Enter a required fields.");
            return false;
        }
        auth().signInWithEmailAndPassword(values.email, values.password).then((res:any)=>{
            console.log(res);
            setValues({email: '', password: ''});
            navigate("Home");
        }).catch((error)=>console.log(error.message))
    }
  return (
        <SafeAreaView>
            <View style={{padding: 20}}>
                <View style={{alignItems:'center'}}>
                    <Image resizeMode='contain' source={require('../../assets/firebase.png')} style={{height:220}} />
                    <Text style={{fontSize:30, color:'#f6880e', marginVertical:10, fontWeight:'bold'}}>Login Here</Text>
                </View>
                <View style={{marginVertical:30}}>
                    <AppInput name="email"  value={values.email} updateInputval={updateInputval} secure={false}  />
                    <AppInput name="password"  value={values.password} updateInputval={updateInputval} secure={true}  />
                </View>

                <TouchableOpacity onPress={()=>loginSubmit()} style={{padding:20, marginVertical: 10,borderRadius:10, backgroundColor: "#f6880e",shadowOffset:{width:0, height:10},shadowOpacity: 0.3, shadowRadius: 10, }}>
                    <Text style={{color:"#fff", textAlign:"center", fontSize:20}}>Sign in</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{ navigate("Signup")}} style={{padding:20, marginVertical:30}}>
                    <Text style={{color:"#000", textAlign:"center", fontSize:20}}>Create new account</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Login;
