import { Tabs } from "expo-router";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TabsLayout() {
  return <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
    <Tabs.Screen name="index" options={{
      headerTitle: "Restaurant Suggestions",
      tabBarIcon: () => <MaterialIcons name="food-bank" size={24} /> 
    }}/>
    <Tabs.Screen name="profile" options={{
      headerTitle: "My Notes",
      tabBarIcon: () => <MaterialIcons name="person" size={24} /> 
    }}/>
  </Tabs>
}


