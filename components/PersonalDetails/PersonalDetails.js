import React, { useState } from 'react';
import { connect } from "react-redux";
import { StyleSheet, ScrollView, View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const PersonalDetails = (props) => {

    // ------------------------------------------------------
    // React: States
    // ------------------------------------------------------
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [showPassword, setShowPassword] = useState(true)
    const [showConfirmPassword, setShowConfirmPassword] = useState(true)
    
    // ------------------------------------------------------
    // Component Functions
    // ------------------------------------------------------
    const submitPersonalDetails = () => {
        props.savePersonalDetailsHandler(name, email, country, phone, password, passwordConfirmation)
        props.saveProgressHandler(33)
        props.navigation.navigate('WorkDetails')
    }

    // ------------------------------------------------------
    // Main Component View
    // ------------------------------------------------------
    return (
        <ScrollView style={styles.container}>

            {/* Main Title */}
            <Text style={styles.mainTitle}>Tell Us More About Yourself</Text>

            {/* Form View */}
            <View style={styles.formView}>

                {/* Full Name */}
                <View style={styles.formInput}>
                    <Text style={styles.label}>Full Name</Text>
                    <TextInput style={styles.textInput} placeholder="Enter Your Full Name" value={name} onChangeText={text => setName(text)} />
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
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => setCountry(item.value)}
                    />
                </View>

                {/* Phone */}
                <View style={styles.formInputGroup}>
                    <View style={styles.formInputGroupPrepend}>
                        <Text>+20</Text>
                    </View>
                    <View>
                        <Text style={styles.label}>Phone Number</Text>
                        <TextInput style={styles.textInput} placeholder="Enter Your phone number" value={phone} onChangeText={text => setPhone(text)}/>
                    </View>
                </View>

                {/* Password */}
                <View style={styles.formInput}>
                    <Text style={styles.label}>Password</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <TextInput style={styles.textInput} secureTextEntry={showPassword} placeholder="Repeat your password" value={password} onChangeText={text => setPassword(text)} />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Image source={showPassword ? require('../../assets/visible.png') : require('../../assets/invisible.png')} style={styles.passwordIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Password Confirmation */}
                <View style={styles.formInput}>
                    <Text style={styles.label}>Repeat Password</Text>
                    <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                        <TextInput style={styles.textInput} secureTextEntry={showConfirmPassword} placeholder="Repeat your password" value={passwordConfirmation} onChangeText={text => setPasswordConfirmation(text)} />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <Image source={showConfirmPassword ? require('../../assets/visible.png') : require('../../assets/invisible.png')} style={styles.passwordIcon} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

            {/* Actions Buttons */}
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={{flexDirection: "row", alignContent: "center", marginTop: 10}}>
                    <Image source={require('../../assets/left_arrow.png')} style={{width: 10, height: 10, marginRight: 5, marginTop: 3}} />
                    <Text style={styles.backbutton}>Back to Login</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.nextButton} onPress={submitPersonalDetails}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
            </View>

        </ScrollView>
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
        alignContent: "center",
        marginTop: 20
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
    nextButtonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    passwordIcon: {
        width: 20,
        height: 20,
        opacity: 0.5,
        marginRight: 10,
    }
  });

// Map Dispatch from Redux to component props
const mapDispatchToProps = dispatch => {
    return {
        savePersonalDetailsHandler: (userName, userEmail, userCountry, userPhone, userPassword, userPasswordConfirmation) => dispatch({ type: 'Save_Personal_Details', userName: userName, userEmail: userEmail, userCountry: userCountry, userPhone: userPhone, userPassword: userPassword, userPasswordConfirmation: userPasswordConfirmation}),
        saveProgressHandler: (progress) => dispatch({ type: 'Save_Progress', progress: progress}),
    };
};

export default connect(null, mapDispatchToProps)(PersonalDetails);