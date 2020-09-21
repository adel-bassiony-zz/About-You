import * as actionTypes from '../actions';

// Define initialState
const initialState = {
    progress: 0,
    userName: null,
    userEmail: null,
    userCountry: null,
    userPhone: null,
    userPassword: null,
    userPasswordConfirmation: null,
    workName: null,
    workEmail: null,
    workAddress: null,
    workCountry: null,
    workCity: null,
    workFirstPhone: null,
    workSecondPhone: null,
    profilePicture: null,
}

// Define the Auth Reducer
export default function register_reducer(state = initialState, action) {
    switch (action.type) {
        
        // Save Progress
        case actionTypes.Save_Progress:
            return {
                ...state,
                progress: action.progress,
            }

        // Save Personal Details
        case actionTypes.Save_Personal_Details:
            return {
                ...state,
                userName: action.userName,
                userEmail: action.userEmail,
                userCountry: action.userCountry,
                userPhone: action.userPhone,
                userPassword: action.userPassword,
                userPasswordConfirmation: action.userPasswordConfirmation,
            }
        
        // Save Work Details
        case actionTypes.Save_Work_Details:
            return {
                ...state,
                workName: action.workName,
                workEmail: action.workEmail,
                workAddress: action.workAddress,
                workCountry: action.workCountry,
                workCity: action.workCity,
                workFirstPhone: action.workFirstPhone,
                workSecondPhone: action.workSecondPhone,
            }
        
        // Save Work Details
        case actionTypes.Save_Profile_Picture:
            return {
                ...state,
                profilePicture: action.profilePicture,
            }
        
        // Auth: Default
        default:
            return state;
    }
};
