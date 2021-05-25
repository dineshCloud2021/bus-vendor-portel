import React,{useState} from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ScrollView, } from 'react-native';
import { Ionicons,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function busPendingSettingLayoutScreen({navigation}) {

  return (
    <View style={styles.container}>
            <LinearGradient
            colors={['#fff', '#e6ffe6', '#ccffcc']} style={{width: width,height: height,justifyContent: 'center'}}>
                    <Text style={{...styles.tittle,textDecorationLine:"underline"}}>Bus Name</Text>
                
                    <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate("busLayoutScreen")}>
                        <View style={{...styles.viewContBtn}}>
                            <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>Pricing</Text>
                            <Text style={{textAlign:"center",fontSize:11,fontWeight:"bold",color:"#606060"}}>Cilck to set the <Text style={{color:"#000"}}>PRICE</Text></Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate("upLoadLocationScreen")}>
                        <View style={{...styles.viewContBtn}}>
                            <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>Location</Text>
                            <Text style={{textAlign:"center",fontSize:11,fontWeight:"bold",color:"#606060"}}>Cilck to set the bus <Text style={{color:"#000"}}>ROUTE</Text></Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate("upLoadDriverSceen")}>
                        <View style={{...styles.viewContBtn}}>
                            <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>Driver Details</Text>
                            <Text style={{textAlign:"center",fontSize:11,fontWeight:"bold",color:"#606060"}}>Cilck to set the <Text style={{color:"#000"}}>DRIVER </Text>details</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={{alignSelf:"flex-end",marginRight:30, marginTop: 20}}>
                        <TouchableOpacity style={styles.logBtn}  onPress={() => navigation.navigate("busScreen")}>
                            <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                                Go Live
                            </Text>
                        </TouchableOpacity>
                    </View>
            </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    tittle: {
        fontSize: 28,
        fontWeight:"bold",
        textAlign:"center",
        marginTop:20
    },
    headerView:{
        height:50,
        backgroundColor:"#fff",
        elevation:10
    },
    headTitle:{
        fontSize: 20,
        fontWeight:"bold",
        marginTop:5
    },
    headTitleD:{
        fontSize: 10,
        fontWeight:"bold",
    },
    titUpload: {
        fontSize: 15,
        color: '#8c8c8c',
        fontWeight: "bold",
        alignSelf:"center",
        marginLeft: 8,
        marginTop: 80,
    },
    boxCont:{
        width: width / 2.5,
        height: width / 2.5,
        backgroundColor: "#fff",
        elevation: 3,
        marginTop: 18,
        alignItems: "center",
        justifyContent:"center"
    },
    birth: {
        backgroundColor:"#992600",
        color:"#fff",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        fontWeight:"bold"
    },
    book: {
        backgroundColor:"#a6a6a6",
        color:"#fff",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        fontWeight:"bold",
        margin:2
    },
    logBtn:{
        backgroundColor: "#ff3333",
        width: width / 4,
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        alignSelf:"center",
        elevation: 5
    },
    viewCont: {
        justifyContent:"center",
        backgroundColor: "#66000000",
        width: width/1.1,
        height: 50,
        margin: 15,
        borderRadius:10,
        borderWidth:0.1
    },
    viewContBtn: {
        alignSelf:"center",
        backgroundColor: "#e6ffe6",
        elevation: 2,
        width: width / 1.2,
        margin: 5,
        marginTop: 10,
        height: 75,
        marginLeft: -1.5,
        justifyContent:"space-evenly"
    },
  });
