import React, { useReducer } from 'react';

const initialState = {
  first_name: "John",
  last_name: "Smith",
  department: "operations"
};

function myReducer(state, action) {
  switch (action.type) {
    case 'changeDepartmentToIT':
      return {
        ...state,
        department: 'IT'
      };
    case 'changeDepartmentToSecurity':
      return {
        ...state,
        department: 'Security'
      };
    default:
      throw new Error();
  }
}

export default function ReducerExample() {
  const [state, dispatch] = useReducer(myReducer, initialState);
  
  return (
    <div>
      <p>First Name: {state.first_name}</p>
      <p>Last Name: {state.last_name}</p>
      <p>User Department: {state.department}</p>
      <button onClick={() => dispatch({type: 'changeDepartmentToIT'})}>Change User Department to IT</button>
      <button onClick={() => dispatch({type: 'changeDepartmentToSecurity'})}>Change User Department to Security</button>
    </div>
  );
}
