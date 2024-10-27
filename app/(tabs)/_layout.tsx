import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: 'lightgrey'
          },
          tabBarIcon: ({ color, focused }) => {
            return <View style={focused ? {
              backgroundColor: 'transparent',
              bottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 20
            } : null}>
              <MaterialCommunityIcons name="home" size={28} color="black" />
            </View>
          }
        }}
      />

       <Tabs.Screen
        name="contact"
        options={{
          title: 'contact',
          headerStyle: {
            backgroundColor: 'lightgrey'
          },  
          tabBarIcon: ({ color, focused }) => {
            return <View style={focused ? {
              
              backgroundColor: 'transparent',
              bottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 20
            } : null}>
              <FontAwesome size={28} name="user" color={'black'} />
            </View>
          }
        }}
      />


      <Tabs.Screen
        name="products"
        options={{
          title: 'products',
          headerStyle: {
            backgroundColor: 'lightgrey'
          },
          tabBarIcon: ({ color, focused }) => {
            return <View style={focused ? {
              backgroundColor: 'transparent',
              bottom: 20,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 5,
              borderRadius: 20
            } : null}>
              <FontAwesome size={28} name="user" color={'black'} />
            </View>
          }
        }}
      />


    </Tabs>
  );
}