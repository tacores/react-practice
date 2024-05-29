import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils.js";

const PasswordErrorMessage = () => {
  return (
    <small className="FieldError" style={{display: "block", color: "red"}}>Password should have at least 8 characters</small>
  );
};

function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    if (firstName.length === 0) {
        return false;
    }
    if (!validateEmail(email)) {
        return false;
    }
    if (password.value.length < 8) {
        return false;
    }
    if (role !== "individual" && role !== "business") {
        return false;
    }
    return true;
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({ value: "", isTouched: false });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // サブミットのデフォルト動作を抑止
    alert("Account created!");
    clearForm();
  };

  return (
    <form onSubmit={handleSubmit}>
    <fieldset>
        <h2>Sign Up</h2>
        <div className="Field">
        <label>
            First name <sup>*</sup>
        </label>
        <input placeholder="First name" value={firstName} onChange={(e)=>{setFirstName(e.target.value)}} />
        </div>
        <div className="Field">
        <label>Last name</label>
        <input placeholder="Last name" value={lastName} onChange={(e)=>{setLastName(e.target.value)}} />
        </div>
        <div className="Field">
        <label>
            Email address <sup>*</sup>
        </label>
        <input placeholder="Email address" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
        </div>
        <div className="Field">
        <label>
            Password <sup>*</sup>
        </label>
        <input placeholder="Password" type="password" value={password.value} onChange={(e)=>{
          //var newPassword = {...password}; // オブジェクトの場合はスプレッド演算子でコピーを作るのが作法
          //newPassword.value = e.target.value;
          //newPassword.isTouched = true;
          //setPassword(newPassword);
          
          // よりナイスな書き方
          // セッターにラムダ関数を渡すと、ステートを引数としてラムダ関数が呼び出されるらしい
          setPassword(prevState => {
            return {...prevState, value: e.target.value, isTouched: true};
          })
          }} />
        {password.isTouched && password.value.length < 8 && PasswordErrorMessage() } 
        </div>
        <div className="Field">
        <label>
            Role <sup>*</sup>
        </label>
        <select value={role} onChange={(e)=>{setRole(e.target.value)}} >
            <option value="role">Role</option>
            <option value="individual">Individual</option>
            <option value="business">Business</option>
        </select>
        </div>
        <button type="submit" disabled={!getIsFormValid()}>
        Create account
        </button>
    </fieldset>
    </form>
  );
}

export default RegisterForm;
