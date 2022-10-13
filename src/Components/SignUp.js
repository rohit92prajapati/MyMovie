import React from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as Yup from "yup";

import axios from "axios";

const SignupSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  gender: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  phone: Yup.number().required("Required"),
  age: Yup.number().required("Required"),
});

export default function SignUp() {
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          username: "",
          password: "",
          confirmpassword: "",
          gender: "",
          country: "",
          phone: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          // same shape as initial values
          console.log(values);
          try {
            const response = await axios.post("/signup", values);
            console.log("response", response);
          } catch (err) {}
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="flex justify-center bg-gradient-to-r from-purple-500 to-pink-500 py-8">
              <Paper elevation={3} className="px-8">
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
                  <div className="basis-[40%]">
                    <FormLabel>Confirm Password</FormLabel>
                  </div>
                  <TextField
                    required
                    fullWidth
                    type="password"
                    id="outlined-required"
                    name="confirmpassword"
                    label="Confirm Password"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.confirmpassword}
                  />
                </div>
                {props.errors.confirmpassword &&
                  props.touched.confirmpassword && (
                    <div className="text-red-700 text-center">
                      {props.errors.confirmpassword}
                    </div>
                  )}

                <div className="flex p-2 space-x-3 items-center">
                  <div className="basis-[40%]">
                    <FormLabel>Gender</FormLabel>
                  </div>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="gender"
                    fullWidth
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      onChange={props.handleChange}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      onChange={props.handleChange}
                      label="Male"
                    />
                  </RadioGroup>
                </div>

                <div className="flex p-2 space-x-3 items-center">
                  <div className="basis-[40%]">
                    <FormLabel>Age</FormLabel>
                  </div>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Age"
                    name="age"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.age}
                  />
                </div>
                {props.errors.age && props.touched.age && (
                  <div className="text-red-700 text-center">
                    {props.errors.age}
                  </div>
                )}
                <div className="flex p-2 space-x-3 items-center">
                  <div className="basis-[40%]">
                    <FormLabel>Country</FormLabel>
                  </div>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Country"
                    name="country"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.country}
                  />
                </div>
                {props.errors.country && props.touched.country && (
                  <div className="text-red-700 text-center">
                    {props.errors.country}
                  </div>
                )}
                <div className="flex p-2 space-x-3 items-center">
                  <div className="basis-[40%]">
                    <FormLabel>Phone</FormLabel>
                  </div>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required"
                    label="Phone"
                    name="phone"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.phone}
                  />
                </div>
                {props.errors.phone && props.touched.phone && (
                  <div className="text-red-700 text-center">
                    {props.errors.phone}
                  </div>
                )}
                <div className="flex p-2 space-x-3 items-center">
                  <div className="basis-[40%]"></div>
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                  <Button
                    variant="contained"
                    type="reset"
                    onClick={props.handleReset}
                  >
                    Reset
                  </Button>
                </div>
              </Paper>
            </div>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
}
