import React from "react";
import { Field } from "formik";
import TextField from "@material-ui/core/TextField";

export const FormFirstStep = formikProps => {
  const { errors, touched } = formikProps;
  return (
    <>
      <Field
        name="firstName"
        label="First Name"
        as={TextField}
        error={touched.firstName && errors.firstName}
        helperText={touched.firstName && errors.firstName}
        margin="normal"

      />


      <Field
        name="lastName"
        label="Last Name"
        as={TextField}
        error={touched.lastName && errors.lastName}
        helperText={touched.lastName && errors.lastName}
        margin="normal"

      />
      <label>
        Gender
      
      <label>
      <Field
        name="gender"
        value="male"
        type= "radio"
        margin="normal"
        error={touched.gender && errors.gender}
        helperText={touched.gender && errors.gender}
        

       
      />
      Male
      </label>
       
       <label>
       <Field
        name="Gender"
        value="Female"
        type= "radio"
        margin="normal"

       
      />
      Female
       </label>
       </label>


        <label>
          Date of Birth
       <Field
       name = "DateOfBirth"
        label ="Date Of Birth"
        type="date"
        error={touched.lastName && errors.lastName}
        helperText={touched.lastName && errors.lastName}
        
      />
      </label>

      <Field
        type="email"
        name="email"
        label="Email Address"
        margin="normal"
        as={TextField}
        error={touched.email && errors.email}
        helperText={touched.email && errors.email}
      />
      

<Field name="city" label="City" as={TextField} 
error={touched.city && errors.city}
helperText={touched.city && errors.city}
/>

<Field name="state" label="State" as={TextField}
error={touched.state && errors.state}
helperText={touched.state && errors.state}
/>

    </>
  );
};