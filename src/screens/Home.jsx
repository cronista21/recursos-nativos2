import { View, StyleSheet, Text, Button } from "react-native";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../utils/styles";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Header title="Home"/>
            <Text style={styles.content}>
                Bem-vindo(a)!
            </Text>
            <Button 
                mode="contained"
                onPress={()=> {navigation.navigate("DeviceInfo")}} 
                title="Informações do dispositivo"
            />
            <Button 
                mode="contained"
                onPress={()=>{navigation.navigate("BatteryInfo")}} 
                title="Informações da bateria"
            />
            <Button 
                mode="contained"
                onPress={()=>{navigation.navigate("ScreenOrientation")}} 
                title="Orientação da tela"
            />
            <Button 
                mode="contained"
                onPress={()=>{navigation.navigate("Notificações")}} 
                title="Notificações"
            />
        </View>
    )
}