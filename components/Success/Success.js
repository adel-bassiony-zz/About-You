import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Success = props => {
    return (
        <View style={styles.container}>
            <View style={styles.cardView}>
                <Image source={require('../../assets/inbox.png')} style={{width: 150, height: 150, marginTop: 20}} />
                <Text style={styles.cardTitle}>Congratz, You successfully created your account.</Text>
                <Text style={styles.cardContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</Text>
                <Text style={[styles.cardContent, {marginTop: 60}]}>Didn't Recieve it?</Text>
                <View style={styles.cardFooter}>
                    <Text style={styles.cardContent}>Check your spam folder or </Text>
                    <TouchableOpacity>
                        <Text style={styles.link}>Resend Email</Text>
                    </TouchableOpacity>
                </View>

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
    cardView: {
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowRadius: 20,
        padding: 15,
        width: "100%",
    },
    cardTitle: {
        textAlign: "center",
        color: "#334355",
        fontSize: 18,
        fontWeight: "800",
        paddingHorizontal: 40,
        marginTop: 60,
        marginVertical: 10
    },
    cardContent: {
        textAlign: "center",
        color: "#334355",
        fontSize: 16,
        fontWeight: "600",
    },
    cardFooter: {
        textAlign: "center",
        color: "#334355",
        flexDirection: "row"
    },
    link: {
        color: "#FC605D",
        textDecorationLine: 'underline',
        textAlign: "center",
        fontSize: 14,
        fontWeight: "600"
    }
  });

export default Success;