import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, } from 'react-native';
import { Ionicons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function verificationBusScreen({navigation}) {

    const [isContinue, setisContinue] = useState(false)

    setInterval(() => {
        setisContinue(true)
      }, 5000);

  return (
    <View style={styles.container}>
        <LinearGradient
        colors={['#fff', '#e6ffe6', '#ccffcc']} style={{width: width,height: height,alignItems: 'center',justifyContent: 'center'}}>
     
            <View>
            <Text style={styles.tittle}>Processing Bus</Text>
            <Text style={styles.titDes}>Your details upload successfully Please waiting for our verification once you verified cilck start...</Text>
            
            {(isContinue == true) ? 
            <View style={{...styles.viewCont,elevation: isContinue == true ? 5 : 1}}>
                <Text style={styles.titUpload}>Verification <Text style={{color: 'green',fontWeight:"bold"}}>successful</Text></Text>
                <Ionicons style={styles.icon} name="checkmark-done-circle-outline" size={30} color="green" />
            </View>
            :
            <View style={{...styles.viewCont,elevation: isContinue == true ? 5 : 1}}>
                <Text style={styles.titUpload}>Processing your <Text style={{color: '#000',fontWeight:"bold"}}>verification</Text>...</Text>
                <MaterialCommunityIcons style={styles.icon} name="timer-sand" size={30} color="black" />
            </View>
            } 
        </View>

            {(isContinue == true) ? 
            <View style={{alignSelf:"center",marginTop: 20}}>
                <TouchableOpacity style={{...styles.logBtn,elevation: 5}} onPress={() => navigation.navigate("busScreen")}>
                <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                    Start
                </Text>
                </TouchableOpacity>
            </View>
            :
            <View style={{alignSelf:"center",marginTop: 20}}>
                <TouchableOpacity style={{...styles.logBtn,backgroundColor:"#000",elevation: 1}}>
                <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                    Waiting...
                </Text>
                </TouchableOpacity>
            </View>
            }
            
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
    
    titUpload: {
        fontSize: 12,
        color: '#a6a6a6',
        fontWeight: "bold",
        alignSelf:"center",
        marginLeft: 8
    },
    tittle: {
        fontSize: 40,
        fontWeight:"bold",
        textAlign:"center"
    },
    titDes: {
        fontSize: 12,
        color: '#a6a6a6',
        fontWeight: "bold",
        marginTop: 10,
        textAlign:"center"
    },
    viewCont: {
        flexDirection:"row",
        alignSelf:"center",
        backgroundColor: "#e6ffe6",
        elevation: 5,
        width: width / 1.2,
        height: 45,
        margin: 10,
        marginTop: 10,
        justifyContent:"space-between"
    },
    icon: {
        marginRight: 10,
        marginTop: 10,
        width: 40,
        height: 40,
        alignSelf:"center",
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
    logBtn:{
        backgroundColor: "#00e600",
        width: width / 3,
        borderRadius: 20,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',flexDirection:"row",
        alignSelf:"center",
        elevation: 5
    }

});
