import React, { useState } from 'react';
import { connect } from "react-redux";
import { StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput, Image } from 'react-native';

const ProgressBar = props => {
    return (
        <View style={styles.container}>

            {/* Progress Bar */}
            <View style={[styles.progressBarContainer]}></View>
            <View style={[styles.progressBar, {width: `${props.progress}%`}]}></View>

            {/* Steps */}
            <View style={styles.stepsContainer}>
                <View style={props.progress > 30 ? styles.activeIconContainer : styles.iconContainer}>
                    <Image source={require('../../assets/user.png')} style={props.progress > 30 ? styles.activeIcon : styles.icon} />
                </View>
                <View style={props.progress > 60 ? styles.activeIconContainer : styles.iconContainer}>
                    <Image source={require('../../assets/building.png')} style={props.progress > 60 ? styles.activeIcon : styles.icon} />
                </View>
                <View style={props.progress > 90 ? styles.activeIconContainer : styles.iconContainer}>
                    <Image source={require('../../assets/photos.png')} style={props.progress > 90 ? styles.activeIcon : styles.icon} />
                </View>
                <View style={props.progress == 100 ? styles.activeIconContainer : styles.iconContainer}>
                    <Image source={require('../../assets/shield.png')} style={props.progress == 100 ? styles.activeIcon : styles.icon} />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4F4F4",
        paddingTop: 70,
        paddingBottom: 30,
        paddingHorizontal: 20,
        flexDirection: "row",
        width: "100%"
    },
    progressBarContainer: {
        backgroundColor: "#F4F4F4",
        height: 5,
        borderRadius: 20,
        borderColor: "#ffffff",
        borderWidth: 5,
        padding: 5,
        width: "99%",
    },
    progressBar: {
        position: "absolute",
        marginTop: 75,
        marginHorizontal: 20,
        zIndex: 9999,
        backgroundColor: "#006CF5",
        height: 5,
        borderRadius: 20,
        padding: 5,
    },
    stepsContainer: {
        position: "absolute",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 60,
        width: "105%",
        paddingLeft: 20,
        zIndex: 9999
    },
    iconContainer: {
        backgroundColor: "#fff",
        padding: 10,
        borderColor: "#F4F4F4",
        borderWidth: 2,
        borderRadius: 50
    },
    activeIconContainer: {
        backgroundColor: "#fff",
        padding: 10,
        borderColor: "#006CF5",
        borderWidth: 2,
        borderRadius: 50
    },
    icon: {
        resizeMode: "contain",
        width: 20,
        height: 20,
        tintColor: "#ACACAC",
    },
    activeIcon: {
        resizeMode: "contain",
        width: 20,
        height: 20,
        tintColor: "#006CF5",
    }
});

// Map States from Redux to component props
const mapStateToProps = state => {
    return {
        progress: state.register_reducer.progress,
    };
};

export default connect(mapStateToProps)(ProgressBar);