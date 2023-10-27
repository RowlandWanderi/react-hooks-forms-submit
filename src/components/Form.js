import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData]= useState([])

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  //Add state for holding error messages
  const[error, setErrors] = useState([])
function handleSubmit(event){
              event.preventDefault()
              //the first name is always required so use an if statement to check its presence
              if(firstName.length>0){
              const formData ={
                firstName:firstName,
                lastName:lastName,
              }
                const dataArray = [...submittedData,formData]
                setSubmittedData(dataArray)
                //clears out the input field after submitting the form
                setFirstName("")
                setLastName("")
                setErrors([])
              }else{
                setErrors(["First name is required"])
              }
            }
          const listOfSubmissions = submittedData.map((data, index)=>{
            return (
              <div key={index}>
                {data.firstName} {data.lastName}
              </div>
          )
          })
  return (
    <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={handleFirstNameChange} value={firstName} />
          <input type="text" onChange={handleLastNameChange} value={lastName} />
          <button type="submit">Submit</button>
        </form>
        {/*this is where we conditionally show the user the errors */}
        {error.lenght > 0 ? error.map((error,index) => (<p key ={index} style={{color:"red"}}>{error}</p>)) : null }
        <h1>LIST OF SUBMISSIONS</h1>
        {listOfSubmissions}
    </div>
  );
}

export default Form;
