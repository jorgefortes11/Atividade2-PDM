import React from 'react';
import { View, Text, Button } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>👤 Este é o teu Perfil!</Text>
      <Button
        title="Voltar à Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}
