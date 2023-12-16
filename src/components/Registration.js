import React, {useState} from "react";

const Registration = ()=>{
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    // Password validation
    setPasswordValid(newPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    // Confirm password validation
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  const handleSubmit = () => {
    
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Form can not be submitted");
    }
  };


    return(

      
<div id="form">
        <div>
      <div>
        <label>Email:</label>
        <br/>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          style={{width:"100%", borderColor: emailValid ? "green" : "red"}}
        ></input>
        {emailValid ? null : <p style={{color:"red"}}>Invalid email fromat</p>}
      </div>

      <div>
        <label>Password:</label>
        <br/>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          style={{width:"100%", borderColor: passwordValid ? "green" : "red" }}
        ></input>
        {passwordValid ? null : (
          <p style={{color:"red"}}>Password must be at least 8 characters long</p>
        )}
      </div>

      <div>
        <label>Confirm Password:</label>
        <br/>
        <input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          style={{width:"100%", borderColor: confirmPasswordValid ? "green" : "red" }}
        />
        {confirmPasswordValid ? null : <p style={{color:"red"}}>Passwords do not match</p>}
      </div>

      <button id="button" onClick={handleSubmit}>Sign up</button>
      </div>
        </div>
    )
}
export default Registration;