import React, { useState } from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export default function SignIn() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          // same shape as initial values
          console.log(values);

          try {
            const response = await axios.post("/signin", values);

            navigate("/home");
          } catch (err) {}
        }}
      >
        {(props) => (
          <div className="flex h-screen justify-center justify-items-center  bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="flex justify-center items-center ">
              <form onSubmit={props.handleSubmit}>
                <Paper elevation={3} className="px-8 py-8">
                  <div className="flex p-2 space-x-3 items-center">
                    <div className="basis-[40%]">
                      <FormLabel>User Name</FormLabel>
                    </div>
                    <TextField
                      required
                      fullWidth
                      name="username"
                      id="outlined-required"
                      label="User Name"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.username}
                    />
                  </div>

                  {props.errors.username && props.touched.username && (
                    <div className="text-red-700 text-center">
                      {props.errors.username}
                    </div>
                  )}

                  <div className="flex p-2 space-x-3 items-center">
                    <div className="basis-[40%]">
                      <FormLabel>Password</FormLabel>
                    </div>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      id="outlined-required"
                      label="Password"
                      name="password"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values.password}
                    />
                  </div>
                  {props.errors.password && props.touched.password && (
                    <div className="text-red-700 text-center">
                      {props.errors.password}
                    </div>
                  )}

                  <div className="flex p-2 space-x-3 items-center">
                    <div className="basis-[40%]"></div>
                    <Button variant="contained" type="submit">
                      Sign In
                    </Button>
                  </div>
                </Paper>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </React.Fragment>
  );
}
