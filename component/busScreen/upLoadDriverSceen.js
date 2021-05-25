import React, { useState, useEffect,useRef }  from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,Picker, Image } from 'react-native';
import { Ionicons,Foundation,AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import { Video, AVPlaybackStatus } from 'expo-av';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function upLoadDriverSceen({navigation}) {

    const [PickerValue, setState] = useState('')

    const [busNum, setBusNum] = useState('');
    const [book, setBook] = useState(null);
    const [insurance, setInsurance] = useState(null);

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

    const bookPickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 16],
            quality: 1,
        });
        
        console.log(result);
        
        if (!result.cancelled) {
            setBook(result.uri);
        }
    };

    const insurancePickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [16, 10],
            quality: 1,
        });
        
        console.log(result);
        
        if (!result.cancelled) {
            setInsurance(result.uri);
            }
    };

  return (
    <View style={styles.container}>

        <LinearGradient
        colors={['#fff', '#e6ffe6','#ccffcc']} style={{width: width,height: height,alignItems: 'center',justifyContent: 'center'}}>
      
            <View>
                <Text style={styles.tittle}>Driver Details</Text>
                <Text style={styles.titDes}>Please upload bus driver details...</Text>
                <View>
                    <View style={{...styles.viewContInput,elevation: busNum <=""? 0.6 :5}}>
                        <Foundation style={{marginTop:5.5,paddingLeft:8}} name="clipboard-pencil" size={30} color={busNum <= "" ? "#a6a6a6" : "#000"} />
                        <TextInput 
                            onChangeText={busNum => setBusNum(busNum)}
                            keyboardType="default" 
                            autoCapitalize="none" 
                            placeholderTextColor="#a6a6a6" 
                            placeholder={"Enter bus driver name . . ."}
                            style={styles.input} />
                    </View>
                    <View style={{...styles.viewCont,flexDirection:"row",height:50,elevation: book <="" ? 0.6 :5,justifyContent:"space-between"}}>
                        <Text style={styles.titUpload}>Upload bus <Text style={{color: '#000',fontWeight:"bold"}}>Driver</Text> image</Text>
                        <TouchableOpacity style={styles.media} onPress={bookPickImage}>
                            {(book <= "") ? <View style={{borderWidth:0.5,borderRadius: 10,alignItems:"center"}}><Text style={{fontSize:10}}>User</Text>
                            <Ionicons style={{marginTop:5.5,marginBottom:4}} name="camera-outline" size={12} color="#000" /></View> : 
                            <Image source={{ uri: book }} style={styles.media} />}
                        </TouchableOpacity>
                    </View>
                    <View style={{...styles.viewCont,flexDirection:"row",height:50,elevation: insurance <="" ? 0.6 :5,justifyContent:"space-between"}}>
                        <Text style={styles.titUpload}>Upload driver <Text style={{color: '#000',fontWeight:"bold"}}>Licence</Text> image</Text>
                        <TouchableOpacity style={styles.media} onPress={insurancePickImage}>
                            {(insurance <= "") ? <View style={{borderWidth:0.5,borderRadius: 10,alignItems:"center"}}><Text style={{fontSize:10}}>Licence</Text>
                            <Ionicons style={{marginTop:5.5,marginBottom:4}} name="camera-outline" size={12} color="#000" /></View> : 
                            <Image source={{ uri: insurance }} style={styles.media} />}
                        </TouchableOpacity>
                    </View>
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
