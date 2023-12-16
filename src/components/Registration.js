import React, {useState} from "react";

const Registration = ()=>{
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValid, setEmailValid] = useState("");
  const [passwordValid, setPasswordValid] = useState("");
  const [confirmPasswordValid, setConfirmPasswordValid] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(newEmail));
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordValid(newPassword.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    setConfirmPasswordValid(newConfirmPassword === password);
  };

  const handleSubmit = () => {
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form. Please check your inputs.");
    }
  };


  return (
    <div id="from" style ={{display:"flex", justifyContent:"center", paddingTop:"200px"}}>
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

      <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}
export default Registration