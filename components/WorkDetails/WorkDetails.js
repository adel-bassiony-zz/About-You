import React, { useState } from 'react';
import { connect } from "react-redux";
import { StyleSheet, ScrollView, View, Text, Button, TouchableOpacity, TextInput, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const WorkDetails = props => {

    // ------------------------------------------------------
    // React: States
    // ------------------------------------------------------
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [city, setCity] = useState("")
    const [firstPhone, setFirstPhone] = useState("")
    const [secondPhone, setSecondPhone] = useState("")

    // ------------------------------------------------------
    // Component Functions
    // ------------------------------------------------------
    const submitWorkDetails = () => {
        props.saveWorkDetailsHandler(name, address, email, country, city, firstPhone, secondPhone)
        props.saveProgressHandler(66)
        props.navigation.navigate('Avatar')
    }

    // ------------------------------------------------------
    // Main Component View
    // ------------------------------------------------------
    return (
        <ScrollView style={styles.container}>

            {/* Main Title */}
            <Text style={styles.mainTitle}>Verify your company.</Text>

            {/* Form View */}
            <View style={styles.formView}>

                <View>
                    <Text style={styles.tip}>Entering this information correctly will facilitate the company verification process</Text>
                </View>

                {/* Company Name */}
                <View style={styles.formInput}>
                    <Text style={styles.label}>Company Name</Text>
                    <TextInput style={styles.textInput} placeholder="Enter your company name" value={name} onChangeText={text => setName(text)} />
                </View>

                {/* Address */}
                <View style={styles.formInput}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput style={styles.textInput} placeholder="Enter your address mail" value={address} onChangeText={text => setAddress(text)}/>
                </View>

                {/* Business Email */}
                <View style={styles.formInput}>
                    <Text style={styles.label}>Business Email</Text>
                    <TextInput style={styles.textInput} placeholder="Enter Your business mail" value={email} onChangeText={text => setEmail(text)}/>
                </View>

                {/* Country */}
                <View style={styles.formInput}>
                    <Text style={styles.label}>Country</Text>
                    <DropDownPicker
                        placeholder="Choose your country"
                        items={[
                            {label: 'Egypt', value: 20},
                            {label: 'Saudi Arabia', value: 21},
                            {label: 'United Arab Emirates', value: 22},
                        ]}
                        defaultValue={country}
                        containerStyle={{height: 40}}
                        style={{borderWidth: 0, padding: 0, margin: 0}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa', position: 'absolute', zIndex: 9999}}
                        onChangeItem={item => setCountry(item.value)}
                    />
                </View>

                {/* City */}
                <View style={styles.formInput}>
                    <Text style={styles.label}>Country</Text>
                    <DropDownPicker
                        placeholder="Choose your country"
                        items={[
                            {label: 'Cairo', value: 5},
                            {label: 'Giza', value: 6},
                            {label: '6 October', value: 7},
                        ]}
                        defaultValue={city}
                        containerStyle={{height: 40}}
                        style={{borderWidth: 0, padding: 0, margin: 0}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => setCity(item.value)}
                    />
                </View>

                {/* First Phone */}
                <View style={styles.formInputGroup}>
                    <View style={styles.formInputGroupPrepend}>
                        <Text>+20</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Company Phone Number</Text>
                        <TextInput style={styles.textInput} placeholder="Enter your phone number" value={firstPhone} onChangeText={text => setFirstPhone(text)}/>
                    </View>
                </View>

                {/* Second Phone */}
                <View style={styles.formInputGroup}>
                    <View style={styles.formInputGroupPrepend}>
                        <Text>+20</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Company Phone Number</Text>
                        <TextInput style={styles.textInput} placeholder="Enter your phone number" value={secondPhone} onChangeText={text => setSecondPhone(text)}/>
                    </View>
                </View>

            </View>

            {/* Actions Buttons */}
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => props.navigation.navigate('PersonalDetails')}>
                    <Text style={styles.backButtonText}>Back</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={submitWorkDetails}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // flexDirection: "column",
        // backgroundColor: "#F4F4F4",
        // marginVertical: 20,
        // paddingHorizontal: 15,
        // height: "100%"
    },
    mainTitle: {
        fontSize: 20,
        marginTop: 50,
        textAlign: "center",
        fontWeight: "bold",
        color: "#334355"
    },
    tip: {
        color: "#686D71",
        fontSize: 12,
        width: "100%",
        textAlign: "center",
        paddingVertical: 20
    },
    formView: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        shadowColor: "#000",
        shadowRadius: 20,
        padding: 15,
    },
    formInput: {
        padding: 10,
        borderColor: "#F0EEEF",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5
    },
    formInputGroup: {
        flexDirection: "row",
        padding: 10,
        borderColor: "#F0EEEF",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 5
    },
    formInputGroupPrepend: {
        borderRightColor: "#F0EEEF",
        borderRightWidth: 1,
        marginRight: 10,
        paddingRight: 15,
        paddingLeft: 10,
        paddingTop: 10
    },
    label: {
        fontSize: 12,
        fontWeight: "600",
    },
    textInput: {
        fontSize: 14,
        paddingTop: 10,
        fontWeight: "600",
        width: "90%"
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

// Map Dispatch from Redux to component props
const mapDispatchToProps = dispatch => {
    return {
        saveWorkDetailsHandler: (workName, workEmail, workAddress, workCountry, workCity, workFirstPhone, workSecondPhone) => dispatch({ type: 'Save_Work_Details', workName: workName, workEmail: workEmail, workAddress: workAddress, workCountry: workCountry, workCity: workCity, workFirstPhone: workFirstPhone, workSecondPhone: workSecondPhone }),
        saveProgressHandler: (progress) => dispatch({ type: 'Save_Progress', progress: progress}),
    };
};

export default connect(null, mapDispatchToProps)(WorkDetails);