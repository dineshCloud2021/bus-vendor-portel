import React,{useState} from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ScrollView,FlatList } from 'react-native';
import { Ionicons,MaterialIcons,MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const DATA = [
    {
        id: '1',
        busName: 'Bus Name',
        busImage: 'https://assetsw.bus.com/content/uploads/2020/02/14170850/Charter-Bus-Rentals-Photo.jpg',
        busStartingPlace: 'start',
        busEndingPlace: 'end',
        busDriverName: 'Bus Driver Name',
        busTripDate: 'date'
    },
    {   
        id: '2',
        busName: 'Bus Name',
        busImage: 'http://cdn.cnn.com/cnnnext/dam/assets/200826183306-adventures-overlandimage-from-ios.jpg',
        busStartingPlace: 'start',
        busEndingPlace: 'end',
        busDriverName: 'Bus Driver Name',
        busTripDate: 'date'
    },
    {
        id: '3',
        busName: 'Bus Name',
        busImage: 'https://media.gettyimages.com/photos/bus-picture-id136521748?s=612x612',
        busStartingPlace: 'start',
        busEndingPlace: 'end',
        busDriverName: 'Bus Driver Name',
        busTripDate: 'date'
    }
  ];

export default function busTripLayoutScreen({navigation}) {

    const Item = ({item}) => (
        <View style={{alignItems:"center"}}>
            <TouchableOpacity>
                <View style={{...styles.viewCont}}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                        <View style={{marginLeft:10,justifyContent:"center", width:width/3}}>
                            <Text style={{textAlign:"center",fontWeight:"bold"}}>{item.busName}</Text>  
                            <View style={{flexDirection:"row",justifyContent:"center",margin:5}}>
                                <Text>{item.busStartingPlace}</Text><Text>  -  </Text><Text>{item.busEndingPlace}</Text> 
                            </View> 
                        </View>
                        <View style={{marginRight:10}}>
                            <Text style={{textAlign:"center",fontWeight:"bold"}}>{item.busDriverName}</Text>  
                            <View style={{flexDirection:"row",justifyContent:"space-evenly",margin:5}}>
                                <Text>{item.busTripDate}</Text> 
                            </View> 
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      );

  return (
    <View style={styles.container}>
        <View style={{width: width,height: height,justifyContent:"center",}}>
            <LinearGradient
            colors={['#fff', '#e6ffe6', '#ccffcc']} style={{width: width,height: height,justifyContent: 'center'}}>
                <ScrollView >
                    <Text style={{...styles.tittle,textDecorationLine:"underline"}}>Bus name</Text>
                    
                    <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                        <View style={{...styles.viewContBtn}}>
                            <Text style={{textAlign:"center",marginTop: width / 9,fontSize:40,fontWeight:"bold"}}>{DATA.length}</Text>
                            <Text style={{textAlign:"center",marginBottom:15}}>Total Trip's</Text>
                        </View>
                        <View style={{...styles.viewContBtn}}>
                            <Text style={{textAlign:"center",marginTop: width / 9,fontSize:40,fontWeight:"bold"}}>0</Text>
                            <Text style={{textAlign:"center",marginBottom:15}}>Total Passenger's</Text>
                        </View>
                    </View>
                    <Text style={{textAlign:"center",marginTop:15}}>Total Trip List</Text>
                    <View style={{marginTop:10}}>
                        <FlatList
                            data={DATA}
                            renderItem={({item})=>  <Item item={item} />} 
                        />
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
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
        backgroundColor: "#00e600",
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
        height: 65,
        margin: 10,
        borderRadius:1,
        borderWidth:0.1
    },
    viewContBtn: {
        alignSelf:"center",
        backgroundColor: "#e6ffe6",
        elevation: 2,
        width: width / 2.5,
        margin: 5,
        marginTop: 10,
        height: width / 2.5,
        marginLeft: -1.5,
        justifyContent:"space-between"
    },
  });
