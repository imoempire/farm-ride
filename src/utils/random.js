// from Destination scrren

      {/* <GooglePlacesAutocomplete
        placeholder="Search"
        styles={autoComplete}
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
      /> */}

{/* {destination === false && (
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="From..."
          listViewDisplayed="auto"
          debounce={400}
          // currentLocation ={true}
          ref={textInput1}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
          
          renderDescription={(row) => row.description} // custom description render
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}

          onPress= {(data,details = null)=>{
              dispatchOrigin({type:"ADD_ORIGIN",payload:{
                  latitude:details.geometry.location.lat,
                  longitude:details.geometry.location.lng,
                  address:details.formatted_address,
                  name:details.name
              }})

              setDestination(true)
          }}
        />
      )} */}

      {/* {destination === true && (
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="Going to..."
          listViewDisplayed="auto"
          debounce={400}
          currentLocation ={true}
          ref={textInput2}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            dispatchDestination({
              type: "ADD_DESTINATION",
              payload: {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                address: details.formatted_address,
                name: details.name,
              },
            });

            navigation.navigate("Request", { state: 0 });
          }}
        />
      )} */}