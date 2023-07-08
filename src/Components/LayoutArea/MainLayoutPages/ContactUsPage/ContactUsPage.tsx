import { useForm } from "react-hook-form";
import "./ContactUsPage.css";
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import FormValidationModel from "../../../Models/formValidationModel";
import dataService from "../../../../Services/DataService";
import { toastCSS } from "../../ToastNotify/ToastNotify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function ContactUsPage(): JSX.Element {
  const { register, handleSubmit, reset } = useForm<FormValidationModel>();
  const navigate = useNavigate()


  async function send(params: FormValidationModel) {
    try {
      dataService.sendEmailService(params);
      toast.success("Message was sent!", toastCSS);
      navigate("/home")
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message, toastCSS);
    }
  }

  return (
    <div className="ContactUsPage">
      <form onSubmit={handleSubmit(send)}>
        <Box>
          {/* Title */}
          <Typography variant="h3" className="FormTitleText">
            Contact Us
          </Typography>

          <Typography variant="h5" className="FormContactText">
            Contact us and we will get back to you as soon as possible
          </Typography>

          <Grid container rowSpacing={1}>
            {/* First Name */}
            <Grid item xs={12} sm={6} md={6}>
              <Typography>First name</Typography>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                {...register(
                  "firstName",
                  FormValidationModel.firstNameValidation
                )}
                required
              />
            </Grid>
            {/* Last Name */}
            <Grid item xs={12} sm={6} md={6}>
              <Typography>Last name</Typography>
              <TextField
                variant="outlined"
                fullWidth
                type="text"
                {...register(
                  "lastName",
                  FormValidationModel.lastNameValidation
                )}
                required
              />
            </Grid>
            {/* Email */}
            <Grid item xs={12} sm={12} md={12} className="TextEmailBox">
              <Typography>Email</Typography>
              <TextField
                fullWidth
                variant="outlined"
                {...register("email", FormValidationModel.emailValidation)}
                required
              />
            </Grid>
            {/* Phone */}
            <Grid item xs={12} sm={12} md={12} className="TextEmailBox">
              <Typography>Phone</Typography>
              <TextField
                fullWidth
                variant="outlined"
                type="phone"
                {...register("phone", FormValidationModel.PhoneValidation)}
                required
              />
            </Grid>
            {/* Message */}
            <Grid item xs={12} sm={12} md={12} className="TextEmailBox">
              <Typography>Message</Typography>
              <TextareaAutosize
                minRows={4}
                className="formTextFieldArea"
                {...register("message", FormValidationModel.messageValidation)}
              />
            </Grid>
            <ButtonGroup fullWidth className="ButtonGroupForm">
              <Button
                className="ButtonForm"
                variant="contained"
                startIcon={<SendIcon />}
                type="submit"
              >
                Submit
              </Button>
              <Button
                variant="contained"
                startIcon={<DeleteForeverIcon />}
                onClick={() => reset()}
              >
                Clear
              </Button>
            </ButtonGroup>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default ContactUsPage;

// <form action="">
// <Typography variant="h3">Contact Us</Typography>
// <Typography variant="h5">
//   Contact us and we will get back to you as soon as possible
// </Typography>
// <div className="ContactUsHeader">
//   <TextField label="First Name" variant="outlined" className="TextBox" />
//   <TextField label="Last Name" variant="outlined" className="TextBox"/>
// </div>
// </form>

// צור קשר איתנו ואנחנו נחזור אליכם בהקדם האפשרי

// <label htmlFor=""> Last name </label>
// <input type="text" />

// <label htmlFor=""> Email </label>
// <input type="email" />

// <label htmlFor=""> Phone </label>
// <input type="email" />

// <label htmlFor="">Message</label>
// <textarea name="" id="" cols={30} rows={10}></textarea>
