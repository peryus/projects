import { useState } from "react";
import {
  Formik,
  Form as FormikForm,
} from "formik";
import * as Yup from "yup";
import Input from "./Input";

const validationSchema = Yup.object({
  name: Yup.string()
      .min(2, "Name must contain at least 2 characters")
      .max(30, "Name must contain no more than 30 characters")
      .required("Name is required"),

  email: Yup.string()
      .email("Enter a valid email address")
      .required("Email is required"),

  password: Yup.string()
      .min(6, "Password must contain at least 6 characters")
      .required("Password is required"),

  confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),
});

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function Form() {
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(values, { setSubmitting, resetForm }) {
    const userData = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    console.log("Submitted data:", userData);

    setSubmittedData(userData);
    setSubmitting(false);
    resetForm();
  }

  return (
      <div className="form-wrapper">
        <h1>Registration Form</h1>

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
          {({ isSubmitting, isValid, dirty }) => (
              <FormikForm className="registration-form">
                <Input
                    label="Name"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                />

                <Input
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                />

                <Input
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                />

                <Input
                    label="Confirm password"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Repeat your password"
                />

                <button
                    type="submit"
                    disabled={isSubmitting || !isValid || !dirty}
                >
                  {isSubmitting ? "Submitting..." : "Register"}
                </button>
              </FormikForm>
          )}
        </Formik>

        {submittedData && (
            <div className="submitted-data">
              <h2>Registration completed</h2>

              <p>
                <strong>Name:</strong> {submittedData.name}
              </p>

              <p>
                <strong>Email:</strong> {submittedData.email}
              </p>
            </div>
        )}
      </div>
  );
}

export default Form;