import * as React from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import dictionary from "../database";
import { Card,Header } from "react-native-elements";

export default class HomeScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            text: "",
            meaning: ""
        }
    }

    getWord = () => {
        var word = this.state.text.toLowerCase().trim()
        this.setState({ meaning: dictionary[word] })
    }

    render() {

        return (
            <View>
                <Header
                    backgroundColor="#122620"
                    centerComponent={{text:"Dictionary App", style:{marginTop:25, marginBottom:10,fontSize:25,color:"#F4EBD0",fontWeight:"bold"}}}
                />
                <TextInput style={styles.input} onChangeText={(text) => {
                    this.setState({ text: text })
                }}></TextInput>

                <TouchableOpacity style={styles.button} onPress={() => {
                    this.getWord()
                }}><Text style={styles.buttonText}>Check meaning</Text></TouchableOpacity>
                
                {
                    this.state.meaning === "" ? null: (
                        this.state.meaning === undefined ? (
                            <View style={{marginTop:40}}>
                                <Card><Text style={styles.card}>This is not a valid word!</Text></Card>
                            </View>
                        ) :
                        (
                            <View style={styles.container}>
                                <Card><View style={{flexDirection:"row"}}><Text style={styles.cardBold}>Word : </Text><Text style={styles.card}> {this.state.meaning.word}</Text></View></Card>
                                <Card><View style={{flexDirection:"row"}}><Text style={styles.cardBold}>LexicalCategory : </Text><Text style={styles.card}> {this.state.meaning.lexicalCategory}</Text></View></Card>
                                <Card><View style={{flexDirection:"row"}}><Text style={styles.cardBold}>Definition : </Text><Text style={styles.card}> {this.state.meaning.definition}</Text></View></Card>
                            </View>
                        )
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        marginTop: 25,
        padding: 15,
        borderWidth: 1,
        width: "80%",
        borderRadius: 5,
        textAlign: "center",
        alignSelf: "center",
        color:"#122620",
        fontSize:20
    },

    button: {
        marginTop: 25,
        padding: 15,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#F4EBD0"
    },

    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color:"#122620"
    },
    card:{
        color:"#122620",
        fontSize:15,
        width:"60%"

    },
    cardBold:{
        textAlign:"right",
        color:"#122620",
        fontSize:15,
        fontWeight:"bold",
        width:"40%"
    },
    container:{
        marginTop:25,
    }
})