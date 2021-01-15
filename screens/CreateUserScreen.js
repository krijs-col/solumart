import React , { useState } from 'react'
import { View, TextInput, ScrollView, Button, StyleSheet } from 'react-native';

const CreateUserScreen = () => {

    const [state, setstate] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleChangeText = (name, value) => {
        setstate({...state,[name]: value})
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Nombre" 
                onChangeText={(value)=> handleChangeText('name',value)}/>
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Email"
                onChangeText={(value)=> handleChangeText('email1',value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <TextInput placeholder="Teléfono"
                onChangeText={(value)=> handleChangeText('phone',value)}
                />
            </View>
            <View style={styles.inputGroup}>
                <Button title="Guardar" onPress={() => console.log(state)}></Button>
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