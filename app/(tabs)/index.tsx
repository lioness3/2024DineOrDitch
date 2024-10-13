import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { globalStyles} from '../../styles/global';
import * as Location from "expo-location";
import { MaterialIcons } from "@expo/vector-icons";

export default function Index() {
  const [location, setLocation] = useState({});
  const [lat, setLat] = useState(Number);
  const [long,setLong]= useState(Number);
  const buttonSize = 60; // defines size of yes and no buttons

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
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.headingText}>RESTAURANT NAME</Text>
        <Text>latitude: {lat}</Text>
        <Text>longitude: {long}</Text>
        <View style={globalStyles.buttonContainer}>
          <MaterialIcons name="check-circle" size={buttonSize} color={"green"}/>
          <MaterialIcons name="next-plan" size={buttonSize} color={"red"}/>

        </View>
      </View>
      

    </View>
  );
}
