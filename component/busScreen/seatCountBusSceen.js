import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity,Picker, Image } from 'react-native';
import { Ionicons,Foundation,AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function seatCountBusSceen({navigation}) {

    const [row, setRows] = useState('')
    const [counts, setCounts] = useState('')
    
    var count =["0","1","2","3","4","5","6","7","8","9","10",
    "11","12","13","14","15","16","17","18","19","20","21","22","23","24",];
    var rows =["0","1","2","3","4","5","6","7"];

  return (
    <View style={styles.container}>

        <LinearGradient
        colors={['#fff', '#e6ffe6', '#ccffcc']} style={{width: width,height: height,alignItems: 'center',justifyContent: 'center'}}>
      
            <View>
            
                <Text style={styles.tittle}>Seat Details</Text>
                <Text style={styles.titDes}>Please enter seat counts...</Text>
                
                <View style={{marginTop:100}}>
                    <View style={{...styles.viewCont,elevation: row <=""? 0.8 : 5}}>
                    <Text style={{...styles.titUpload,marginBottom:20}}>Select 
                    <Text style={{color:"#000"}}>  ROWS</Text>  and <Text  style={{color:"#000"}}> SEAT </Text> counts</Text>
                    
                                <Picker
                                    mode="dialog"
                                    selectedValue= {row}
                                    onValueChange= {row => setRows(row)}>
                                    {rows.map((item, index) => {
                                        return (<Picker.Item label={item} value={index} key={index}/>) 
                                    })}
                                </Picker>
                                <Picker
                                    mode="dialog"
                                    selectedValue= {counts}
                                    onValueChange= {counts => setCounts(counts)}>
                                    {count.map((item, index) => {
                                        return (<Picker.Item label={item} value={index} key={index}/>) 
                                    })}
                                </Picker>
                   
                    </View>
                </View>

            </View>

            <View style={{alignSelf:"flex-end",marginRight:30, marginTop: 20}}>
                <TouchableOpacity style={styles.logBtn}  onPress={() => navigation.navigate("sleeperBusScreen",{paramRows : row,
                                                                                                                paramSeats : counts})}>
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
        color: '#8c8c8c',
        fontWeight: "bold",
        marginTop: 10,
    },
    titUpload: {
        fontSize: 12,
        color: '#8c8c8c',
        fontWeight: "bold",
        alignSelf:"center",
        marginLeft: 8
    },
    picker :{
        backgroundColor: "#ccffcc",
        height: width / 5,
        marginTop:20
    },
    viewCont: {
        alignSelf:"center",
        backgroundColor: "#e6ffe6",
        elevation: 5,
        width: width / 1.2,
        margin: 5,
        marginTop: 10,
        height: 230,
        marginLeft: -1.5,
        justifyContent:"space-evenly"
    },
    icon: {
        paddingLeft: 8,
        marginTop: 5.5
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
    }

});
