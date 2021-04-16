import React from "react";
import { useFormik } from "formik";
import firebase from "firebase";

import Form from "../../components/Form/Form";

import inputsProps from "./helpers/inputProps";
import RegisterSchema from "./helpers/RegisterSchema";

export default function Register(): JSX.Element {
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
    validationSchema: RegisterSchema,
    initialValues: { email: "", password: "", name: "" },
    onSubmit: () => onSubmit(),
  });

  const onSubmit = () => {
    const { email, password, name } = values;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser?.uid)
          .set({
            name,
            email,
          });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setSubmitting(false));
  };

  return (
    <Form
      title={"Inscription"}
      buttonLabel={"S'inscrire"}
      // @ts-ignore
      inputs={inputsProps(handleChange, handleBlur, errors, touched)}
      isSubmitting={isSubmitting}
      onPress={handleSubmit}
    />
  );
}
