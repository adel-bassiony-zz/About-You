import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Image, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import axios from "axios";

const Avatar = props => {

    // ------------------------------------------------------
    // React: States
    // ------------------------------------------------------
    const [image, setImage] = useState(null)

    // ------------------------------------------------------
    // Component Functions
    // ------------------------------------------------------
    useEffect(() => {
        getPermissionAsync()
    }, [])

    const getPermissionAsync = async () => {
        if (Platform.OS !== 'web') {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
    };
    
    const _pickImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            });
            if (!result.cancelled) {
                setImage(result.uri)
            }
            console.log(result);
        } catch (E) {
            console.log(E);
        }
    };

    // Register
    const register = () => {

        let requestBody = {
            "user_email": props.userEmail,
            "user_password": props.userPassword,
            "user_password_confirmation": props.userPasswordConfirmation,
            "lang": "ar",
            "created_by": null,
            "company_name": props.workName,
            "company_address": props.workAddress,
            "company_phone": props.workFirstPhone,
            "company_business_email": props.workEmail,
            "company_avatar": null,
            "company_country_id": props.workCountry,
            "company_city_id": props.workCity,
            "company_extra_data": props.userName,
            "user_full_name": props.userName,
            "user_phone": props.userPhone,
            "user_position": null,
            "user_nationality": null,
            "user_status": null,
            "user_is_admin": false,
            "user_extra_data[phone]": props.userName,
        }

        axios.post('https://id.safav2.io.safavisa.com/register', requestBody)
            .then(res => {
                console.log(res)
                // props.navigation.navigate('EmailVerification')
                // props.saveProgressHandler(100)
            })
            .catch(err => {
                console.log(err.response)
                if (err.response.status == 422) {                    
                    Alert.alert(
                        "Error 422",
                        "Please make sure you entered the correct data.",
                        { cancelable: true }
                    );
                } else if (err.response.status == 500) {
                    Alert.alert(
                        "Error 500",
                        "Something went wrong!",
                        { cancelable: true }
                    );
                }
            })
        
        props.saveProgressHandler(100)
        props.navigation.navigate('EmailVerification')
    }
    
    
    // ------------------------------------------------------
    // Main Component View
    // ------------------------------------------------------
    return (
        <View style={styles.container}>

            {/* Main Title */}
            <Text style={styles.mainTitle}>You're all set, Ready?</Text>

            <View style={styles.cardView}>
                <TouchableOpacity activeOpacity={0.5} onPress={_pickImage}>
                    {image ? <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 300 }} /> : <Image source={require('../../assets/add_profile_picture.png')} style={{ width: 150, height: 150, marginTop: 20 }} />}
                </TouchableOpacity>
                <Text style={styles.cardTitle}>Only images with a size lower than 500kb are allowed.</Text>
            </View>

            {/* Actions Buttons */}
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.navigate('WorkDetails')}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={register}>
                    <Text style={styles.nextButtonText}>Submit</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        backgroundColor: "#F4F4F4",
        marginTop: 20,
        marginBottom: 60,
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
        color: "#334355",
        fontSize: 16,
        fontWeight: "600",
        marginTop: 30
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

// Map States from Redux to component props
const mapStateToProps = state => {
    return {
        userName: state.register_reducer.userName,
        userEmail: state.register_reducer.userEmail,
        userCountry: state.register_reducer.userCountry,
        userPhone: state.register_reducer.userPhone,
        userPassword: state.register_reducer.userPassword,
        userPasswordConfirmation: state.register_reducer.userPasswordConfirmation,

        workName: state.register_reducer.workName,
        workEmail: state.register_reducer.workEmail,
        workAddress: state.register_reducer.workAddress,
        workCountry: state.register_reducer.workCountry,
        workCity: state.register_reducer.workCity,
        workFirstPhone: state.register_reducer.workFirstPhone,
        workSecondPhone: state.register_reducer.workSecondPhone,

        profilePicture: state.register_reducer.profilePicture,
    };
};

// Map Dispatch from Redux to component props
const mapDispatchToProps = dispatch => {
    return {
        saveProgressHandler: (progress) => dispatch({ type: 'Save_Progress', progress: progress}),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);