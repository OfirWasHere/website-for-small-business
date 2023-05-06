import FormValidationModel from "../Components/Models/formValidationModel";
import emailjs from 'emailjs-com';
import appConfig from "../Utils/AppConfig";

class DataService {
    public async sendEmailService(emailData:FormValidationModel): Promise<void> {
        console.log(emailData);
        emailjs.init(appConfig.EmailPublicId);
        const response = await emailjs.send(appConfig.EmailServiceId,appConfig.EmailTemplateId, {
            firstName: emailData.firstName,
            lastName: emailData.lastName,
            email: emailData.email,
            phone: emailData.phone,
            message: emailData.message,
        })
        console.log('Email sent:', response);
        return;
    }
}

const dataService = new DataService();
export default dataService;