import React, { useState } from "react";
import { Formik, Form } from "formik";
import { FormFirstStep } from "../forms/FormFirstStep";
import {FormSecondStep} from "../forms/FormSeconStep"; 
import { FormThirdStep } from "../forms/FormThirdStep";
import { StepButton } from "./StepButton";
import { makeStyles } from "@material-ui/core/styles";
import { FormSuccess } from "../forms/FormSuccess";
const useStyles = makeStyles(theme => ({
    form: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  }));
  
  const renderStep = (step, values, errors, touched) => {
    switch (step) {
      case 1:
        return <FormFirstStep errors={errors} touched={touched} />;
      case 2:
        return <FormSecondStep errors={errors} touched={touched} />;    
      case 3:
        return <FormThirdStep values={values} />;
        case 4:
            return <FormSuccess values={values} />;
      default:
        return <FormFirstStep errors={errors} touched={touched} />;
    }
  };
  
const MultiStep = () => {
    const [step, setStep] = useState(1);
    const classes = useStyles();
    const investor = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      gender: "",
      DateOfBirth : "",
      city: "",
      state: "",
      country: "", 
      status:"", 
      accreditationform:"", 
      accountType:""
    };
    const handleSubmit = () => setStep(step => step + 1);

  
    const validate = values => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      }
  
      if (!values.lastName) {
        errors.lastName = "Required";
      }

      if (!values.DateOfBirth) {
        errors.DateOfBirth = "Required";
      }
      if (!values.email) {
        errors.email = "Required";
      }

      if (!values.city) {
        errors.city = "Required";
      }
  

      
      if (!values.state) {
        errors.state = "Required";
      }


      return errors;
    };
    return (
      <>
        <Formik
          enableReinitialize
          initialValues={{ ...investor }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ values, errors, touched }) => (
            <Form className={classes.form}>
              {renderStep(step, values, errors, touched)}
              <StepButton step={step} />
            </Form>
          )}
        </Formik>
      </>
    );
  };

  export default MultiStep ; 