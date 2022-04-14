import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { mapStyle } from "../Data/mapStyle";
import MapView, { PROVIDER_GOOGLE, Geojson } from "react-native-maps";
import { colors, parameters } from "../Data/styles";
import MapViewDirections from "react-native-maps-directions";
// import {GOOGLE_MAPS_APIKEY} from '@env'

const myPlace = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "GHA",
      properties: {
        "name": "Ghana"
      },
      "geometry":{
        "type":"Polygon",
        "coordinates": [
             [
              [1.060122,5.928837],
              [-0.507638,5.343473], [-1.063625,5.000548],
              [-1.964707,4.710462], [-2.856125,4.994476],
              [-2.810701,5.389051], [-3.24437,6.250472],
              [-2.983585,7.379705], [-2.56219,8.219628],
              [-2.827496,9.642461], [-2.963896,10.395335],
              [-2.940409,10.96269], [-1.203358,11.009819],
              [-0.761576,10.93693], [-0.438702,11.098341],
              [0.023803,11.018682], [-0.049785,10.706918],
              [0.36758,10.191213], [0.365901,9.465004],
              [0.461192,8.677223],[0.712029,8.312465],
              [0.490957,7.411744],[0.570384,6.914359],
              [0.836931,6.279979],[1.060122,5.928837]
              ]
           ]},
    },
  ],
};

const destination = {latitude: 5.602986, longitude: -0.170116};
const origin = {latitude: 5.643975, longitude: 5.643975};

const GOOGLE_MAPS_APIKEY = "AIzaSyBBKtnI-GKkr1fAp9nmrhcenty_wkG1deE";
export default class MapComponent extends Component {
  constructor() {
    super();
    this.state = {};

    this._map = React.createRef(35);
  }

  componentDidUpdate() {
    setTimeout(() => {
      if (this.props.userDestination.latitude !== null) {
        this._map.current.fitToCoordinates(
          [this.props.userOrigin, this.props.userDestination],
          {
            edgePadding: { top: 450, right: 50, left: 50, bottom: 350 },
            animated: true,
          }
        );
      }
    }, 500);
  }

  render() {
    return (
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
          ref={this._map}
          initialRegion={{
            latitude: 7.946527,
            longitude: -1.023194,
            latitudeDelta: 3.9022,
            longitudeDelta: 3.9421,
          }}
        >
          {/* <Geojson
            geojson={myPlace}
            strokeColor="red"
            fillColor="green"
            strokeWidth={1}
          /> */}

          {/* {this.props.userOrigin.latitude != null && (
            <MapView.Marker
              coordinate={this.props.userOrigin}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                source={require("../../assets/location.png")}
                style={styles.markerOrigin2}
                resizeMode="cover"
              />
            </MapView.Marker>
          )} */}
          {/* {this.props.userDestination.latitude != null && (
            <MapView.Marker
              coordinate={this.props.userDestination}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                source={require("../../assets/location.png")}
                style={styles.markerDestination}
                resizeMode="cover"
              />
            </MapView.Marker>
          )} */}
          {/* {this.props.userDestination.latitude !== null && (
            <MapViewDirections
              origin={this.props.userOrigin}
              destination={this.props.userDestination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={4}
              strokeColor="black"
            />
          )} */}


           <MapView.Marker
              coordinate={origin}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                source={require("../../assets/location.png")}
                style={styles.markerDestination}
                resizeMode="cover"
              />
            </MapView.Marker>

          <MapView.Marker
              coordinate={destination}
              anchor={{ x: 0.5, y: 0.5 }}
            >
              <Image
                source={require("../../assets/location.png")}
                style={styles.markerDestination}
                resizeMode="cover"
              />
            </MapView.Marker>
           {/* <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={4}
              strokeColor="black"
            /> */}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },

  markerWrapOrigin: {
    //  alignItems: "center",
    // justifyContent: "center",
    width: 40,
    height: 20,
    // marginTop:0
  },
  markerOrigin: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },

  destination: {
    width: 20,
    height: 20,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  view1: {
    width: 7,
    height: 7,
    backgroundColor: "white",
  },
  markerDestination: {
    width: 16,
    height: 16,
  },

  markerOrigin2: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },

  car: {
    paddingTop: 0,
    width: 40,
    height: 20,
  },

  view2: {
    position: "absolute",
    top: 10,
    right: 12,
    backgroundColor: "white",
    height: 40,
    width: 180,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8,
  },

  view3: {
    flexDirection: "row",
    alignItems: "center",
    //marginRight:15,
    //backgroundColor:"white",
    //paddingHorizontal:2,
    paddingVertical: 2,
    //borderRadius:20
  },

  view4: {
    position: "absolute",
    top: 50,
    left: 12,
    backgroundColor: "white",
    height: 40,
    width: 140,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
    zIndex: 8,
  },

  location: {
    width: 20,
    height: 20,
    borderRadius: 9,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  view9: { width: 6, height: 6, borderRadius: 4, backgroundColor: "white" },
});
