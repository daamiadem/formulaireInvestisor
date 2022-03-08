import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";
import { style } from "@mui/system";
import { styled } from "@material-ui/core";

export const FormSecondStep = formikProps => {
  const { errors, touched } = formikProps;

  return (
    <>
    <label className="AcreditStatus">Accrediation status </label>
    
    <label>
    Are you an accredited investir 
      
      <label>
      <Field
        name="status"
        value="1"
        type= "radio"
        margin="normal"

       
      />
      Oui
      </label>
       
       <label>
       <Field
        name="status"
        value="0"
        type= "radio"
        margin="normal"

       
      />
      Non
       </label>
       </label>

      <label>

       <Field
        name="accreditationform"
        value="1"
        type= "radio"
        margin="normal"
      />
      I am an accredited investor because I had income exceeding $200,000, or income with my spouse (or spousal equivalent) exceeding $300,000, each of the past two years and expect the same this year.
      </label>




      <label>

       <Field
        name="accreditationform"
        value="2"
        type= "radio"
        margin="normal"
      />
      I am an accredited investor because I have individual net worth, or joint net worth with my spouse (or spousal equivalent), that exceeds $1 million.
      </label>

     
      <label>

       <Field
        name="accreditationform"
        value="3"
        type= "radio"
        margin="normal"
      />
I am an accredited investor because I invest on behalf of a trust with at least $5 million in assets and I have sufficient knowledge to evaluate the merits and risks of startup investing.      </label>

      <label>

       <Field
        name="accreditationform"
        value="4"
        type= "radio"
        margin="normal"
      />
I am an accredited investor because I currently hold one of the following FINRA administered licences: Series 7, Series 65, or Series 82.
      </label>


      
    </>
  );
};


