import React , { useState } from 'react'
import { View, TextInput, ScrollView, Button, StyleSheet } from 'react-native';

const CreateUserScreen = () => {

    const [state, setstate] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    })

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre"/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email"/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Teléfono"/>
            </View>
            <View style={styles.inputGroup}>
                <Button title="Guardar"></Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,

    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: "#fff" 
    }
})

export default CreateUserScreen