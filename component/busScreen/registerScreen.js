import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, } from 'react-native';
import { Ionicons,MaterialCommunityIcons,AntDesign,Entypo,FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function registerScreen({navigation}) {

const [isContinue, setisContinue] = useState(false)

const [vendor_name, setName] = useState("")
const [email, setEmail] = useState("")
const [phone_number, setNumber] = useState("")
const [location, setLocation] = useState("")
const [country, setCountry] = useState("")
const [password, setPassword] = useState("")

const [data, setData] = useState("")

function register(params) {
    console.log({vendor_name,email,phone_number,location,country,password});
    let register_data = {vendor_name,email,phone_number,location,country,password}
    fetch("http://192.168.1.2:8000/vendors/",{
        method:'POST',
        headers:{
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body:JSON.stringify(register_data)
        }).then((result) => {i
                setName("")
                setEmail("")
                setNumber("")
                setLocation("")
                setCountry("")
                setPassword("")
            result.json().then((response) => {
                console.log("response", response)
            })
        }).
        catch(function(error) {
            console.log('There has been a problem with your fetch operation: ' + error.message);
            });
    }

    {/*useEffect(() => {
        fetch('http://192.168.1.23:8000/vendors/',{
            method:'GET',
            headers:{
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'
            }
        }).then((res) => {
            res.json();
        }).then(dat => {
            setData(dat)
            console.log(data)
        }).catch((e) => {console.log(e)})
    },[])*/}

    const fetchURL = "http://192.168.1.2:8000"
    const getData = () =>
        fetch(`${fetchURL}/vendors`)
        .then((res) => res.json())

    useEffect(() => {
        getData().then((data) => setData(data))
    }, [])

    console.log(data)

  return (
    
    <View style={styles.container}>
        
        <LinearGradient
        colors={['#fff', '#ccffcc', '#b3ffb3','#b3ffb3', '#99ff99','#80ff80']} style={{width: width,height: height,alignItems: 'center',justifyContent: 'center'}}>
            <View >
                <Text style={styles.tittle}>Register</Text>
                <Text style={styles.titDes}>Please enter your details...</Text>
                <View style={{...styles.viewCont,elevation: vendor_name <= "" ? 0 : 5,}}>
                    <Ionicons style={styles.icon} name="person-outline" size={30} color="#a6a6a6" />
                    <TextInput 
                        onChangeText={vendor_name => setName(vendor_name)}
                        keyboardType="default" 
                        placeholderTextColor="#a6a6a6" 
                        placeholder={"Entert Name"}
                        style={styles.input} />
                </View>
                <View style={{...styles.viewCont,elevation: email <= "" ? 0 : 5,}}>
                <MaterialCommunityIcons style={styles.icon} name="email-outline" size={30} color="#a6a6a6" />
                    <TextInput 
                        onChangeText={email => setEmail(email)}
                        keyboardType="email-address" 
                        autoCapitalize="none" 
                        placeholderTextColor="#a6a6a6" 
                        placeholder={"Entert Email"}
                        style={styles.input} />
                </View>
                <View style={{...styles.viewCont,elevation: phone_number <= "" ? 0 : 5,}}>
                    <Entypo  style={styles.icon} name="mobile" size={30} color="#a6a6a6" />
                    <TextInput 
                        onChangeText={phone_number => setNumber(phone_number)}
                        keyboardType="number-pad" 
                        autoCapitalize="none" 
                        placeholderTextColor="#a6a6a6" 
                        placeholder={"Entert Mobile Number"}
                        style={styles.input} />
                </View>
                <View style={{...styles.viewCont,elevation: location <= "" ? 0 : 5,}}>
                <FontAwesome style={styles.icon} name="location-arrow" size={30} color="#a6a6a6" />
                    <TextInput 
                        onChangeText={location => setLocation(location)}
                        keyboardType="default" 
                        placeholderTextColor="#a6a6a6" 
                        placeholder={"Enter Location"}
                        style={styles.input} />
                </View>
                <View style={{...styles.viewCont,elevation: country <= "" ? 0 : 5,}}>
                <Entypo style={styles.icon} name="location-pin" size={30} color="#a6a6a6" />
                    <TextInput 
                        onChangeText={country => setCountry(country)}
                        keyboardType="default" 
                        placeholderTextColor="#a6a6a6" 
                        placeholder={"Enter Country"}
                        style={styles.input} />
                </View>
                <View style={{...styles.viewCont,elevation: password <= "" ? 0 : 5,}}>
                    <Ionicons style={styles.icon} name="lock-closed-outline" size={30} color="#a6a6a6" />
                    <TextInput 
                        onChangeText={password => setPassword(password)}
                        keyboardType="visible-password" 
                        placeholderTextColor="#a6a6a6" 
                        placeholder={"Enter Password"}
                        style={styles.input} />
                </View>
            </View>
            <View style={{alignSelf:"flex-end",marginRight:20, marginTop: 20}}>
                <TouchableOpacity style={styles.logBtn} onPress={register}>
                    <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                        Register
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
        fontSize: 40,
        fontWeight:"bold"
    },
    titDes: {
        fontSize: 12,
        color: '#a6a6a6',
        fontWeight: "bold",
        marginTop: 10,
    },
    viewCont: {
        flexDirection:"row",
        alignSelf:"center",
        backgroundColor: "#ccffcc",
        elevation: 5,
        width: width / 1.2,
        height: 45,
        margin: 5,
        marginTop: 10
    },
    icon: {
        paddingLeft: 8,
        marginTop: 5.5
    },
    input: {
        marginLeft: 8,
        color: '#000',
        paddingLeft: 1,
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        width: width / 1.5,
        marginTop: 5
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
