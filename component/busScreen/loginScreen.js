import React,{useState} from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, } from 'react-native';
import { Ionicons,MaterialCommunityIcons,AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default function welcomeScreen({navigation}) {

    const [isContinue, setisContinue] = useState(false)

    const [email, setEamil] = useState("")
    const [password, setPassword] = useState("")

    setInterval(() => {
        setisContinue(true)
      }, 6000);
    
  return (
    <View style={styles.container}>
         {(isContinue == false) ? 
        
        <LinearGradient
            colors={['#fff', '#e6ffe6', '#ccffcc','#b3ffb3', '#99ff99','#80ff80']} style={{width: width,height: height,alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{...styles.tittle,marginBottom:10}}>Welcome</Text>
                <Text style={{...styles.titDes,
                                    marginLeft:20,
                                    marginRight:20,
                                    textAlign:"center",
                                    marginBottom:50,
                                    fontSize:15}}>Welcome everyone who comes to have a relationship with our company</Text>
                <View style={{marginTop: 20}}>
        </View>
            </LinearGradient>
    : 
        
    <LinearGradient
        colors={['#fff', '#e6ffe6', '#ccffcc','#b3ffb3', '#99ff99','#80ff80']} style={{width: width,height: height,alignItems: 'center',justifyContent: 'center'}}>
      <View>
          <Text style={styles.tittle}>Login</Text>
          <Text style={styles.titDes}>Please log in to continue...</Text>
          <View style={{...styles.viewCont,elevation: email <= "" ? 0 : 5,}}>
            <MaterialCommunityIcons style={styles.icon} name="email-outline" size={30} color={email <= "" ? "#a6a6a6" : "#000"} />
            <TextInput 
                onChangeText={email => setEamil(email)}
                keyboardType="email-address" 
                autoCapitalize="none" 
                placeholderTextColor="#a6a6a6" 
                placeholder={"Email..."}
                style={styles.input} />

          </View>
          <View style={{...styles.viewCont,elevation: password <= "" ? 0 : 5,}}>
            <Ionicons style={styles.icon} name="lock-closed-outline" size={30} color={password <= "" ? "#a6a6a6" : "#000"} />
            <TextInput 
                onChangeText={password => setPassword(password)}
                keyboardType="visible-password" 
                autoCapitalize="none" 
                placeholderTextColor="#a6a6a6" 
                placeholder={"Password..."}
                style={styles.input} />

          </View>
      </View>

      <View style={{alignSelf:"flex-end",marginRight:30, marginTop: 20}}>
          <TouchableOpacity style={styles.logBtn} onPress={() => navigation.navigate("busScreen")}>
            <Text style={{color: "#fff",fontSize:15,fontWeight:"bold"}}>
                Login
            </Text>
            <AntDesign style={styles.icon} name="arrowright" size={30} color="#fff" />
        </TouchableOpacity>
      </View>

    <TouchableOpacity onPress={() => navigation.navigate("registerScreen")}>
        <Text style={{color: "#000",fontSize:13,fontWeight:"bold",marginTop:20}}>
                Click to Register...
        </Text>
    </TouchableOpacity>

      </LinearGradient>
      }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
