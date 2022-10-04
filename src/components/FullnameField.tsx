import { Button, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Back } from "../ui/components/Back";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "./MyTextInput";

interface Props {
  submit: Function;
}

export const FullnameField = ({ submit }: Props) => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignSelf="center"
      alignContent="center"
      alignItems="center"
      direction="column"
      sx={{ width: "500px", height: "400px", margin: "20px" }}
      className="animate__animated animate__fadeInUp glass-efect"
    >
      <Back>
        <ArrowBackIcon fontSize="large" />
      </Back>

      <Formik
        initialValues={{ fullname: "" }}
        onSubmit={({ fullname }) => {
          submit(fullname);
        }}
        validationSchema={Yup.object({
          fullname: Yup.string()
            .required("The name is required")
            .min(2, "Must contain at least 2 characters"),
        })}
      >
        {(formik) => (
          <Form className="form">
            <h3 className="your-name">Your Name</h3>

            <MyTextInput name="fullname" placeholder="Your Name" />
            <Button
              type="submit"
              sx={{ fontSize: "20px", border: "solid 1px" }}
            >
              Start
            </Button>
          </Form>
        )}
      </Formik>
    </Grid>
  );
};