import React from "react";
import { useFormik } from "formik";
import { AnyAction, Dispatch } from "redux";
import { useNavigation } from "@react-navigation/native";

import Form from "../../components/Form/Form";
import { LOGIN } from "../../navigation/constant";

import inputsProps from "./helpers/inputProps";
import RegisterSchema from "./helpers/RegisterSchema";

type Props = {
  userRegister: (
    name: string,
    email: string,
    password: string
  ) => (dispatch: Dispatch<AnyAction>) => Promise<void>;
};

export default function Register({ userRegister }: Props): JSX.Element {
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
  const navigation = useNavigation();

  const onSubmit = () => {
    const { name, email, password } = values;
    userRegister(name, email, password)
      .then(() => navigation.navigate(LOGIN))
      .catch(() => console.log("error"))
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
