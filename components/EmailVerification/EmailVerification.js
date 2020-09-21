import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const EmailVerification = props => {
    return (
        <View style={styles.container}>

            {/* Main Title */}
            <Text style={styles.mainTitle}>You're all set, Ready?</Text>

            <View style={styles.cardView}>
                <Image source={require('../../assets/inbox.png')} style={{width: 150, height: 150, marginTop: 20}} />
                <Text style={styles.cardTitle}>We will send a message for this email</Text>
                <Text style={styles.email}>example@example.com</Text>
            </View>

            {/* Actions Buttons */}
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.navigate('Avatar')}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={() => props.navigation.navigate('Success')}>
                    <Text style={styles.nextButtonText}>Confirm</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#F4F4F4",
        paddingVertical: 50,
        paddingHorizontal: 15,
        height: "100%"
    },
    mainTitle: {
        fontSize: 20,
        marginTop: 50,
        textAlign: "center",
        fontWeight: "bold",
        color: "#334355"
    },
    cardView: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowRadius: 20,
        padding: 25,
        width: "100%",
    },
    cardTitle: {
        textAlign: "center",
        color: "#FC605D",
        fontSize: 18,
        fontWeight: "800",
        marginTop: 60,
        marginVertical: 5
    },
    email: {
        color: "#334355",
        textAlign: "center",
        fontSize: 24,
        fontWeight: "600"
    },
    actionsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "flex-end",
        marginTop: 20
    },
    backButton: {
        backgroundColor: "#EAE8E9",
        borderRadius: 10,
        textAlign: "center",
        width: "35%",
        padding: 10
    },
    nextButton: {
        backgroundColor: "#227BF7",
        borderRadius: 10,
        textAlign: "center",
        width: "60%",
        padding: 10
    },
    backbutton: {
        color: "#000000",
        fontWeight: "500"
    },
    backButtonText: {
        color: "#ACACAC",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    nextButtonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
  });

export default EmailVerification;