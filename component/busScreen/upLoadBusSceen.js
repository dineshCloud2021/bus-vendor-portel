import React, { useState, useEffect,useRef }  from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,Picker, Image } from 'react-native';
import { Ionicons,Foundation,AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { Video, AVPlaybackStatus } from 'expo-av';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function upLoadBusSceen({navigation}) {

    const [PickerValue, setState] = useState('')

    const [busNum, setBusNum] = useState('');
    const [front, setfront] = useState(null);
    const [back, setBack] = useState(null);
    const [right, setRight] = useState(null);
    const [left, setLeft] = useState(null);

    const [video, setVideo] = useState(null);

    const vid = useRef(null);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
    const frontPickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 20],
            quality: 1,
        });
      
        console.log(result);
      
        if (!result.cancelled) {
            setfront(result.uri);
        }
    };

    const backPickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 20],
            quality: 1,
        });
        
        console.log(result);
        
        if (!result.cancelled) {
            setBack(result.uri);
        }
    };

    const rightPickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 6],
            quality: 1,
        });
        
        console.log(result);
        
        if (!result.cancelled) {
            setRight(result.uri);
        }
    };

    const leftPickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 6],
            quality: 1,
        });
        
        console.log(result);
        
        if (!result.cancelled) {
            setLeft(result.uri);
            }
    };

    const videoPicker = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            quality: 1,
        });
        
        console.log(result);
        
        if (!result.cancelled) {
            setVideo(result.uri);
            }
    };

  return (
    <View style={styles.container}>

        <LinearGradient
        colors={['#fff', '#e6ffe6','#ccffcc']} style={{width: width,height: height,alignItems: 'center',justifyContent: 'center'}}>
      
            <View>
            
                <Text style={styles.tittle}>Upload Images</Text>
                <Text style={styles.titDes}>Please upload bus images...</Text>
                <View>
                    <View style={{...styles.picker,elevation: PickerValue <=""? 0.6 :5}}>
                    <Picker
                        style={{marginLeft:10,marginRight:10,color: '#a6a6a6'}}
                        selectedValue= {PickerValue}
                        onValueChange= {PickerValue => setState(PickerValue)}>
                        <Picker.Item label="Select a type" value=""/>
                        <Picker.Item label="Semi-Sleeper" value="Semi-Sleeper" />
                        <Picker.Item label="Sleeper + Semi-Sleeper " value="Sleeper-Sleeper-Semi" />
                    </Picker>
                    </View>
                    <View style={{...styles.viewCont,elevation: front <="" ? 0.8 :5}}>
                        <Text style={styles.titUpload}>Upload <Text style={{color: '#000',fontWeight:"bold"}}>bus image</Text> here</Text>
                        <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                            <TouchableOpacity style={styles.media} onPress={frontPickImage}>
                            {(front <= "") ? <View style={{borderWidth:0.5,borderRadius: 10,alignItems:"center"}}><Text style={{fontSize:10}}>FrontSide</Text>
                            <Ionicons style={{marginTop:5.5,marginBottom:4}} name="camera-outline" size={12} color="#000" /></View> : 
                            <Image source={{ uri: front }} style={styles.media} />}
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.media} onPress={backPickImage}>
                            {(back <= "") ? <View style={{borderWidth:0.5,borderRadius: 10,alignItems:"center"}}><Text style={{fontSize:10}}>BackSide</Text>
                            <Ionicons style={{marginTop:5.5,marginBottom:4}} name="camera-outline" size={12} color="#000" /></View> : 
                            <Image source={{ uri: back }} style={styles.media} />}
                            </TouchableOpacity>
                        
                            <TouchableOpacity style={styles.media} onPress={rightPickImage}>
                            {(right <= "") ? <View style={{borderWidth:0.5,borderRadius: 10,alignItems:"center"}}><Text style={{fontSize:10}}>RightSide</Text>
                            <Ionicons style={{marginTop:5.5,marginBottom:4}} name="camera-outline" size={12} color="#000" /></View> : 
                            <Image source={{ uri: right }} style={styles.media} />}
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={styles.media} onPress={leftPickImage}>
                            {(left <= "") ? <View style={{borderWidth:0.5,borderRadius: 10,alignItems:"center"}}><Text style={{fontSize:10}}>LeftSide</Text>
                            <Ionicons style={{marginTop:5.5,marginBottom:4}} name="camera-outline" size={12} color="#000" /></View> : 
                            <Image source={{ uri: left }} style={styles.media} />}
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <View style={{...styles.viewCont,flexDirection:"row",height:50,elevation: video <="" ? 0.6 :5}}>
                        <Text style={styles.titUpload}>Upload <Text style={{color: '#000',fontWeight:"bold"}}>bus interior exterior</Text> video</Text>
                        <TouchableOpacity style={styles.media} onPress={videoPicker}>
                            {(video <= "") ? <View style={{borderWidth:0.5,borderRadius: 10,alignItems:"center"}}><Text style={{fontSize:10}}>video</Text>
                            <Ionicons style={{marginTop:5.5,marginBottom:4}} name="ios-videocam" size={12} color="#000" /></View> : 
                            <Video
                            ref={vid}style={styles.media}
                            source={{ uri: video }}
                            useNativeControls
                            resizeMode="contain"
                            isLooping/>}
                        </TouchableOpacity>
                    </View>
                </View>
            
            </View>

            <View style={{alignSelf:"flex-end",marginRight:30, marginTop: 20}}>
                <TouchableOpacity style={styles.logBtn}  onPress={() => navigation.navigate("seatCountBusSceen")}>
                    <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                        Continue
                    </Text>
                    <AntDesign style={styles.icon} name="arrowright" size={30} color="#fff" />
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
        borderRadius: 10
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
