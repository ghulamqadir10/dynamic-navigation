import React from 'react'
import { SafeAreaView, Text } from 'react-native'


function contact() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: `center`, alignItems: `center` }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 700,
          textDecorationLine: `underline`,
        }}
      >
        Contact
      </Text>
    </SafeAreaView>
  )
}

export default contact
