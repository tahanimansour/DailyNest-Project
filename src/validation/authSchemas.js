import * as yup from 'yup'

export const sendCodeSchema = yup.object({
    email: yup.string().trim().required("Email Is Required").email("Invalid Email Format"),
})

export const resetPasswordSchema = yup.object({
    code: yup.string().trim().required("Code Is Required"),
    newPassword: yup.string().required("New Password Is Required")
    .min(6, "Password must be at least 6 char")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[0-9]/, "Password must contain a number"),
})

export const registerSchema=yup.object({
    fullName:yup.string().required("Full Name Is Required")
    .min(3,"Full Name must be at least 3 char"),
    userName:yup.string().required("User Name Is Required")
    .min(3,"User Name must be at least 3 char"),
    email:yup.string().required("Email Is Required")
    .email("Invalid Email Format"),
    password:yup.string().required("Password Is Required")
    .min(6,"Password must be at least 6 char")
    .matches(/[A-Z]/,"Password must contain an uppercase letter")
    .matches(/[a-z]/,"Password must contain an lowercase letter")
    .matches(/[0-9]/,"Password must contain a number"),
    phoneNumber:yup.string().required("PhoneNumber Is Required")
    .matches(/^05\d{8}$/, "Phone number must start with 05 and be 10 digits.")
})


export const loginSchema=yup.object({
    email:yup.string().required("Email Is Required")
    .email("Invalid Email Format"),
    password:yup.string().required("Password Is Required")
    .min(6,"Password must be at least 6 char")
    .matches(/[A-Z]/,"Password must contain an uppercase letter")
    .matches(/[a-z]/,"Password must contain an lowercase letter")
    .matches(/[0-9]/,"Password must contain a number")
})
