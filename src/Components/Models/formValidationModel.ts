import { RegisterOptions } from "react-hook-form";

class FormValidationModel {
    public firstName: string;
    public lastName: string;
    public email: string;
    public phone: string;
    public message: string;
    
    public static firstNameValidation:RegisterOptions = {
        required: {value:true, message:"Missing first Name"},
        minLength: {value:2, message:"First name cannot be less than 2 chars"},
        maxLength: {value: 30, message:"first name cannot be longer than 30 chars"}
    }
    public static lastNameValidation:RegisterOptions = {
        required: {value:true, message:"Missing last Name"},
        minLength: {value:2, message:"last name cannot be less than 2 chars"},
        maxLength: {value: 30, message:"last name cannot be longer than 30 chars"}
    }
    public static emailValidation:RegisterOptions = {
        required: {value:true, message:"Missing email"},
        minLength: {value:2, message:"email cannot be less than 2 chars"},
        maxLength: {value: 100, message:"email cannot be longer than 100 chars"}
    }
    public static PhoneValidation:RegisterOptions = {
        required: {value:true, message:"Missing phone number"},
        minLength: {value:5, message:"phone cannot be less than 5 chars"},
        maxLength: {value: 100, message:"email cannot be longer than 20 chars"}
    }
    public static messageValidation:RegisterOptions = {
        required: {value:true, message:"Missing message"},
        minLength: {value:0, message:"message cannot be less than 0 chars"},
        maxLength: {value: 1000, message:"message cannot be longer than 1000 chars"}
    }
}



export default FormValidationModel;