import React, { useEffect, useState } from "react";
import "./style.css";
import { useDispatch,useSelector } from "react-redux";
import ImageAssets from "../../../assets"
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import { Search as SearchIcon } from "@material-ui/icons";
import {  Card,
  Container,
  Button,
  Typography,
  Grid,
  Box,} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {addSagaFanSignup,addSagaTalentSignup} from "../state/actions";

const SignUpContainer = (props) => {
  const {successMessage} = useSelector((state) => state.auth);
  console.log("successMessage............2222.",successMessage);

  const { history } = props;
  const dispatch = useDispatch();
//VALIDATE...............
const validate = () => {
  let isValid = true;
  const regX = new RegExp(
    /^[a-zA-Z0-9_]+(\.[_a-zA-Z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/
  );
  const paawordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/);
  const usernameRegex = /^[a-z_-]{5,}$/
  if (!firstName) {
    setFirstNameValidationError(true);
    isValid = false;
  }
  if (!lastName) {
    setLastNameValidationError(true);
    isValid = false;
  }
  if (!userName || userName.length < 4 || !usernameRegex.test(userName)) {
    setUserNameValidationError(true);
    isValid = false;
  }
  if (!email || !regX.test(email)) {
    setEmailValidationError(true);
    isValid = false;
  }
  // if (!timeZone) {
  //   setTimeZoneValidationError(true);
  //   isValid = false;
  // }
  if (!password || password.length < 7 || !paawordRegex.test(password)) {
    setPasswordValidationError(true);
    isValid = false;
  }
  return isValid;
};
useEffect(() => {
  // effect
  if (successMessage!==undefined && successMessage!=='') {
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setTimeZone("");
    setPassword("")
  }
  return () => {};
},[])
useEffect(() => {
  // effect
  if (successMessage!==undefined && successMessage!=='') {
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setTimeZone("");
    setPassword("")
  }
  return () => {};
},[successMessage])

//handle sign up/.................
const handleSignUp= async () => {
  if (validate()) {
    const payload = {
      first_name:firstName,
      last_name:lastName,
      username:userName,
      email:email,
      password:password,
      timezone:"America/New_York",
      captcha: true 
    };
    if(fanSignupButton === true && tallentSignupButton === false){
      dispatch(addSagaFanSignup(payload));
    }
    if(tallentSignupButton=== true && fanSignupButton === false){
      dispatch(addSagaTalentSignup(payload));
    }
  }

}
  //set hooks..........................
  const [fanSignupButton, setFanSignupButton] = useState(true);
  const [tallentSignupButton, setTallentSignupButton] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [firstNameValidationError, setFirstNameValidationError] = useState(
    false
  );
  const [lastName, setLastName] = useState("");
  const [lastNameValidationError, setLastNameValidationError] = useState(
    false
  );
  const [userName, setUserName] = useState("");
  const [userNameValidationError, setUserNameValidationError] = useState(
    false
  );
  const [email, setEmail] = useState("");
  const [emailValidationError, setEmailValidationError] = useState(
    false
  );
  const [timeZone, setTimeZone] = useState("");
  const [timeZoneValidationError, setTimeZoneValidationError] = useState(
    false
  );
  const [password, setPassword] = useState("");
  const [passwordValidationError, setPasswordValidationError] = useState(
    false
  );
      //change timezone.........
const handelPasswordChange = (event) => {
  if (passwordValidationError) {
    setPasswordValidationError(false);
  }
  setPassword(event.target.value);
};
    //change timezone.........
const handelTimeZoneChange = (event) => {
  if (timeZoneValidationError) {
    setTimeZoneValidationError(false);
  }
  setTimeZone(event.target.value);
};
  //changeEmaile..........
const handelEmailChange = (event) => {
  if (emailValidationError) {
    setEmailValidationError(false);
  }
  setEmail(event.target.value);
};
//changeFirstName..........
const handelFirstNameChange = (event) => {
  if (firstNameValidationError) {
    setFirstNameValidationError(false);
  }
  setFirstName(event.target.value);
};
//changeLasttName..........
const handelLastNameChange = (event) => {
  if (lastNameValidationError) {
    setLastNameValidationError(false);
  }
  setLastName(event.target.value);
};
//changeUserName..........
const handelUserNameChange = (event) => {
  if (userNameValidationError) {
    setUserNameValidationError(false);
  }
  setUserName(event.target.value);
};
//fanSignupButtonActive
const fanSignupButtonActive = () =>{
  setFanSignupButton(true);
  setTallentSignupButton(false);
}
//talentSignupButtonActive
const talentSignupButtonActive = () =>{
  setFanSignupButton(false);
  setTallentSignupButton(true);
}
  return (
    <div className="mainContainer">
      <div className="headerdiv">
        <img className="headerImage"  src={ImageAssets.Fanconvo} alt="close-icon" />
        <div className="headerTextDiv" style={{flexDirection:'row',display:'flex'}}>
          <p className="headerText">Sign Up</p>
          <p className="headerText">Login</p>
        </div>
      </div>
      <p className="description">A marketplace for conversations, mentorships and performances.</p>
      <div style={{flexDirection:'row',display:'flex',marginTop:"-1%"}}>
        <p className="searchText">Search New Talent</p>
        <TextField
          className="searchField"
          type="text"
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment variant="filled" position="end">
                <IconButton style={{marginTop:"10px", color:"#10FF8D"}}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          value={""}
          onChange={()=>{}}
          onKeyDown={(e) => {}}
          margin="normal"
            />
      </div>
      <div className="fromField">
        <div className="buttonDiv">
        <Button onClick={fanSignupButtonActive} className={fanSignupButton===true?"buttonactive": "buttonInactive"}>FAN SIGNUP</Button>
        <Button 
        onClick= {talentSignupButtonActive}  
        className={tallentSignupButton===true?"buttonactive": "buttonInactive"}
        >TALENT SIGNUP</Button>
        </div>
        <div>
          <p className="fromHeader">Create Your Fan Account</p>
          <Box component="div" className="overlayDiv">  
            {/*FIRST NAME  */}
            <div className="form-input-holder">
              <Grid container alignItems="center">
                <Grid item className="input-container">
                  <p className="fromPlaceHolder">First Name *</p>
                  <TextField
                    className={"formTextField"}
                    type="text"
                    InputProps={{
                      disableUnderline: true,
                      style: { color: 'white'}
                    }}
                    value={firstName}
                    onChange={handelFirstNameChange}
                    onKeyDown={(e) => {}}
                    margin="normal"
                    placeholder="  First Name"
                  />
                  {firstNameValidationError && (
                    <div style={{width:"200px"}}>
                    <span className="error-msg " style={{color:"#D32F2F"}}>
                      {"Please enter valid first name"}
                    </span>
                    </div>
                  )}
                </Grid>
              </Grid>
            </div>
            {/* lastname */}
            <div className="form-input-holder">
              <Grid container alignItems="center">
                <Grid item className="input-container">
                <p className="fromPlaceHolder">Last Name *</p>
                  <TextField
                     className="formTextField"
                     type="text"
                     InputProps={{
                       disableUnderline: true,
                       style: { color: 'white'}
                     }}
                     value={lastName}
                    onChange={handelLastNameChange}
                     onKeyDown={(e) => {}}
                     margin="normal"
                     placeholder="  Last Name"
                  />
                  {lastNameValidationError && (
                    <div style={{width:"200px"}}>
                    <span className="error-msg " style={{color:"#D32F2F"}}>
                      {"Please enter valid last name"}
                    </span>
                    </div>
                  )}
                </Grid>
              </Grid>
            </div>
            {/* //username */}
            <div className="form-input-holder">
              <Grid container alignItems="center">
                <Grid item className="input-container">
                <p className="fromPlaceHolder">Username *</p>
                  <TextField
                     className="formTextField"
                     type="text"
                     InputProps={{
                       disableUnderline: true,
                       style: { color: 'white'}
                     }}
                     value={userName}
                     onChange={handelUserNameChange}
                     onKeyDown={(e) => {}}
                     margin="normal"
                     placeholder=" Username"
                  />
                  {userNameValidationError && (
                    <div style={{width:"200px"}}>
                    <span className="error-msg errorMeaasge" style={{color:"#D32F2F"}}>
                      {"Username must be minimum 5 characters, lower case alphanumeric and can contain any of the following special characters(_, . or -)."}
                    </span>
                    </div>
                  )}
                </Grid>
              </Grid>
            </div>
           {/* email */}
           <div className="form-input-holder">
              <Grid container alignItems="center">
                <Grid item className="input-container">
                <p className="fromPlaceHolder">Email *</p>
                  <TextField
                     className="formTextField"
                     type="text"
                     InputProps={{
                       disableUnderline: true,
                       style: { color: 'white'}
                     }}
                     value={email}
                     onChange={handelEmailChange}
                     onKeyDown={(e) => {}}
                     margin="normal"
                     placeholder="  email"
                  />
                  {emailValidationError && (
                    <div style={{width:"200px"}} >
                    <span className="error-msg" style={{color:"#D32F2F"}}>
                      {"Please enter valid password"}
                    </span>
                    </div>
                  )}
                </Grid>
              </Grid>
            </div>
            {/* timezone */}
            <div className="form-input-holder">
              <Grid container alignItems="center">
                <Grid item className="input-container">
                <p className="fromPlaceHolder">Timezonee *</p>
                  <TextField
                     className="formTextField"
                     type="text"
                     InputProps={{
                       disableUnderline: true,
                       style: { color: 'white'}
                     }}
                     value={timeZone}
                     onChange={handelTimeZoneChange}
                     onKeyDown={(e) => {}}
                     margin="normal"
                     placeholder="  Timezone"
                  />
                  {timeZoneValidationError && (
                    <div style={{width:"200px"}}>
                    <span className="error-msg " style={{color:"#D32F2F"}}>
                      {"Please enter valid timezone"}
                    </span>
                    </div>
                  )}
                </Grid>
              </Grid>
            </div>
           {/* password */}
           <div className="form-input-holder">
              <Grid container alignItems="center">
                <Grid item className="input-container">
                <p className="fromPlaceHolder">Paswworde *</p>
                  <TextField
                     className="formTextField"
                     type="text"
                     InputProps={{
                       disableUnderline: true,
                       style: { color: 'white'}
                     }}
                     value={password}
                     onChange={handelPasswordChange}
                     onKeyDown={(e) => {}}
                     margin="normal"
                     placeholder="  Password"
                  />
                  {passwordValidationError && (
                    <div style={{width:"200px"}}>
                    <span className="error-msg" style={{color:"#D32F2F"}}>
                      {"Password must be minimum 8 characters, alphanumeric with atleast one uppercase and one special character(!, @, #, $, %, ^, & or *)."}
                    </span>
                    </div>
                  )}
                </Grid>
              </Grid>
            </div>
            <div className="checkbosText">
              <p>
                I agree to that
                <Link to="/signup" activeclassname="active" className="coditionClass">
                  {`Terms and Conditions.`}
                </Link>
              </p>
              </div>
            <div className="mainSignupDiv">
              <Button
               className="buttonaSignUpctive"
                type="submit"
                fullWidth
                variant="contained"
                size="medium"
                color="primary"
                onClick={handleSignUp}
              >
                {"SIGN UP"}
              </Button>
            </div>
            <div className="loginLink">
              <p>Already have an account?
                <Link to="/signup" activeclassname="active" className="coditionClass">
                  {` Log in`}
                </Link>
              </p>
              </div>
          </Box>
        </div>

      </div>
    </div>
  );
};
export default SignUpContainer;
