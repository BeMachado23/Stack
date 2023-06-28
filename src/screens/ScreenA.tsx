import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export function ScreenA() {

  const navigation = useNavigation();

  function openScreen(){
    navigation.navigate('screenB');
  }
  
  return (
    <View style={styles.container}>
      <Button
        title = "Ir para Screen B"
        color = "red"
        onPress={openScreen}
      />
    </View>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
  }
})