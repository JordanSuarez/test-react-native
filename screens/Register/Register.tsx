import React from "react";
import { useFormik } from "formik";

import Form from "../../components/Form/Form";
import { LOGIN } from "../../navigation/constant";

import inputsProps from "./helpers/inputProps";
import RegisterSchema from "./helpers/RegisterSchema";

type Props = {
  userRegister: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;
  navigation: string[];
};

export default function Register({
  userRegister,
  navigation,
}: Props): JSX.Element {
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
    const { name, email, password } = values;
    userRegister(name, email, password).then(() => {
      navigation.push(LOGIN);
    });
    setSubmitting(false);
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
