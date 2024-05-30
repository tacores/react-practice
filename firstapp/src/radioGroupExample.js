import * as React from "react";
import "./App.css";
//import { RadioGroup, RadioOption } from "./Radio";
import { useState } from "react";

export const MyRadioGroup = ({ onChange, selected, children }) => {
    // Use React.Children.map and React.cloneElement to clone the children
    // and pass the correct props to each RadioOption
    const MyRadioOptions = React.Children.map(children, child => {
      return React.cloneElement(child, { 
        onChange, 
        checked: child.props.value === selected, 
      }); 
    });
    return <div className="RadioGroup">{MyRadioOptions}</div>;
  };
  
export const MyRadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked prop to the input element
  return ( 
    <div className="RadioOption"> 
      <input 
        id={value} 
        type="radio" 
        name={value} 
        value={value} 
        checked={checked} 
        onChange={(e) => { 
          onChange(e.target.value); 
        }} 
      /> 
      <label htmlFor={value}>{children}</label> 
    </div> 
  ); 
};

function RadioGroupExample() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <MyRadioGroup onChange={setSelected} selected={selected}>
        <MyRadioOption value="social_media">Social Media</MyRadioOption>
        <MyRadioOption value="friends">Friends</MyRadioOption>
        <MyRadioOption value="advertising">Advertising</MyRadioOption>
        <MyRadioOption value="other">Other</MyRadioOption>
      </MyRadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default RadioGroupExample;
