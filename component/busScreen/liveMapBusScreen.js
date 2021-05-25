import * as React from 'react';
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const { width, height } = Dimensions.get('window');

export default function liveMapBusScreen() {

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
       <MapView
        style={styles.map}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});