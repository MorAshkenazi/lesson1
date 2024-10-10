import { FormikValues, useFormik } from "formik";
import { FunctionComponent } from "react";
import * as yup from "yup";

interface LoginProps {}

const Login: FunctionComponent<LoginProps> = () => {
  const formik: FormikValues = useFormik<FormikValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      email: yup.string().required().email(),
      password: yup
        .string()
        .required()
        .min(8, "Too short! Should be at least 8 characters"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
  });
  return (
    <>
      <h1>LOGIN</h1>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="email"
          autoComplete="off"
          name="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-danger">{formik.errors.email}</p>
        )}
        <input
          type="password"
          autoComplete="off"
          name="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-danger">{formik.errors.password}</p>
        )}
        <button
          type="submit"
          className="btn btn-dark"
          disabled={!formik.dirty || !formik.isValid}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
