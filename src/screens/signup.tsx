/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Alert, Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import AppInput from '../components/appinput';
import auth from '@react-native-firebase/auth';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Signup: React.FC<Props> = ({navigation: {navigate}}) => {
  const [values, setValues] = useState({name: '', email: '', password: ''});
  const updateInputval = (val, key) => {
    const value = {...values};
    value[key] = val;
    setValues({...value})
  };

  const singupSubmit = () =>{
        console.log("values", values)
        if(!values.email && !values.password && !values.name){
            Alert.alert("Enter a required fields.");
            return false;
        }

        auth().createUserWithEmailAndPassword(values.email, values.password).then((res:any)=>{
            res.user.updateProfile({
                displayName:values.name,
            })
            console.log("user Created Successfully!");
            setValues({name: '', email: '', password: ''});
            navigate("Login");
        }).catch((error:any) => console.log(error.message))
  }

  return (
    <SafeAreaView>
      <View style={{padding: 20}}>
        <View style={{alignItems: 'center'}}>
          <Image
            resizeMode="contain"
            source={require('../../assets/firebase.png')}
            style={{height: 200}}
          />
          <Text
            style={{
              fontSize: 30,
              color: '#f6880e',
              marginVertical: 10,
              fontWeight: 'bold',
            }}>
            Sign up Here
          </Text>
        </View>
        <View style={{marginVertical: 30}}>
          <AppInput name="name" value={values.name} updateInputval={updateInputval} secure={false} />
          <AppInput name="email"  value={values.email} updateInputval={updateInputval} secure={false}  />
          <AppInput name="password"  value={values.password} updateInputval={updateInputval} secure={true} />
        </View>

        <TouchableOpacity
          onPress={() => singupSubmit()}
          style={{
            padding: 20,
            marginVertical: 10,
            borderRadius: 10,
            backgroundColor: '#f6880e',
            shadowOffset: {width: 0, height: 10},
            shadowOpacity: 0.3,
            shadowRadius: 10,
          }}>
          <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
            Sign up
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigate('Login');
          }}
          style={{padding: 20, marginVertical: 30}}>
          <Text style={{color: '#000', textAlign: 'center', fontSize: 20}}>
            Already have an account
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Signup;
