import { LoadingButton } from "@mui/lab"
import { Typography, Stack, TextField, Paper } from "@mui/material"
import { useFormik } from "formik"
import { useState } from "react";
import * as yup from 'yup';
import { login } from "../utils/fetch";
import useAuth from "./hooks/useAuth";
import Notification from "./Notification";

type Values = {
  email: string
  password: string
}

const Form = () => {

  const { setIsLogin } = useAuth()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isShowAlert, setIsShowAlert] = useState<boolean>(false)
  const [alertText, setAlertText] = useState<string>('')

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
      password: yup
        .string()
        .required('Password is required'),
    }),
    onSubmit: async (values: Values) => {
      try {
        await login(values)
        setIsLogin(true)
        localStorage.setItem('isLogin', "true")
      } catch(err: any) {
        setIsShowAlert(true)
        setAlertText(err.response.data.message)
      } finally {
        setIsLoading(false)
      }
    }
  })

  const fields = [
    { name: "email", label: "Email" },
    { name: "password", label: "Password", type: "password" }
  ]

  return (
    <Paper sx={{ p: 3 }} elevation={10}>
      <form onSubmit={formik.handleSubmit}>
        <Typography variant="h5" textAlign="center">Login</Typography>
        <Stack display="flex" flexDirection="column" sx={{ pb: 1 }}>
          {fields.map(({ name, ...rest }: any) => {
            const value = formik.values[name as keyof Values]
            const touched = formik.touched[name as keyof Values]
            const error = formik.errors[name as keyof Values]
            return (
              <TextField
                name={name}
                key={name}
                value={value}
                onChange={formik.handleChange}
                error={touched && Boolean(error)}
                helperText={(touched && error) || " "}
                {...rest}
              />
            )
          })}
        </Stack>
        <LoadingButton
          loading={isLoading}
          variant="contained"
          type="submit"
          fullWidth
        >
          Submit
        </LoadingButton>
      </form>
      <Notification
        open={isShowAlert}
        onClose={() => setIsShowAlert(false)}
        title={alertText}
      />
    </Paper>
  )
}

export default Form