import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { style } from "@mui/system";
import { styled } from "@material-ui/core";

export const FormThirdStep = formikProps => {
  const { errors, touched } = formikProps;

  return (
    <>
    <label>investment details </label>
    <label> Account type
    <label>
      <Field
        name="accountType"
        value="personal "
        type= "radio"
        margin="normal"

       
      />
      Personal 
      </label>
       
       <label>
       <Field
        name="accountType"
        value="Non"
        type= "radio"
        margin="normal"

       
      />
      Company 
       </label>
       </label>

       

    




    
    </>
  );
};


