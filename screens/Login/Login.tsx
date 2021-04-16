import * as React from "react";
import { useFormik } from "formik";
import firebase from "firebase";

import Form from "../../components/Form/Form";

import inputsProps from "./helpers/inputProps";
import LoginSchema from "./helpers/LoginSchema";

export default function Login() {
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    isSubmitting,
    setSubmitting,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "" },
    onSubmit: () => onSubmit(),
  });

  const onSubmit = () => {
    const { email, password } = values;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Form
      title={"Connexion"}
      buttonLabel={"Se connecter"}
      // @ts-ignore
      inputs={inputsProps(handleChange, handleBlur, errors, touched)}
      isSubmitting={isSubmitting}
      onPress={handleSubmit}
    />
  );
}
