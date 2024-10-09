import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import * as Location from "expo-location";

export default function Index() {
  const [location, setLocation] = useState({});
  const [lat, setLat] = useState(Number);
  const [long,setLong]= useState(Number);

  useEffect(() => { // runs when index component mounts
    const getPermissions = async () => {
      let {status} = await Location.requestForegroundPermissionsAsync();
      if (status == 'granted') {
        console.log('====================================');
        console.log("Persmissions SUCCESS!", status);
        let currentLocation = await Location.getCurrentPositionAsync();
        setLocation(currentLocation);
        setLat(currentLocation.coords.latitude) ;
        setLong(currentLocation.coords.longitude);
        let long = currentLocation.coords.longitude;
        console.log('====================================');
      } else{
        console.log('====================================');
        console.log("NO LOCATION PERMISSION");
        console.log('====================================');
      }


      
    };
   getPermissions(); //get user permission for location 
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
<Text>latitude: {lat}</Text>
<Text>longitude: {long}</Text>

    </View>
  );
}
