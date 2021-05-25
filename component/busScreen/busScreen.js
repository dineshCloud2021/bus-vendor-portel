import React from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, FlatList,SafeAreaView, ScrollView } from 'react-native';
import { Ionicons,AntDesign } from '@expo/vector-icons';
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
    },
    {   
        id: '2',
        busName: 'Bus Name',
        busImage: 'http://cdn.cnn.com/cnnnext/dam/assets/200826183306-adventures-overlandimage-from-ios.jpg',
        busStartingPlace: 'start',
        busEndingPlace: 'end',
    },
    {
        id: '3',
        busName: 'Bus Name',
        busImage: 'https://media.gettyimages.com/photos/bus-picture-id136521748?s=612x612',
        busStartingPlace: 'start',
        busEndingPlace: 'end',
    },
    {
        id: '4',
        busName: 'Bus Name',
        busImage: 'https://www.volvobuses.com/content/dam/volvo/volvo-buses/markets/global/en-en/news/2020/1860x1050-9400-Intercity-coach-BS4-2020.jpg/_jcr_content/renditions/1860x1050-9400-Intercity-coach-BS4-2020-newsintro.jpg',
        busStartingPlace: 'start',
        busEndingPlace: 'end',
      },
  ];

export default function busScreen({navigation}) {

    const Item = ({item}) => (
        <View style={{alignItems:"center"}}>
            <TouchableOpacity onPress={() => navigation.navigate("busSettingLayoutScreen")}>
                <View style={styles.viewCont}>
                    <View style={{flexDirection:"row",justifyContent:"space-between",}}>
                        <View style={{marginLeft:10,justifyContent:"center", width:width/3}}>
                            <Text style={{textAlign:"center",fontWeight:"bold"}}>{item.busName}</Text>  
                            <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                                <Text>{item.busStartingPlace}</Text><Text> - </Text><Text>{item.busEndingPlace}</Text> 
                            </View> 
                        </View>   
                        <View>
                            <Image  source={{ uri:  item.busImage}} style={styles.media} /> 
                        </View>
                    </View>     
                <Text style={{fontSize:10,textAlign:"center",marginTop:5}}>click to view and customise</Text>
                </View>
            </TouchableOpacity>
        </View>
      );

  return (
    <View style={styles.container}>
            <View style={styles.headerView}>
                <LinearGradient
                    colors={['#fff', '#e6ffe6', '#ccffcc']} style={styles.headerView}>
                        <View style={{alignItems:"center",marginTop:10}}>
                            <Text style={styles.headTitle}>Greeny Bus</Text>
                        </View>
                        <View style={{flexDirection:"row",justifyContent:"space-evenly",
                        alignItems:"center",backgroundColor:"#66000000",marginTop:20}}>
                            <View>
                                <Text style={{color:"#000"}}>click to add your new bus</Text>
                            </View>
                            <View style={styles.boxCont}>
                                <TouchableOpacity onPress={() => navigation.navigate("upLoadFirstBusSceen")}>
                                    <Ionicons style={styles.icon} name="md-add-sharp" size={30} color="#000" />
                                </TouchableOpacity>
                            </View>
                        </View>
                </LinearGradient>
            </View>

            <TouchableOpacity activeOpacity={.6} onPress={() => navigation.navigate("yourBusScreenLayout")}>
                <View style={{...styles.viewContBtn}}>
                    <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>Your Pending Bus List</Text>
                    <Text style={{textAlign:"center",fontSize:11,fontWeight:"bold",color:"#606060"}}>Cilck to complete your bus details and <Text style={{color:"#ff3333"}}>Go Live</Text></Text>
                </View>
            </TouchableOpacity>

            <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                        <View style={{...styles.viewContBox}}>
                            <Text style={{textAlign:"center",marginTop: width / 25,fontSize:40,fontWeight:"bold"}}>{DATA.length}</Text>
                            <Text style={{textAlign:"center",marginBottom:15}}>Your <Text style={{color:"#ff3333"}}>Live</Text> bus</Text>
                        </View>
                        <View style={{...styles.viewContBox}}>
                            <Text style={{textAlign:"center",marginTop: width / 27,fontSize:40,fontWeight:"bold"}}>0</Text>
                            <Text style={{textAlign:"center",marginBottom:15}}>Wallet</Text>
                        </View>
                    </View>
                    
            <Text style={styles.subHeadTitle}>Your <Text style={{color:"#ff3333"}}>Live</Text> Bus list's</Text>
            <ScrollView style={{}} 
                    showsVerticalScrollIndicator ={false}
                    showsHorizontalScrollIndicator={false}>
                <FlatList
                data={DATA}
                renderItem={({item})=>  <Item item={item} />}/>
            </ScrollView>
       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffe6',
  },
  headerView:{
      height: height/6,
      backgroundColor:"#66000000",
      elevation:1,
      marginTop: -1,
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
  },
  headTitle:{
      fontSize: 20,
      marginLeft: 15,
      marginTop: 15,
      fontWeight:"bold"
  },
  subHeadTitle: {
    fontSize: 18,
    marginLeft: 12,
    marginTop: 15,
    fontWeight:"bold"
  },
  headIcon:{
      width: 60,
      height: 30,
      marginRight: 15,
      marginTop: 15,
  },
  viewCont: {
      justifyContent:"center",
      backgroundColor: "#e6ffe6",
      elevation: 2,
      width: width/1.1,
      height: height / 8,
      margin: 10
  },
  boxCont:{
      backgroundColor: "#ccffcc",
      elevation: 6,
      padding: 5
  },
  media:{
      alignSelf:"center",
      width: 100,
      height: 60,
      borderRadius: 10,
      marginRight:10
  },
  viewContBtn: {
      alignSelf:"center",
      backgroundColor: "#66000000",
      width: width / 1.1,
      margin: 5,
      marginTop: 10,
      height: 60,
      marginLeft: -1.5,
      justifyContent:"space-evenly",
      borderRadius:10,
      borderWidth:0.1
  },
  viewContBox: {
    alignSelf:"center",
    backgroundColor: "#e6ffe6",
    elevation: 2,
    width: width / 3.5,
    margin: 5,
    height: width / 3.5,
    marginLeft: -1.5,
    justifyContent:"space-between"
},
});
