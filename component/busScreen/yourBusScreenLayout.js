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
      {
        id: '5',
        busName: 'Bus Name',
        busImage: 'https://www.volvobuses.com/content/dam/volvo/volvo-buses/markets/global/en-en/news/2020/1860x1050-9400-Intercity-coach-BS4-2020.jpg/_jcr_content/renditions/1860x1050-9400-Intercity-coach-BS4-2020-newsintro.jpg',
        busStartingPlace: 'start',
        busEndingPlace: 'end',
      },
      {
        id: '6',
        busName: 'Bus Name',
        busImage: 'https://www.volvobuses.com/content/dam/volvo/volvo-buses/markets/global/en-en/news/2020/1860x1050-9400-Intercity-coach-BS4-2020.jpg/_jcr_content/renditions/1860x1050-9400-Intercity-coach-BS4-2020-newsintro.jpg',
        busStartingPlace: 'start',
        busEndingPlace: 'end',
      },
      {
        id: '7',
        busName: 'Bus Name',
        busImage: 'https://www.volvobuses.com/content/dam/volvo/volvo-buses/markets/global/en-en/news/2020/1860x1050-9400-Intercity-coach-BS4-2020.jpg/_jcr_content/renditions/1860x1050-9400-Intercity-coach-BS4-2020-newsintro.jpg',
        busStartingPlace: 'start',
        busEndingPlace: 'end',
      },
      {
        id: '8',
        busName: 'Bus Name',
        busImage: 'https://www.volvobuses.com/content/dam/volvo/volvo-buses/markets/global/en-en/news/2020/1860x1050-9400-Intercity-coach-BS4-2020.jpg/_jcr_content/renditions/1860x1050-9400-Intercity-coach-BS4-2020-newsintro.jpg',
        busStartingPlace: 'start',
        busEndingPlace: 'end',
      },
  ];

export default function yourBusScreenLayout({navigation}) {

    const Item = ({item}) => (
        <View style={{alignItems:"center",paddingBottom: item.id == '8' ? width/4 : 0}}>
            <TouchableOpacity onPress={() => navigation.navigate("busPendingSettingLayoutScreen")}>
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
        <View style={{width:width,height:height}}>
            <LinearGradient
                        colors={['#fff', '#e6ffe6', '#ccffcc']} >
                <Text style={styles.subHeadTitle}>Your <Text style={{color:"#00e600"}}>Bus</Text> list's</Text>
                    <FlatList
                    data={DATA}
                    renderItem={({item})=>  <Item item={item} />}/>
            </LinearGradient>
        </View>
        
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
      backgroundColor: "#e6ffe6",
      elevation: 2,
      width: width / 1.1,
      margin: 5,
      marginTop: 10,
      height: 75,
      marginLeft: -1.5,
      justifyContent:"space-evenly"
  },
});
