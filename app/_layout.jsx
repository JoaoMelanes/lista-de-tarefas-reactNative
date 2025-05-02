import { Alert, Button, Image, ScrollView, Text, TextInput } from "react-native"
import Logo from '../assets/img/cheked.png'

export default function RootLayout() {

  return(
    <ScrollView>
      <Image source={Logo}/>
      <Text>Minhas Tarefas:</Text>
      <TextInput />
      <Button 
        title="Adicionar"
        onPress={() => Alert.alert("Oie")}
      />
    </ScrollView>
  )
}