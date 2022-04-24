import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';


// You can import from local files

let apiKey = 'AIzaSyBBKtnI-GKkr1fAp9nmrhcenty_wkG1deE';

import * as Location from 'expo-location';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);
  const [getLocation, setGetLocation] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      Location.setGoogleApiKey(apiKey);

      console.log(status);

      let { coords } = await Location.getCurrentPositionAsync();

      setLocation(coords);

      console.log(coords);

      if (coords) {
        let { longitude, latitude } = coords;

        let regionName = await Location.reverseGeocodeAsync({
          longitude,
          latitude,
        });
        setAddress(regionName[0]);
        console.log(regionName, 'nothing');
      }

      // console.log();
    })();
  }, [getLocation]);

  return (
    <View style={styles.container}>
      <Text style={styles.big}>
        {!location
          ? 'Waiting'
          : `Lat: ${location.latitude} \nLong: ${
              location.longitude
            } \n${JSON.stringify(address?.["subregion"])}`
         }
      </Text>
      <TouchableOpacity onPress={() => setGetLocation(!getLocation)}>
        <View
          style={{
            height: 100,
            backgroundColor: 'teal',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text style={styles.btnText}> GET LOCATION </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  btnText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
});