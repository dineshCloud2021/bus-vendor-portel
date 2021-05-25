import React,{useState} from 'react';
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, ScrollView, } from 'react-native';
import { Ionicons,AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function sleeperBusScreen({route,navigation}) {

    const semi= route.params.paramSeats;
    const row= route.params.paramRows;
    const [front, setFront] = useState(0)
    
  return (
    <View style={styles.container}>
        <View style={{width: width,height: height,justifyContent:"center",}}>
            <LinearGradient
            colors={['#fff', '#e6ffe6', '#ccffcc']} style={{width: width,height: height,justifyContent: 'center'}}>
                <ScrollView >
                    <Text style={styles.tittle}>Seat Layout</Text>
                    {semi == 0 ?
                    <View></View>:
                    <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
                        <View style={{alignSelf:"flex-end",marginTop: 20}}>
                        <TouchableOpacity style={styles.logBtn}  onPress={() => setFront(0)}>
                            <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>Front</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{alignSelf:"flex-end", marginTop: 20}}>
                        <TouchableOpacity style={styles.logBtn}  onPress={() => setFront(1)}>
                            <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>Back</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    }
                    <View style={{flexDirection:"row",justifyContent:"space-evenly", marginTop: -40,marginBottom: -40}}>

                        <View style={{width: width/2.5}}>
                            <Text style={{...styles.titUpload,color:"#000"}}>Lower Berth</Text>
                            <View style={{borderWidth:0.5,borderRadius:15, marginTop:20,marginBottom:55,paddingBottom:15}}>
                                <View style={{marginTop:10,justifyContent:"space-evenly",height: 50,}}>
                                <MaterialCommunityIcons style={{alignSelf:"flex-end",marginRight:20}} name="steering" size={30} color="black" />
                                <View style={{borderWidth:0.5,height: 1}}></View>
                                </View>
                                <View>
                                {front == 0 ? 
                                    <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",
                                    marginTop:15}}>
                                    <View style={{alignItems:"center"}} >
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "1" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "2" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "3" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "4" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "5" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "6" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                    </View>
        
                                    <View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "1" ? "flex": "none"}} >
                                        {semi >= 1 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 2 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 4 ? 1: 0}}/>
                                                </View>
        
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 1 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 3 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "2" ? "flex": "none"}} >
                                        {semi >= 5 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 6 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 8 ? 1: 0}}/>
                                                </View>
        
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 5 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 7 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "3" ? "flex": "none"}} >
                                        {semi >= 9 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 10 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 12 ? 1: 0}}/>
                                                </View>
        
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 9 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 11 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "4" ? "flex": "none"}} >
                                        {semi >= 13 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 14 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 16 ? 1: 0}}/>
                                                </View>
        
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 13 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 15 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "5" ? "flex": "none"}} >
                                        {semi >= 17 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 18 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 20 ? 1: 0}}/>
                                                </View>
        
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 17 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 19 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "6" ? "flex": "none"}} >
                                        {semi >= 21 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 22 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 24 ? 1: 0}}/>
                                                </View>
        
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 21 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 23 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                    </View>
                                </View>
                                :
                                <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",
                                marginTop:15}}>
                                    <View style={{alignItems:"center"}} >
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "1" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "2" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "3" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "4" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "5" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                            alignItems:'center',display: row >= "6" ? "flex": "none"}}>
                                            <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                        </View>
                                    </View>

                                    <View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "6" ? "flex": "none"}} >
                                        {semi >= 21 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 24 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 22 ? 1: 0}}/>
                                                </View>

                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 23 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 21 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "5" ? "flex": "none"}} >
                                        {semi >= 17 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 20 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 18 ? 1: 0}}/>
                                                </View>

                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 19 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 17 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "4" ? "flex": "none"}} >
                                        {semi >= 13 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 16 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 14 ? 1: 0}}/>
                                                </View>

                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 15 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 13 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "3" ? "flex": "none"}} >
                                        {semi >= 9 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 12 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 10 ? 1: 0}}/>
                                                </View>

                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 11 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 9 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "2" ? "flex": "none"}} >
                                        {semi >= 5 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 8 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 6 ? 1: 0}}/>
                                                </View>

                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 7 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 5 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>
                                        <View style={{flexDirection:"row",alignItems:'center',alignSelf:"center",display: row >= "1" ? "flex": "none"}} >
                                        {semi >= 1 ? 
                                            <View style={{flexDirection:"row"}} >
                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 4 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 2 ? 1: 0}}/>
                                                </View>

                                                <View>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 3 ? 1: 0}}/>
                                                    <View style={{borderWidth:0.5,borderRadius:2,width: 20,height: 20, margin:5,opacity: semi >= 1 ? 1: 0}}/>
                                                </View>
                                                </View>
                                        :
                                                <View style={{flexDirection:"row",alignItems:"center"}} >
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                                <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                                </View>
                                            </View>
                                        }
                                        </View>  
                                    </View>
                                </View>
                                }
                                </View>
                            </View>  
                        </View>
                                        
                        <View style={{width: width/2.5 }}>
                            <Text style={{...styles.titUpload,color:"#000"}}>Upper Berth</Text>
                            <View style={{borderWidth:0.5,borderRadius:15, marginTop:20,marginBottom:55,paddingBottom:15}}>
                                <View style={{marginTop:10,justifyContent:"space-evenly",height: 50,}}>
                                <MaterialCommunityIcons style={{alignSelf:"flex-end",marginRight:20}} name="steering" size={30} color="black" />
                                <View style={{borderWidth:0.5,height: 1}}></View>
                                </View>

                                <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center",
                                marginTop:15}}>
                                <View style={{alignItems:"center"}} >
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                        alignItems:'center',display: row >= "1" ? "flex": "none"}}>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                        alignItems:'center',display: row >= "2" ? "flex": "none"}}>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                        alignItems:'center',display: row >= "3" ? "flex": "none"}}>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                        alignItems:'center',display: row >= "4" ? "flex": "none"}}>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                        alignItems:'center',display: row >= "5" ? "flex": "none"}}>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,
                                        alignItems:'center',display: row >= "6" ? "flex": "none"}}>
                                        <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                </View>

                                <View>
                                <View style={{flexDirection:"row",alignItems:'center',display: row >= "1" ? "flex": "none"}} >
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row",alignItems:"center",display: row >= "2" ? "flex": "none"}} >
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row",alignItems:"center",display: row >= "3" ? "flex": "none"}} >
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row",alignItems:"center",display: row >= "4" ? "flex": "none"}} >
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row",alignItems:"center",display: row >= "5" ? "flex": "none"}} >
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                </View>
                                <View style={{flexDirection:"row",alignItems:"center",display: row >= "6" ? "flex": "none"}} >
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 25,height: 50, margin:5,alignItems:"center"}}>
                                    <View style={{borderWidth:0.5,borderRadius:2,width: 15,height: 4,marginTop:40}}/>
                                    </View>
                                </View>
                                </View>
                                </View>
                            </View>  
                        </View>
                    
                    </View>

                    <View style={{alignSelf:"flex-end",marginRight:30, marginTop: 20,paddingBottom:30}}>
                        <TouchableOpacity style={{...styles.logBtn,width: width/3.5,marginBottom:15}}  onPress={() => navigation.navigate("verificationBusScreen")}>
                            <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                                Submit
                            </Text>
                        </TouchableOpacity>
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
        fontSize: 30,
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
    }
  });
