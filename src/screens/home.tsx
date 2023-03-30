/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Home: React.FC<Props> = ({navigation: {navigate}}) => {
    const user:any = auth().currentUser?auth().currentUser:{};
    console.log("user", user)
    const signout = () =>{
        auth().signOut().then(()=>{
            navigate("Login")
        }).catch(err=>console.log(err.message));
    }
  return (
        // <SafeAreaView>
            <View style={{flex:1, display:'flex', justifyContent:'center', alignItems:'center', padding:30}}>
                <Text style={{fontSize:20, color:"#000", marginBottom:20}}>
                    Hello, {user?.displayName}
                </Text>
                <Text style={{fontSize:20, color:"#000", marginBottom:20}}>
                    {user?.email}
                </Text>
              
                <TouchableOpacity onPress={()=>signout()} style={{padding:20, marginVertical: 10,borderRadius:10, backgroundColor: "#f6880e",shadowOffset:{width:0, height:10},shadowOpacity: 0.3, shadowRadius: 10, width:"100%"}}>
                    <Text style={{color:"#fff", textAlign:"center", fontSize:20}}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        // </SafeAreaView>
    );
};

export default Home;
