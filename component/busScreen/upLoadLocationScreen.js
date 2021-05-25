import React, { useState, useEffect,useRef }  from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,Picker, Image } from 'react-native';
import { Ionicons,Foundation,AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import MapView,{Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function upLoadLocationScreen({navigation}) {

    const [PickerValue, setState] = useState('')

    const [start, setBusNum] = useState('');
    const [end, setBook] = useState('');

    const location = [
        {
          latitude: 11.1085,    // initial location latitude
          longitude: 77.3411,  // initial location longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
        {
          latitude: 13.0827,    // initial location latitude
          longitude: 80.2707,  // initial location longitude 
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }
    ]

  return (
    <View style={styles.container}>

        <LinearGradient
        colors={['#fff', '#e6ffe6','#ccffcc']} style={{width: width,height: height,alignItems: 'center',justifyContent: 'center'}}>
      
            <View>
                <Text style={styles.tittle}>Location Details</Text>
                <Text style={styles.titDes}>Please enter pickup and droup location...</Text>
                <View>
                    <View style={{...styles.viewContInput,elevation: start <=""? 0.6 :5}}>
                        <Foundation style={{marginTop:5.5,paddingLeft:8}} name="clipboard-pencil" size={30} color={start <= "" ? "#a6a6a6" : "#000"} />
                        <TextInput 
                            onChangeText={start => setStart(start)}
                            keyboardType="default" 
                            autoCapitalize="none" 
                            placeholderTextColor="#a6a6a6" 
                            placeholder={"Enter pickup location. . ."}
                            style={styles.input} />
                    </View>
                    <View style={{...styles.viewContInput,elevation: end <=""? 0.6 :5}}>
                        <Foundation style={{marginTop:5.5,paddingLeft:8}} name="clipboard-pencil" size={30} color={end <= "" ? "#a6a6a6" : "#000"} />
                        <TextInput 
                            onChangeText={end => setEnd(end)}
                            keyboardType="default" 
                            autoCapitalize="none" 
                            placeholderTextColor="#a6a6a6" 
                            placeholder={"Enter drop location. . ."}
                            style={styles.input} />
                    </View>

                    <MapView
                        style={{height:width}}
                        initialRegion={location[0]}>
                        <Marker coordinate={location[0]} title="Pickup" description="starting location"/>
                        <Marker coordinate={location[1]} title="Drop" description="starting location"/>
                        <MapViewDirections
                            origin={location[0]}
                            destination={location[1]}
                            //apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={2}
                            strokeColor="red"
                        />
                    </MapView>
                </View>
            </View>

            <View style={{alignSelf:"flex-end",marginRight:30, marginTop: 20}}>
                <TouchableOpacity style={styles.logBtn}>
                    <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                        Submit
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
        alignItems: 'center',
        justifyContent: 'center',
    },
    tittle: {
        fontSize: 30,
        fontWeight:"bold"
    },
    titDes: {
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 10,
        color:"#8c8c8c"
    },
    titUpload: {
        fontSize: 12,
        color: '#a6a6a6',
        fontWeight: "bold",
        alignSelf:"center",
        marginLeft: 8
    },
    picker :{
        marginTop:10,
        backgroundColor: "#e6ffe6",
        width: width / 1.2,
    },
    media:{
        alignSelf:"center",
        width: 60,
        height: 40,
        borderRadius: 10,
        marginRight:10
    },
    viewCont: {
        alignSelf:"center",
        backgroundColor: "#e6ffe6",
        elevation: 5,
        width: width / 1.2,
        margin: 5,
        marginTop: 10,
        height: 75,
        marginLeft: -1.5,
        justifyContent:"space-evenly"
    },
    logBtn:{
        backgroundColor: "#00e600",
        width: width / 3,
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row",
        alignSelf:"center",
        elevation: 5
    },
    viewContInput: {
        flexDirection:"row",
        alignSelf:"center",
        backgroundColor: "#e6ffe6",
        width: width / 1.2,
        height: 45,
        margin: 5,
        marginTop: 10,
        marginLeft: -1.5,
    },
    input: {
        marginLeft: 8,
        color: '#000',
        paddingLeft: 1,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        width: width / 1.5,
        marginTop: 0
    },

});
