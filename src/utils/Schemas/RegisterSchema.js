import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const emailSchema =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// const phoneNumber =
//   /^([0]{1}|\+?[2][3][4])([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g;

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .matches(emailSchema, {
      message: "Invalid Email Address",
    })
    .required("Required"),
  username: yup
    .string()
    .min(
      4,
      "username must be minimum of 4 characters and maximum of 13 characters"
    )
    .max(13, "username must be maximum of 13 characters")
    .required(),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, {
      message:
        "Password must contain min 8 characters, 1 uppercase,1 lowercase and 1 numeric digit",
    })
    .required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
});

// export const advancedSchema = yup.object().shape({
//   username: yup
//     .string()
//     .min(3, "Username must be at least 3 characters long")
//     .required("Required"),
//   jobType: yup
//     .string()
//     .oneOf(["designer", "developer", "manager", "other"], "Invalid Job Type")
//     .required("Required"),
//   acceptedTos: yup
//     .boolean()
//     .oneOf([true], "Please accept the terms of service"),
// });
