import * as Yup from "yup";

const required = "Le champ est requis";
const minLength = (field: string) => `Le ${field} est trop court`;
const maxLength = (field: string) => `Le ${field} est trop long`;
const invalidEmail = "L'email est invalide";

const name = "nom";
const password = "mot de passe";

export default Yup.object().shape({
  email: Yup.string().email(invalidEmail).required(required),
  name: Yup.string()
    .min(3, minLength(name))
    .max(20, maxLength(name))
    .required(required),
  password: Yup.string()
    .min(6, minLength(password))
    .max(50, maxLength(password))
    .required(required),
});
