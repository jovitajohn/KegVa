import KegvaStyle from "@/style/KegvaStyle";
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, View } from "react-native";
import { PaperProvider, Text, TextInput } from 'react-native-paper';

export default function Index() {

  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [visible, setVisible] = useState(false);

  return (
    <PaperProvider>
      <KeyboardAvoidingView
      style={[{ flex: 1 }]}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={KegvaStyle.scrollview} keyboardShouldPersistTaps="handled">
         
    <View style={KegvaStyle.main_container} >
      <Text style={KegvaStyle.app_title}>KegVa</Text>

      <View style={KegvaStyle.feilds_container}>
        <TextInput
          label="Username"
          value={userName}
          onChangeText={setUserName}
          mode="flat" 
          left={<TextInput.Icon icon="account" />}
          style={KegvaStyle.text_input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="flat"
          secureTextEntry={!visible}
          left={<TextInput.Icon icon="key" />}
          right={
            <TextInput.Icon
              icon={visible ? 'eye-off' : 'eye'}
              onPress={() => setVisible(!visible)}
            />
          }
          style={KegvaStyle.text_input}
        />
        <Pressable style={KegvaStyle.button} onPress={() => console.log('Pressed')}>
          <Text style={KegvaStyle.button_text}>Login</Text>
        </Pressable>

      </View>
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </PaperProvider>
  );
}
